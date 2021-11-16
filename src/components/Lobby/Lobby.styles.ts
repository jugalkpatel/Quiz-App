import styled from "styled-components";
import { BsPlayFill } from "react-icons/bs";

import {
  BigText,
  primaryFont,
  SubText,
  Label,
  PrimaryButton,
} from "../../styles/common.styles";

const LobbyHeader = styled(BigText)`
  font-size: 2.5rem;
`;

const LobbyDesc = styled(SubText)`
  margin: 0.7rem 0;
  font-family: ${primaryFont};
  text-align: justify;
  font-size: 1.2rem;
`;

const InstructionTitle = styled(Label)`
  font-size: 1.5rem;
  margin: 0.5rem 0;
`;

const InstructionList = styled.ul`
  margin: 0rem 2rem;
`;

const Instruction = styled.li`
  margin: 0.5rem 0;
  font-family: ${primaryFont};
  font-size: 1rem;
`;

const Play = styled(PrimaryButton)`
  margin: 1rem 0;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const PlayIcon = styled(BsPlayFill)`
  font-size: 1.5rem;
`;

export {
  LobbyHeader,
  LobbyDesc,
  InstructionList,
  Instruction,
  Play,
  InstructionTitle,
  PlayIcon,
};
