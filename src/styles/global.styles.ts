import { createGlobalStyle } from "styled-components";
import Alegreya from "../fonts/AlegreyaSansSC-Medium.ttf";
import QuickSand from "../fonts/Quicksand-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`

body {
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.tertiary};
  transition: all 0.50s linear;
  font-family: url(${Alegreya})
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

@font-face {
  font-family: "Alegreya";
  src: url(${Alegreya});
}


@font-face {
  font-family: "QuickSand";
  src: url(${QuickSand});
}

#root {
  height: 100vh;
  position: relative;
}

`;

export default GlobalStyle;
