import { Outlet } from "react-router";
import { MainContainer } from "./home.styles";

import { Navbar, Footer } from "../../components/";
import { ThemeProps } from "../../hooks/useDarkMode.hook";

function Home({ mode, setMode }: ThemeProps) {
  return (
    <>
      <MainContainer>
        <Navbar mode={mode} setMode={setMode} />
        <Outlet />
        <Footer />
      </MainContainer>
    </>
  );
}

export { Home };
