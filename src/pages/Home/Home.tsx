import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { MainContainer } from "./Home.styles";
import { secondaryFont } from "../../styles/common.styles";

import { ThemeTypes } from "../../common";
import { Navbar, Footer } from "../../components/";

function Home({ mode, setMode }: ThemeTypes) {
  return (
    <>
      <MainContainer>
        <Navbar mode={mode} setMode={setMode} />
        <Outlet />
        <Footer />
        <Toaster toastOptions={{ style: { fontFamily: secondaryFont } }} />
      </MainContainer>
    </>
  );
}

export { Home };
