import { composeFunction, FragmentProps } from "@iatools/rxdom";
import { StyledProps, VariantProps } from "../../../utils/stitches";
import { styled } from "../../../utils/styled";

const css = {
  display: "block",
  color: "$title",
  fontFamily: "$sans",
  lineHeight: "$sm",
  variants: {
    type: {
      h1: { fontWeight: "$extrabold", fontSize: "$xxl" },
      h2: { fontWeight: "$extrabold", fontSize: "$xl" },
      h3: { fontWeight: "$bold", fontSize: "$lg" },
      h4: { fontWeight: "$bold", fontSize: "$md" },
      h5: { fontWeight: "$semibold", fontSize: "$sm" },
      h6: { fontWeight: "$semibold", fontSize: "$xs" },
    },
  },
  defaultVariants: {
    type: "h2",
  },
};

const StyledHeading = styled("div", css);

export type HeadingProps = FragmentProps &
  StyledProps &
  VariantProps<typeof css>;

export const Heading = composeFunction<HeadingProps>(
  ({ props: { type, as = type, ...props } }) => {
    return StyledHeading({ type, as, ...props });
  }
);
