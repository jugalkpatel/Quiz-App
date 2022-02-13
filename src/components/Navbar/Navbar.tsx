import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiSun } from "react-icons/hi";
import { IoIosCloudyNight } from "react-icons/io";
import {
  NavbarContainer,
  MenuIcon,
  DarkButton,
  ButtonContainer,
  UserName,
  NavUserIcon,
  Level,
  LoginButton,
  NavbarContent,
  MenuWrapper,
} from "./Navbar.styles";
import { ColumnContainer } from "../../styles/common.styles";

import { ThemeTypes } from "../../common";
import { useAuth } from "../../contexts";
import { Logo, SideMenu, Menu } from "../../components";

function Navbar({ mode, setMode }: ThemeTypes) {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const credentials = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <MenuIcon
            onClick={() =>
              setSideBarVisibility((prevState) => (prevState ? false : true))
            }
          />
          <Logo mode={mode} />

          <DarkButton onClick={() => setMode()}>
            {mode === "light" ? <IoIosCloudyNight /> : <HiSun />}
          </DarkButton>

          {credentials?.authenticated ? (
            <ButtonContainer
              onClick={() =>
                setSideBarVisibility((prevState) => (prevState ? false : true))
              }
            >
              <ColumnContainer>
                <UserName>{credentials.name}</UserName>
                <Level>{credentials.level}</Level>
              </ColumnContainer>

              <NavUserIcon />

              <MenuWrapper isVisible={sidebarVisibility}>
                <Menu />
              </MenuWrapper>
            </ButtonContainer>
          ) : (
            <LoginButton onClick={() => navigate("/login")}>LOG IN</LoginButton>
          )}
        </NavbarContent>

        <SideMenu
          visibility={sidebarVisibility}
          setVisibility={setSideBarVisibility}
        />
      </NavbarContainer>
    </>
  );
}

export { Navbar };
