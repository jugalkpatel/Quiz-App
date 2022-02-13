import styled from "styled-components";

const MenuContainer = styled.ul`
  margin: 0;
  padding: 0.5rem 1rem;
  list-style-type: none;
  background-color: ${({ theme }) => theme.primary};
`;

const MenuItem = styled.li`
  cursor: pointer;
  margin: 0.5rem 0;
  color: ${({ theme }) => theme.tertiary};

  &:hover {
    color: ${({ theme }) => theme.border};
  }
`;

export { MenuContainer, MenuItem };
