import { useState } from "react";
import { useNavigate } from "react-router";

import { Logo } from "../Logo/Logo";
import { TiWeatherNight } from "react-icons/ti";
import { BiSun } from "react-icons/bi";

import {
  StyledNavbar,
  Menu,
  DarkButton,
  ButtonContainer,
  UserName,
  NavUserIcon,
  Level,
  LoginButton,
} from "./navbar.styles";
import { ColumnContainer, WidthContainer } from "../../styles/common.styles";

import { ThemeProps } from "../../hooks/useDarkMode.hook";
import { SideMenu } from "../index";
import { useAuth } from "../../contexts";

function Navbar({ mode, setMode }: ThemeProps) {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const credentials = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <StyledNavbar>
        <WidthContainer>
          <Menu
            onClick={() =>
              setSideBarVisibility((prevState) => (prevState ? false : true))
            }
          />
          <Logo mode={mode} />

          <DarkButton onClick={() => setMode()}>
            {mode === "light" ? <TiWeatherNight /> : <BiSun />}
          </DarkButton>

          {credentials?.authenticated ? (
            <ButtonContainer>
              <ColumnContainer>
                <UserName>Jugal Patel</UserName>
                <Level>Rookie</Level>
              </ColumnContainer>

              <NavUserIcon />
            </ButtonContainer>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>LOG IN</LoginButton>
          )}
        </WidthContainer>

        <SideMenu
          visibility={sidebarVisibility}
          setVisibility={setSideBarVisibility}
        />
      </StyledNavbar>
    </>
  );
}

export { Navbar };
