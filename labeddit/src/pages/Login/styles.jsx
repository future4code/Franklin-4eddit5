import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Image = styled("img")({
  width: "100%",
  marginBottom: "30px",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
});

export const Box = styled(Container)({
  justifyContent: "center",
  alignItems: "center",
  "@media (min-width: 450px)": {
    width: "35%",
  },
});
