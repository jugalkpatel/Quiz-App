import styled from "styled-components";
import { ColumnContainer, PrimaryButton } from "../../styles/common.styles";
import cactus from "../../assets/cactus.svg";

const NotAvailableContainer = styled(ColumnContainer)`
  height: 40vh;
  display: flex;
  align-items: center;
`;

const CactusImg = styled.img.attrs(() => ({
  height: "200px",
  width: "200px",
  src: cactus,
}))`
  width: 100%;
`;

const Message = styled.h3`
  color: ${({ theme }) => theme.tertiary};
`;

const GoHome = styled(PrimaryButton)`
  margin: 1rem;
  padding: 0.5rem 1.5rem;
`;

export { NotAvailableContainer, CactusImg, Message, GoHome };
