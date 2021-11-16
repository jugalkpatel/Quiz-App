import styled from "styled-components";
import { Link } from "react-router-dom";

import { primaryFont } from "../../styles/common.styles";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.tertiary};

  text-decoration: none;
`;

const LogoImgWrapper = styled.section`
  display: flex;

  max-width: 2rem;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const LogoText = styled.span`
  display: none;

  font-size: 1.2rem;
  font-family: ${primaryFont};
  font-weight: 800;

  margin-left: 0.5rem;

  @media (min-width: 568px) {
    display: block;
  }
`;

export { StyledLink, LogoImgWrapper, LogoImg, LogoText };
