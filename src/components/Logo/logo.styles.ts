import styled from "styled-components";
import logo_img from "../../assets/linux_logo.svg";

const StyledLogo = styled.article`
  display: flex;
  align-items: center;
`;

const LogoImgWrapper = styled.section`
  display: flex;
  max-width: 2rem;
`;

const LogoImg = styled.img.attrs((_) => ({ src: logo_img }))`
  width: 100%;
`;

const LogoText = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  font-weight: 800;
`;

export { StyledLogo, LogoImgWrapper, LogoImg, LogoText };
