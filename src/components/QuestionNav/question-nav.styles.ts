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
    flex-wrap: wrap;
    align-items: center;
    padding: 1rem;
    max-height: 10rem;
    margin-left: 1rem;
    justify-content: center;
  }
`;

const NumberLabel = styled.span`
  display: block;
  color: ${({ theme }) => theme.tertiary};
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0 1rem;
  }
`;

export { QuestionNavigation, NumberLabel };
