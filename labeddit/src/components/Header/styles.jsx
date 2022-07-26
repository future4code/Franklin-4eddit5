import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-areas: ". logo text";
  align-items: center;
  height: 50px;
  background: #ededed;
`;

export const Image = styled.img`
  grid-area: logo;
  justify-self: center;
`;

export const TextContainer = styled.div`
  grid-area: text;
  justify-self: end;
`;

export const Text = styled.div`
  position: relative;
  right: 30px;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #4088cb;
  text-decoration: none;
`;
