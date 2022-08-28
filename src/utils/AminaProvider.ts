import {
  Component,
  ComponentSpec,
  ComposedComponent,
  composeContext,
  composeFunction,
  NodeProps,
  RxComponent,
} from "@iatools/rxdom";
import { darkTheme, Size, theme, Theme } from "./stitches";

type AminaProviderState = ProviderProps;
type AminaProviderProps = {
  Provider: (props?: NodeProps<AminaContextProps>) => RxComponent;
} & Partial<ProviderProps>;

class AminaProviderComponent extends Component<
  AminaProviderState,
  AminaProviderProps
> {
  unsubscribe: () => void;

  constructor(spec: ComponentSpec) {
    super(spec);

    const { size = "default", theme = this.readTheme() } = this.props;
    this.state = { size, theme };

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

const AminaProvider = Component.compose(AminaProviderComponent);

export const composeAmina = (
  ...[render, consumer]: Parameters<typeof composeContext>
) => {
  const [Provider, selector] = composeContext<AminaContextProps>(
    render,
    consumer
  );

  const WrappedProvider = composeFunction<Partial<ProviderProps>>(
    ({ props: { key = "AminaProvider", ...props } }) => {
      return AminaProvider({ key, Provider, ...props });
    }
  );

  return [WrappedProvider, selector] as const;
};

type WithAminaProps = {
  css: any;
};

export const withAmina = <P>(WrappedComponent: ComposedComponent<P>) => {
  const Component = composeFunction<WithAminaProps & P>(({ props }) => {
    return WrappedComponent({ ...props });
  });
};

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
