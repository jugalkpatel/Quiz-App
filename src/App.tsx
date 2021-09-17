import GlobalStyle from "./styles/global.styles";
import { AppRoutes } from "./AppRoutes";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/themes.styles";
import { useDarkMode } from "./hooks/useDarkMode.hook";

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
