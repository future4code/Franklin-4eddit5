import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import s from "styled-components";

export const Image = styled("img")({
  marginBottom: "30px",
  justifyContent: "center",
  justifyItems: "center",
  alignItems: "center",
});

export const ContainerImage = s.div`
  display: flex;
  justify-content: center;
`;

export const Box = styled(Container)({
  justifyContent: "center",
  alignItems: "center",
});
