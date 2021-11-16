import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global.styles";

import { AppRoutes } from "./AppRoutes";
import { useDarkMode } from "./hooks";

function App() {
  const [theme, themePack, toggleTheme] = useDarkMode();
  return (
    <ThemeProvider theme={themePack}>
      <GlobalStyle />
      <AppRoutes mode={theme} setMode={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
