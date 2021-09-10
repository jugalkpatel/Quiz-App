import { createGlobalStyle } from "styled-components";
import JetBrainsMono from "../fonts/JetBrainsMono-Medium.ttf";

const GlobalStyle = createGlobalStyle`

html {
  height: 100%;
}

body {
  min-height: 100%;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
    font-family: 'JetBrainsMono';
    src: url(${JetBrainsMono});
}

#root {
  height: 100vh;
}

`;

export default GlobalStyle;
