import { styled } from "../../../utils/styled";
import { withAmina } from "../../../utils/withAmina";

export const Box = withAmina(
  styled("div", {
    w: "100%",
    maxW: "100%",
    mr: "auto",
    ml: "auto",
  })
);
