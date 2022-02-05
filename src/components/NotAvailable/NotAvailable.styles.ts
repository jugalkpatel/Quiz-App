import styled from "styled-components";
import { ColumnContainer, PrimaryButton } from "../../styles/common.styles";

const NotAvailableContainer = styled(ColumnContainer)`
  height: 50vh;
  display: flex;
  align-items: center;
  padding: 1.5rem;
`;

const CactusImg = styled.img.attrs(() => ({
  height: "200px",
  width: "200px",
}))`
  width: 100%;
`;

const Message = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.tertiary};
  margin: 1rem 0;
`;

const GoHome = styled(PrimaryButton)`
  padding: 0.5rem 1.5rem;
`;

export { NotAvailableContainer, CactusImg, Message, GoHome };
