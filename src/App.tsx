import GlobalStyle from "./styles/global.styles";
import { MainContainer } from "./styles/global.styles";

import { AppRoutes } from "./AppRoutes";

function App() {
  return (
    <>
      <MainContainer>
        <GlobalStyle />
        <AppRoutes />
      </MainContainer>
    </>
  );
}

export default App;
