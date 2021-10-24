import { useState } from "react";
import { useNavigate } from "react-router";

import { HiSun } from "react-icons/hi";
import { IoIosCloudyNight } from "react-icons/io";
import {
  NavbarContainer,
  Menu,
  DarkButton,
  ButtonContainer,
  UserName,
  NavUserIcon,
  Level,
  LoginButton,
  NavbarContent,
} from "./Navbar.styles";
import { ColumnContainer } from "../../styles/common.styles";

import { ThemeProps } from "../../hooks/useDarkMode.hook";
import { Logo, SideMenu } from "../../components";
import { useAuth } from "../../contexts";

function Navbar({ mode, setMode }: ThemeProps) {
  const [sidebarVisibility, setSideBarVisibility] = useState(false);
  const credentials = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <NavbarContainer>
        <NavbarContent>
          <Menu
            onClick={() =>
              setSideBarVisibility((prevState) => (prevState ? false : true))
            }
          />
          <Logo mode={mode} />

          <DarkButton onClick={() => setMode()}>
            {mode === "light" ? <IoIosCloudyNight /> : <HiSun />}
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
