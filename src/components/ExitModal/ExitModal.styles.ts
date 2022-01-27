import styled from "styled-components";
import {
  ColumnContainer,
  RowContainer,
  primaryFont,
  PrimaryButton,
} from "../../styles/common.styles";

type ExitOptionType = {
  readonly option: "YES" | "NO";
};

const ExitModalContentContainer = styled(ColumnContainer)`
  font-family: ${primaryFont};
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.tertiary};
  max-width: 90vw;
  max-height: 30vh;
  padding: 1rem;
  border-radius: 0.7rem;
  font-size: 1rem;

  @media (min-width: 568px) {
    max-width: 70vw;
  }
`;

const ExitModalHeader = styled.header`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
`;

const ExitModalOptionsContainer = styled(RowContainer)`
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ExitModalMain = styled.main`
  text-align: justify;
`;

const ExitOptionButton = styled(PrimaryButton)<ExitOptionType>`
  margin-left: 0.7rem;
  padding: 0.5rem 1.5rem;
  border-color: transparent;
  background-color: ${({ option, theme }) =>
    option === "YES" ? theme.invalid : theme.valid};
  color: ${({ theme }) => theme.tertiary};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0.2rem;
  right: 0;
  font-size: 1.5rem;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.tertiary};
  cursor: pointer;
  padding: 0;
`;

export {
  ExitModalContentContainer,
  ExitModalHeader,
  ExitModalOptionsContainer,
  ExitModalMain,
  ExitOptionButton,
  CloseButton,
};
