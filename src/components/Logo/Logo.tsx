import { StyledLogo, LogoImg, LogoImgWrapper, LogoText } from "./logo.styles";

function Logo() {
  return (
    <>
      <StyledLogo>
        <LogoImgWrapper>
          <LogoImg />
        </LogoImgWrapper>
        <LogoText>Liquiz</LogoText>
      </StyledLogo>
    </>
  );
}

export { Logo };
