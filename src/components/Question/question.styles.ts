import styled from "styled-components";
import { questionFont } from "../../styles/common.styles";

const QuestionContainer = styled.article`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.primary};
  border-radius: 10px;
  padding: 1.5rem;
  font-family: ${questionFont};
  grid-area: question;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

const QuestionNumberLabel = styled.span`
  display: block;
  font-size: 15px;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.label};
`;

const QuestionStatementLabel = styled.section`
  color: ${({ theme }) => theme.tertiary};
  text-align: justify;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const OptionContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;

  @media (min-width: 768px) {
    padding: 2rem 0;
    align-items: center;
  }
`;

const Option = styled.button`
  border: 1px solid #c2c4cf;
  padding: 1rem;
  background-color: transparent;
  border-radius: 26px;
  margin: 0.5rem 0;
  font-family: ${questionFont};
  font-size: 1rem;
  color: ${({ theme }) => theme.tertiary};
  border-color: ${({ theme }) => theme.border};
  @media (min-width: 768px) {
    width: 20rem;

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const QuestionFooter = styled.article`
  display: flex;
  justify-content: space-between;
`;

const NextButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  font-size: 1rem;
  background-color: transparent;
  font-family: ${questionFont};
  border: 2px solid ${({ theme }) => theme.border};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${({ theme }) => theme.tertiary};

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
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.border};
  border-radius: 1.5rem;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  color: ${({ theme }) => theme.tertiary};

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
  OptionContainer,
  Option,
  QuestionFooter,
  NextButton,
  BackButton,
};
