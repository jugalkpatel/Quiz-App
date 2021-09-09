import GlobalStyle from "./styles/global.styles";

import { AppRoutes } from "./AppRoutes";
import { Navbar } from "./components/";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <AppRoutes />
    </>
  );
}

export default App;
