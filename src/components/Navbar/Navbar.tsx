import { StyledNavbar, UserProfile, Menu } from "./navbar.styles";
import { WidthContainer } from "../../styles/common.styles";

import { Logo } from "../Logo/Logo";

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <WidthContainer>
          <Menu onClick={() => console.log("clicked on side menu")} />
          <Logo />
          <UserProfile onClick={() => console.log("clicked on user profile")} />
        </WidthContainer>
      </StyledNavbar>
    </>
  );
}

export { Navbar };
