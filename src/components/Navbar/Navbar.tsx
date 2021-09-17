import { Logo } from "../Logo/Logo";

import { StyledNavbar, Menu, DarkButton } from "./navbar.styles";
import { WidthContainer } from "../../styles/common.styles";
import { TiWeatherNight } from "react-icons/ti";
import { BiSun } from "react-icons/bi";

import { ThemeProps } from "../../hooks/useDarkMode.hook";

function Navbar({ mode, setMode }: ThemeProps) {
  return (
    <>
      <StyledNavbar>
        <WidthContainer>
          <Menu onClick={() => console.log("clicked on side menu")} />
          <Logo mode={mode} />
          <DarkButton onClick={() => setMode()}>
            {mode === "light" ? <TiWeatherNight /> : <BiSun />}
          </DarkButton>
        </WidthContainer>
      </StyledNavbar>
    </>
  );
}

export { Navbar };
