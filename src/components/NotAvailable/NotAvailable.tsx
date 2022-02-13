import { useNavigate } from "react-router-dom";
import cactus from "../../assets/cactus.svg";

import {
  NotAvailableContainer,
  CactusImg,
  Message,
  GoHome,
} from "./NotAvailable.styles";

export type NotAvailableProps = {
  image?: string;
  message: string;
};

function NotAvailable({ image, message }: NotAvailableProps) {
  const navigate = useNavigate();
  return (
    <NotAvailableContainer>
      <CactusImg src={image || cactus} />
      <Message>{message}</Message>
      <GoHome onClick={() => navigate("/home")}>home</GoHome>
    </NotAvailableContainer>
  );
}

export { NotAvailable };
