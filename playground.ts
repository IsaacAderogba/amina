import { composeFunction, RxDOM } from "@iatools/rxdom";
import {
  AminaProvider,
  aminaSelector,
  AminaContextProps,
  styled,
  Box,
} from "./src";

const App = composeFunction(() => {
  return AminaProvider({
    theme: "dark",
    content: [ThemeComponent(), SizeComponent()],
  });
});

interface ThemeComponentContext {
  amina: {
    theme: AminaContextProps["theme"];
    setTheme: AminaContextProps["setTheme"];
  };
}

const ThemeComponent = composeFunction<{}, ThemeComponentContext>(
  ({ context }) => {
    console.log("ThemeComponent", context.amina.theme);
    const { theme, setTheme } = context.amina;
    return Box({
      css: { backgroundColor: "$primary" },
      content: [theme],
      onclick: () => setTheme(theme === "dark" ? "light" : "dark"),
    });
  },
  {
    amina: aminaSelector((state) => ({
      setTheme: state.setTheme,
      theme: state.theme,
    })),
  }
);

interface SizeComponentContext {
  amina: {
    size: AminaContextProps["size"];
    setSize: AminaContextProps["setSize"];
  };
}

const SizeComponent = composeFunction<{}, SizeComponentContext>(
  ({ context }) => {
    console.log("SizeComponent", context.amina.size);
    const { size, setSize } = context.amina;
    return SizeButton({
      content: [size],
      onclick: () => setSize(size === "default" ? "small" : "default"),
    });
  },
  {
    amina: aminaSelector((state) => ({
      setSize: state.setSize,
      size: state.size,
    })),
  }
);

const SizeButton = styled("button", {
  backgroundColor: "red",
});

const rxdom = new RxDOM();
rxdom.render(App({ key: "root" }), document.getElementById("app")!);
