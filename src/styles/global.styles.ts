import styled, { createGlobalStyle } from "styled-components";
import JetBrainsMono from "../fonts/JetBrainsMono-Medium.ttf";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'JetBrainsMono';
    src: url(${JetBrainsMono});
}

`;

export const MainContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-rows: 1fr auto 0.8fr;
`;

export default GlobalStyle;
