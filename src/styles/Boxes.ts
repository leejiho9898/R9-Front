import { Container, Paper } from "@mui/material";
import { styled } from "@mui/styles";

/** 넓은 화면 (기본값) */
export const BasicBox = styled(Paper)({
  marginX: "auto",
  maxWidth: "md",
  padding: "20px",
});

/** 좁은 화면 */
export const ContainerBox = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: 10,
});
