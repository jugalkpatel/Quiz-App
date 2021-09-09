import styled from "styled-components";
import logo from "../../assets/quiz_logo.svg";
import { Link } from "react-router-dom";
import { quiz_black } from "../../styles/colors.styles";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${quiz_black};
`;

const LogoImgWrapper = styled.section`
  display: flex;
  max-width: 2rem;
`;

const LogoImg = styled.img.attrs((_) => ({ src: logo }))`
  width: 100%;
`;

const LogoText = styled.span`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  font-weight: 800;
  display: none;

  @media (min-width: 568px) {
    display: block;
  }
`;

export { StyledLink, LogoImgWrapper, LogoImg, LogoText };
