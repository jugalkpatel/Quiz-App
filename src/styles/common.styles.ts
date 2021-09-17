import styled from "styled-components";

const primaryFont = "Alegreya";
const questionFont = "QuickSand";

const zindex_one = 1;

const WidthContainer = styled.article`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;

  @media (min-width: 786px) {
    padding: 0.6rem 1rem;
  }

  @media (min-width: 970px) {
    padding: 0.6rem 0;
  }
`;

export { WidthContainer, primaryFont, questionFont, zindex_one };
