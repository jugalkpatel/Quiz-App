import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { TiUser } from "react-icons/ti";

import {
  zindex_one,
  RowContainer,
  primaryFont,
  WidthContainer,
} from "../../styles/common.styles";

export type MenuWrapperProps = {
  isVisible: boolean;
};

const NavbarContainer = styled.div`
  flex-shrink: 0;

  background-color: ${({ theme }) => theme.primary};

  color: ${({ theme }) => theme.tertiary};

  border-bottom: 1px solid ${({ theme }) => theme.border};

  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  z-index: ${zindex_one};
`;

const NavbarContent = styled(WidthContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MenuIcon = styled(CgMenu)`
  font-size: 1.5rem;

  cursor: pointer;

  @media (min-width: 568px) {
    display: none;
  }
`;

const DarkButton = styled.button`
  display: flex;
  align-items: center;

  background: transparent;

  font-size: 2rem;
  color: ${({ theme }) => theme.tertiary};

  border: 0;

  cursor: pointer;

  @media (min-width: 568px) {
    position: absolute;
    top: 0.7rem;
    right: 0;

    font-size: 1.6rem;

    padding: 0 1rem;
  }

  @media (min-width: 568px) and (max-width: 787px) {
    top: 0.9rem;
  }
`;

const ButtonContainer = styled(RowContainer)`
  align-items: center;

  font-size: ${primaryFont};

  @media (max-width: 568px) {
    display: none;
  }

  @media (min-width: 568px) {
    position: relative;
  }

  @media (min-width: 568px) and (max-width: 1040px) {
    margin: 0 2.5rem 0 0;
  }
`;

const MenuWrapper = styled.article<MenuWrapperProps>`
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  position: absolute;
  top: 2.6rem;
  right: 0;
  width: 10rem;
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: 0px 7px 12px 0px ${({ theme }) => theme.primary};
`;

const UserName = styled.h5`
  font-size: 1rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.tertiary};
`;

const Level = styled.p`
  font-size: 0.7rem;
  font-family: ${primaryFont};
  color: ${({ theme }) => theme.tertiary};

  margin: 0;
  padding: 0;
`;

const NavUserIcon = styled(TiUser)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.tertiary};

  margin-left: 0.5rem;
`;

const LoginButton = styled.button`
  background-color: transparent;

  font-size: 1rem;
  font-family: ${primaryFont};
  font-weight: 800;
  color: ${({ theme }) => theme.tertiary};

  margin: 0 1rem;

  padding: 0.3rem 1rem;

  border: 0;

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
  MenuIcon,
  DarkButton,
  ButtonContainer,
  UserName,
  NavUserIcon,
  Level,
  LoginButton,
  NavbarContent,
  MenuWrapper,
};
