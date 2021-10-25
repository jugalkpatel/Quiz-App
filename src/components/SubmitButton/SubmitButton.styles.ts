import styled from "styled-components";
import { primaryFont } from "../../styles/common.styles";

const Submit = styled.button.attrs(() => ({
  type: "submit",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.primary};
  border: 0;
  font-family: ${primaryFont};
  font-size: 1rem;
  width: 100%;
  margin: 0.5rem 0;
  cursor: pointer;
`;

export { Submit };
