import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/styles";

/** 넓은 화면 (기본값) */
export const BasicBox = styled(Paper)({
  marginX: "auto",
  maxWidth: "md",
  padding: "20px",
});

/** 넓은 배경 없는 화면 (기본값) */
export const BasicDarkBox = styled(Container)({
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
  padding: 10,
});

export const TypoQue = styled(Typography)({
  width: "6rem",
  fontWeight: "bold",
  fontSize: "13px",
});

export const TypoAns = styled(Typography)({
  fontSize: "12px",
});
