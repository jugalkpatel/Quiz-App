import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { TiUser } from "react-icons/ti";

import {
  zindex_one,
  RowContainer,
  primaryFont,
  WidthContainer,
} from "../../styles/common.styles";

const NavbarContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.tertiary};
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: ${zindex_one};
  position: relative;
`;

const NavbarContent = styled(WidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled(CgMenu)`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 568px) {
    display: none;
  }
`;

const DarkButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${({ theme }) => theme.tertiary};
  background: transparent;
  border: 0;
  @media (min-width: 568px) {
    position: absolute;
    top: 0.7rem;
    right: 0;
    padding: 0 1rem;
    font-size: 1.6rem;
  }

  @media (min-width: 568px) and (max-width: 787px) {
    top: 1.1rem;
  }
`;

const ButtonContainer = styled(RowContainer)`
  align-items: center;
  font-size: ${primaryFont};

  @media (max-width: 568px) {
    display: none;
  }

  @media (min-width: 568px) and (max-width: 1040px) {
    margin: 0 2.5rem 0 0;
  }
`;

const UserName = styled.h5`
  font-size: 1rem;
  color: ${({ theme }) => theme.tertiary};
  font-family: ${primaryFont};
`;

const Level = styled.p`
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.tertiary};
  font-size: 0.7rem;
  font-family: ${primaryFont};
`;

const NavUserIcon = styled(TiUser)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.tertiary};
  margin-left: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.3rem 1rem;
  border: 0;
  padding: 0;
  margin: 0 1rem;
  color: ${({ theme }) => theme.tertiary};
  background-color: transparent;
  font-weight: 800;
  font-family: ${primaryFont};
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 568px) {
    display: none;
  }

  @media (min-width: 568px) and (max-width: 1040px) {
    margin: 0 2.5rem 0 0;
  }
`;

export {
  NavbarContainer,
  Menu,
  DarkButton,
  ButtonContainer,
  UserName,
  NavUserIcon,
  Level,
  LoginButton,
  NavbarContent,
};
