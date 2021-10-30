import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.styles";
import { lightTheme, darkTheme } from "./styles/themes.styles";

import { AppRoutes } from "./AppRoutes";
import { useDarkMode } from "./hooks";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themePack = theme === "light" ? lightTheme : darkTheme;
  console.log({ themePack });
  return (
    <ThemeProvider theme={themePack}>
      <GlobalStyle />
      <AppRoutes mode={theme} setMode={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
