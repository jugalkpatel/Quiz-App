import styled from "styled-components";
import { primaryFont } from "../../styles/common.styles";

const ComponentWrapper = styled.article`
  padding: 2rem 1rem;

  background-color: ${({ theme }) => theme.primary};
  @media (min-width: 960px) {
    width: 960px;
    margin: 0 auto;
  }
`;

const PageHeader = styled.article`
margin: 0;
font-family: ${primaryFont};
margin-bottom: 1rem;
margin-left: 1rem;
`;

const PageTitle = styled.h1`
  font-size: 1.5rem;
`;


const CardWrapper = styled.article`
  display: grid;

  @media (min-width: 568px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
`;

export { ComponentWrapper, PageHeader, PageTitle, CardWrapper };
