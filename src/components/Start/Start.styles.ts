import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { RowContainer, primaryFont } from "../../styles/common.styles";

export type TabProps = {
  isActive: boolean;
};

const Header = styled.header`
  font-size: 1rem;
`;

const NavBar = styled.nav`
  display: flex;
  flex-direction: column;
`;

const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: ${({ theme }) => theme.tertiary};
  width: fit-content;
  border: 0;
  font-size: 1.3rem;
  padding: 0.5rem;
  padding-left: 0;
  font-family: ${primaryFont};
`;

const StartContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 50vh;
  padding: 1rem;
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
  color: ${({ theme }) => theme.tertiary};
  text-decoration: none;
  padding: 1rem;
  font-family: ${primaryFont};
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
