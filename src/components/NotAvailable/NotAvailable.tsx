import { useNavigate } from "react-router-dom";

import {
  NotAvailableContainer,
  CactusImg,
  Message,
  GoHome,
} from "./NotAvailable.styles";

export type NotAvailableProps = {
  message: string;
};

function NotAvailable({ message }: NotAvailableProps) {
  const navigate = useNavigate();
  return (
    <NotAvailableContainer>
      <CactusImg />
      <Message>{message}</Message>
      <GoHome onClick={() => navigate("/")}>home</GoHome>
    </NotAvailableContainer>
  );
}

export { NotAvailable };
