import styled from "styled-components";

import { secondaryFont } from "../../styles/common.styles";

const QuestionContainer = styled.article`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.primary};

  padding: 1.3rem;

  font-family: ${secondaryFont};

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 0.7rem;

  grid-area: question;
`;

const QuestionNumberLabel = styled.span`
  display: block;

  margin-bottom: 0.7rem;

  font-size: 0.9rem;
  color: ${({ theme }) => theme.label};
`;

const QuestionStatementLabel = styled.section`
  min-height: 6.5rem;

  font-size: 1.2rem;
  color: ${({ theme }) => theme.tertiary};

  text-align: justify;

  @media (min-width: 568px) {
    min-height: 5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;

    min-height: 4rem;
  }
`;

const QuestionFooter = styled.article`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  font-size: 1rem;
  font-family: ${secondaryFont};
  color: ${({ theme }) => theme.tertiary};

  padding: 0.5rem 1rem;

  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 1.5rem;

  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};

      color: ${({ theme }) => theme.primary};
    }
  }
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;

  font-size: 1rem;
  color: ${({ theme }) => theme.tertiary};

  padding: 0.5rem 1rem;

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 1.5rem;

  cursor: pointer;

  @media (min-width: 768px) {
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export {
  QuestionContainer,
  QuestionNumberLabel,
  QuestionStatementLabel,
  QuestionFooter,
  NextButton,
  BackButton,
};
