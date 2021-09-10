import { Navbar, Footer } from "../../components/";
import { Main } from "../Main/Main";
import { MainContainer } from "./home.styles";

function Home() {
  return (
    <>
      <MainContainer>
        <Navbar />
        <Main />
        <Footer />
      </MainContainer>
    </>
  );
}

export { Home };
