import { useNavigate } from "react-router-dom";

import { MenuContainer, MenuItem } from "./Menu.styles";

import { useAuth } from "../../contexts";
import { logout } from "../../utils/logout";

function Menu() {
  const navigate = useNavigate();
  const credentials = useAuth();
  const userLogout = logout(credentials.dispatch, navigate);
  return (
    <MenuContainer>
      <MenuItem onClick={() => navigate("/profile")}>profile</MenuItem>
      <MenuItem onClick={() => userLogout()}>logout</MenuItem>
    </MenuContainer>
  );
}

export { Menu };
