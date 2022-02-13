import styled from "styled-components";

import { primaryFont } from "../../styles/common.styles";

const MainContainer = styled.section`
  padding: 2rem 1rem;
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

export { MainContainer, PageHeader, CardWrapper };
