import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

import {
  RowContainer,
  primaryFont,
  WidthContainer,
} from "../../styles/common.styles";

const Header = styled.header`
  font-size: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;

  background-color: transparent;

  font-size: 1.3rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.tertiary};

  padding: 0.5rem;
  padding-left: 0;

  border: 0;

  cursor: pointer;

  text-decoration: none;
`;

const StartContainer = styled(WidthContainer)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 50vh;

  @media (min-width: 568px) {
    padding: 1.5rem 1rem;
  }
`;

const TabContainer = styled(RowContainer)`
  border-bottom: 1px solid ${({ theme }) => theme.border};

  margin: 1rem 0;
`;

const Tab = styled(NavLink).attrs(({ theme }) => ({
  style: ({ isActive }) => ({
    fontWeight: isActive ? 900 : 500,
    borderBottom: isActive ? `2px solid ${theme.tertiary}` : "none",
  }),
}))`
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.tertiary};

  padding: 1rem;

  text-decoration: none;
`;

const BackIcon = styled(FaChevronLeft)`
  font-size: 1rem;

  margin-right: 0.5rem;
`;

export {
  Header,
  Tab,
  NavBar,
  BackButton,
  StartContainer,
  BackIcon,
  TabContainer,
};
