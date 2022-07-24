import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Primary = styled(Button)({
  width: "100%",
  borderRadius: "27px",
  background: "linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "25px",
  marginBottom: "10px",
  marginTop: "30px",
});

export const Secondary = styled(Button)({
  width: "100%",
  background: "linear-gradient(90deg, #FF6489 0%, #F9B24E 100%)",
  textTransform: "none",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "25px",
});

export const Transparent = styled(Button)({
  width: "100%",
  border: "1px solid #FE7E02",
  borderRadius: "27px",
  background: "none",
  textTransform: "none",
  color: "#FE7E02",
  fontWeight: "700",
  fontSize: "18px",
  lineHeight: "25px",
  marginTop: "10px",

  "&:hover": {
    background: "none",
  },
});
