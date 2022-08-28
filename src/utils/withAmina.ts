import { ComposedComponent, composeFunction } from "@iatools/rxdom";
import { AminaContextProps, aminaSelector } from "./AminaProvider";
import { classNames } from "./classNames";
import { aminaCSS, AminaCSS } from "./stitches";

type WithAminaProps = {
  css?: AminaCSS;
};

type WithAminaContext = {
  amina: Pick<AminaContextProps, "size" | "theme">;
};

export const withAmina = <P>(WrappedComponent: ComposedComponent<P>) => {
  return composeFunction<WithAminaProps & P, WithAminaContext>(
    ({ props, context: { amina } }) => {
      const componentCSS = aminaCSS(props.css || {});
      const className = classNames(componentCSS(), props.className);

      return WrappedComponent({ ...props, ...amina, className });
    },
    {
      amina: aminaSelector((state) => ({
        size: state.size,
        theme: state.theme,
      })),
    }
  );
};

export type WithAminaAttrs = {};
