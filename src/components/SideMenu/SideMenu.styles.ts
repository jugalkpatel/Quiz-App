import styled from "styled-components";
import { TiUser } from "react-icons/ti";

import {
  ColumnContainer,
  primaryFont,
  zindex_three,
  zindex_four,
} from "../../styles/common.styles";

type SideMenuProps = {
  readonly show: boolean;
};

const SideMenuContainer = styled.article<SideMenuProps>`
  display: ${({ show }) => (show ? "block" : "none")};

  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;

  min-height: 100vh;
  width: 100%;

  background-color: transparent;

  font-family: ${primaryFont};

  z-index: ${zindex_three};

  @media (min-width: 568px) {
    display: none;
  }
`;

const SideMenuContent = styled(ColumnContainer)`
  min-height: 100%;
  width: 60vw;

  background-color: ${({ theme }) => theme.primary};

  padding: 1rem;

  border-right: 1px solid ${({ theme }) => theme.border};

  z-index: ${zindex_four};
`;

const MenuList = styled.ul`
  margin: 0;

  padding: 0;

  list-style-type: none;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.tertiary};

  padding: 0.5rem;

  border-bottom: 1px solid ${({ theme }) => theme.border};

  cursor: pointer;
`;

const UserIcon = styled(TiUser)`
  font-size: 2rem;

  margin-right: 0.5rem;
`;

export { SideMenuContainer, SideMenuContent, MenuList, MenuItem, UserIcon };
