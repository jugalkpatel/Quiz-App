import styled from "styled-components";

import { secondaryFont } from "../../styles/common.styles";

const QuestionNavigation = styled.article`
  display: flex;
  border: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.primary};
  padding: 1rem 0;
  border-radius: 10px;
  font-family: ${secondaryFont};
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 1rem;
  grid-area: question_nav;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  @media (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    max-height: 16rem;
    margin-left: 1rem;
  }
`;

const NumberLabel = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${({ theme }) => theme.tertiary};
  margin: 0 1rem;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid transparent;
  padding: 1rem;
  height: 1rem;
  width: 1rem;

  @media (min-width: 768px) {
    margin: 0 0.5rem;

    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export { QuestionNavigation, NumberLabel };
