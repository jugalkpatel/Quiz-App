import styled from "styled-components";

import { primaryFont } from "../../styles/common.styles";

const ComponentWrapper = styled.article`
  background-color: ${({ theme }) => theme.primary};

  padding: 2rem 1rem;
  @media (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
  }
`;

const PageHeader = styled.article`
  display: flex;
  justify-content: space-between;

  font-family: ${primaryFont};

  margin: 0;
  margin: 0 1rem 1rem 1rem;
`;

const CardWrapper = styled.article`
  display: grid;

  @media (min-width: 568px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export { ComponentWrapper, PageHeader, CardWrapper };
