import { StyledLink, LogoImg, LogoImgWrapper, LogoText } from "./logo.styles";

function Logo() {
  return (
    <>
      <StyledLink to="/">
        <LogoImgWrapper>
          <LogoImg />
        </LogoImgWrapper>
        <LogoText>Liquiz</LogoText>
      </StyledLink>
    </>
  );
}

export { Logo };
