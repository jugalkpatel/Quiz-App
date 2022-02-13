import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

import { ModalBackContainer } from "../../styles/common.styles";
import {
  ExitModalContentContainer,
  ExitModalHeader,
  ExitModalOptionsContainer,
  ExitModalMain,
  ExitOptionButton,
  CloseButton,
} from "./ExitModal.styles";

function ExitModal() {
  const navigate = useNavigate();
  const goBackClick = () => navigate(-1);
  return (
    <ModalBackContainer>
      <ExitModalContentContainer>
        <ExitModalHeader>
          exit to lobby
          <CloseButton onClick={goBackClick}>
            <IoMdClose />
          </CloseButton>
        </ExitModalHeader>

        <ExitModalMain>
          this will return you to the Main Menu without saving your game are you
          sure you want to exit?
        </ExitModalMain>

        <ExitModalOptionsContainer>
          <ExitOptionButton option="YES" onClick={() => navigate("/home")}>
            yes
          </ExitOptionButton>
          <ExitOptionButton option="NO" onClick={goBackClick}>
            no
          </ExitOptionButton>
        </ExitModalOptionsContainer>
      </ExitModalContentContainer>
    </ModalBackContainer>
  );
}
export { ExitModal };
