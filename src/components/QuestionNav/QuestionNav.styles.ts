import styled from "styled-components";

import { ColumnContainer, secondaryFont } from "../../styles/common.styles";

type NumberLabelProps = {
  enableHighlight: boolean;
};

const QuestionNavigationContainer = styled(ColumnContainer)`
  height: fit-content;

  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-left: 1rem;
  }
`;

const QuestionNavigation = styled.article`
  display: flex;
  flex-wrap: nowrap;

  background-color: ${({ theme }) => theme.primary};

  font-family: ${secondaryFont};

  margin-bottom: 1rem;

  padding: 1rem 0;

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 10px;

  overflow-x: auto;

  grid-area: question_nav;

  @media (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    height: 16rem;

    margin-left: 1rem;

    padding: 1rem;
  }
`;

const NumberLabel = styled.button<NumberLabelProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 1rem;
  width: 1rem;

  background-color: ${({ theme, enableHighlight }) =>
    enableHighlight ? theme.tertiary : "transparent"};

  font-family: ${secondaryFont};
  font-size: 0.8rem;
  color: ${({ theme, enableHighlight }) =>
    enableHighlight ? theme.primary : theme.tertiary};

  border: 1px solid transparent;
  border-radius: 50%;

  margin: 0 1rem;

  padding: 1rem;

  cursor: pointer;

  @media (min-width: 768px) {
    margin: 0 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};

      color: ${({ theme }) => theme.primary};
    }
  }
`;

export { QuestionNavigation, NumberLabel, QuestionNavigationContainer };
