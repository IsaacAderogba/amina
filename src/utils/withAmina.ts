import { ComposedComponent, composeFunction } from "@iatools/rxdom";
import { AminaContextProps, aminaSelector } from "./AminaProvider";
import { AminaCSS } from "./stitches";

type WithAminaProps = {
  css?: AminaCSS;
};

type WithAminaContext = {
  amina: Pick<AminaContextProps, "size" | "theme">;
};

export const withAmina = <P>(WrappedComponent: ComposedComponent<P>) => {
  return composeFunction<WithAminaProps & P, WithAminaContext>(
    ({ props, context: { amina } }) => {
      return WrappedComponent({ ...amina, ...props });
    },
    {
      amina: aminaSelector((state) => ({
        size: state.size,
        theme: state.theme,
      })),
    }
  );
};
