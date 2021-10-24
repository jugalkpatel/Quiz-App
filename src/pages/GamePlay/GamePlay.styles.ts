import styled from "styled-components";

import { primaryFont } from "../../styles/common.styles";

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
    "question";
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 0.7fr;
    grid-template-rows: 1fr;
    grid-template-areas: "question question_nav";
  }
`;

const GamePlayFooter = styled.article`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 1.5rem;
  background-color: transparent;
  font-family: ${primaryFont};
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 1.5rem;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export {
  GamePlayWrapper,
  MaxWidthWrapper,
  GamePlayContent,
  GamePlayFooter,
  NextButton,
  BackButton,
};
