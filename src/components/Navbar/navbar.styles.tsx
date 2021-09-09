import styled from "styled-components";
import { FaRegUserCircle } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { border_grey, quiz_black } from "../../styles/colors.styles";

const StyledNavbar = styled.div`
  border-bottom: 1px solid ${border_grey};
`;

const Container = styled.article`
  font-family: "JetBrainsMono";
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${quiz_black};
  max-width: 960px;
  margin: 0 auto;
`;

const UserProfile = styled(FaRegUserCircle)`
  font-size: 1.5rem;
  cursor: pointer;
`;

const Menu = styled(CgMenu)`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 568px) {
    display: none;
  }
`;

export { StyledNavbar, UserProfile, Menu, Container };
