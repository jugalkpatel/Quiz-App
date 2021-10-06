import { useNavigate } from "react-router";

import { Logo } from "../Logo/Logo";
import { TiWeatherNight } from "react-icons/ti";
import { BiSun } from "react-icons/bi";
import { StyledNavbar, Menu, DarkButton } from "./navbar.styles";
import { WidthContainer } from "../../styles/common.styles";

import { ThemeProps } from "../../hooks/useDarkMode.hook";

function Navbar({ mode, setMode }: ThemeProps) {
  const navigate = useNavigate();
  return (
    <>
      <StyledNavbar>
        <WidthContainer>
          <Menu onClick={() => navigate("/signup")} />
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
