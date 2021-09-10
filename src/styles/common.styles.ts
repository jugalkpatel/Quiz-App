import styled from "styled-components";

const WidthContainer = styled.article`
  font-family: "JetBrainsMono";
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 960px) {
    padding: 1rem 0;
  }
`;

export { WidthContainer };
