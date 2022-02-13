import { createGlobalStyle } from "styled-components";
import Alegreya from "../fonts/AlegreyaSansSC-Regular.ttf";
import QuickSand from "../fonts/Quicksand-SemiBold.ttf";

const GlobalStyle = createGlobalStyle`

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

body {
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.tertiary};
  transition: all 0.50s linear;
  font-family: 'Alegreya';
}

#root {
  position: relative;
}

`;

export default GlobalStyle;
