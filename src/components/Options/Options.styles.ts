import styled from "styled-components";
import { secondaryFont } from "../../styles/common.styles";

const OptionContainer = styled.section`
  display: flex;
  flex-direction: column;

  min-height: 25.5rem;

  padding: 1rem 0;

  @media (min-width: 568px) {
    min-height: 24rem;
  }

  @media (min-width: 768px) {
    align-items: center;

    min-height: 23rem;

    padding: 0;
  }
`;

const Option = styled.button`
  color: ${({ theme }) => theme.tertiary};
  font-family: ${secondaryFont};
  font-size: 1rem;

  padding: 1rem;

  margin: 0.5rem 0;

  border: 1px solid ${({ theme }) => theme.tertiary};
  border-radius: 1.5rem;

  cursor: pointer;

  @media (min-width: 768px) {
    width: 20rem;

    padding: 0.8rem;
  }
`;

export { OptionContainer, Option };
