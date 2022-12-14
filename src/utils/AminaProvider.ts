import {
  Component,
  ComponentSpec,
  composeContext,
  composeFunction,
  NodeProps,
  RxComponent,
  div,
} from "@iatools/rxdom";
import { aminaGlobalCSS, darkTheme, Size, theme, Theme } from "./stitches";

type AminaState = ProviderProps;
type AminaProps = {
  Provider: (props?: NodeProps<AminaContextProps>) => RxComponent;
} & Partial<ProviderProps>;

class AminaComponent extends Component<AminaState, AminaProps> {
  unsubscribe: () => void;

  constructor(spec: ComponentSpec) {
    super(spec);
    aminaGlobalCSS();

    const { size = "default", theme = this.readTheme() } = this.props;
    this.state = { size, theme };
    this.setTheme(theme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach(({ type, attributeName }) => {
        if (type === "attributes" && attributeName === "class") {
          this.setTheme(this.readTheme());
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    this.unsubscribe = observer.disconnect;
  }

  themes = { light: theme.className, dark: darkTheme.className };
  readTheme = (): Theme => {
    const html = document.documentElement;
    if (html.classList.contains(this.themes["dark"])) return "dark";
    return "light";
  };

  setTheme = (theme: Theme) => {
    const prevTheme = this.readTheme();
    if (prevTheme === theme) return;

    const html = document.documentElement;
    html.classList.remove(this.themes[prevTheme]);
    html.classList.add(this.themes[theme]);

    this.setState((prev) => ({ ...prev, theme }));
  };

  setSize = (size: Size) => {
    this.setState((prev) => ({ ...prev, size }));
  };

  render() {
    const { size, theme } = this.state;
    const { Provider, content } = this.props;

    return Provider({
      size,
      setSize: this.setSize,
      theme,
      setTheme: this.setTheme,
      content,
    });
  }
}

const Amina = Component.compose(AminaComponent);

type ProviderProps = {
  theme: Theme;
  size: Size;
};

export type AminaContextProps = {
  setSize: (size: Size) => void;
  size: Size;
  setTheme: (theme: Theme) => void;
  theme: Theme;
};

const composeAmina = (
  ...[render, consumer]: Parameters<typeof composeContext>
) => {
  const [Provider, selector] = composeContext<AminaContextProps>(
    render,
    consumer
  );

  const WrappedProvider = composeFunction<Partial<ProviderProps>>(
    ({ props: { key = "Amina", ...props } }) => {
      return Amina({ key, Provider, ...props });
    }
  );

  return [WrappedProvider, selector] as const;
};

export const [AminaProvider, aminaSelector] = composeAmina(({ props }) => {
  return div({ content: props.content });
});
