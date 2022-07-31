import styled from "styled-components";
import { FormControl } from "@mui/material";

export const Container = styled.main``;

export const FormContainer = styled.div`
  display: grid;
  gap: 30px;
  width: 100%;
  padding: 30px;
`;

export const Form = styled(FormControl)({
  width: "100%",
  gap: "12px",
});

export const Line = styled.hr`
  width: 100%;
  border: 1px solid #f9b24e;
`;

export const CommentsContainer = styled.div`
  display: grid;
  gap: 10px;
  padding: 0 30px 30px;
`;
