import GlobalStyle from "./styles/global.styles";
import { MainContainer } from "./styles/global.styles";

import { AppRoutes } from "./AppRoutes";
import { Navbar, Footer } from "./components/";

function App() {
  return (
    <>
      <MainContainer>
        <GlobalStyle />
        <Navbar />
        <AppRoutes />
        <Footer />
      </MainContainer>
    </>
  );
}

export default App;
