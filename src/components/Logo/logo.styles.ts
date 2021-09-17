import styled from "styled-components";
import { Link } from "react-router-dom";
import { primaryFont } from "../../styles/common.styles";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.tertiary};
`;

const LogoImgWrapper = styled.section`
  display: flex;
  max-width: 2rem;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 800;
  display: none;
  font-family: ${primaryFont};

  @media (min-width: 568px) {
    display: block;
  }
`;

export { StyledLink, LogoImgWrapper, LogoImg, LogoText };
