import { StyledNavbar, UserProfile, Menu, Container } from "./navbar.styles";

import { Logo } from "../Logo/Logo";

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <Container>
          <Menu onClick={() => console.log("clicked on side menu")} />
          <Logo />
          <UserProfile onClick={() => console.log("clicked on user profile")} />
        </Container>
      </StyledNavbar>
    </>
  );
}

export { Navbar };
