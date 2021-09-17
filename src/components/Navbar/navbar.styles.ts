import styled from "styled-components";
import { CgMenu } from "react-icons/cg";
import { zindex_one } from "../../styles/common.styles";

const StyledNavbar = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};

  color: ${({ theme }) => theme.tertiary};
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.primary};
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  z-index: ${zindex_one};
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
  font-size: 2rem;
  color: ${({ theme }) => theme.tertiary};
  background: transparent;
  border: 0;
`;

export { StyledNavbar, Menu, DarkButton };
