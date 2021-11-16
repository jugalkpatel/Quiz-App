import styled from "styled-components";

import { PrimaryButton, primaryFont } from "../../styles/common.styles";

const GamePlayWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};

  padding: 1rem;

  @media (min-width: 568px) {
    padding: 1rem 2rem;
  }

  @media (min-width: 768px) {
    min-height: 100vh;
  }
`;

const MaxWidthWrapper = styled.article`
  max-width: 960px;

  margin: 0 auto;
`;

const GamePlayContent = styled.article`
  display: grid;
  grid-template-areas:
    "question_nav"
    "question"
    "finish_btn";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 0.7fr;
    grid-template-rows: 0.7fr 1fr;
    grid-template-areas:
      "question question_nav"
      "question finish_btn";
  }
`;

const GamePlayFooter = styled.article`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  background-color: transparent;

  font-size: 1.5rem;
  font-family: ${primaryFont};

  padding: 0.5rem 1rem;

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 1.5rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;

  font-size: 1.5rem;

  padding: 0.5rem 1rem;

  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 1.5rem;
`;

const FinishButton = styled(PrimaryButton)`
  grid-area: finish_btn;

  margin: 1rem 0;

  @media (min-width: 768px) {
    height: fit-content;

    margin: 0 0 0 1rem;
  }
`;

export {
  GamePlayWrapper,
  MaxWidthWrapper,
  GamePlayContent,
  GamePlayFooter,
  NextButton,
  BackButton,
  FinishButton,
};
