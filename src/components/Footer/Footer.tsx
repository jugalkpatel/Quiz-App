import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  FooterContainer,
  FooterText,
  FooterIconsWrapper,
  CodeIcon,
  LinkButton,
  FooterContent,
} from "./Footer.styles";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterContent>
          <FooterText>Made with {<CodeIcon />} by Jugal Patel.</FooterText>
          <FooterIconsWrapper>
            <LinkButton href="https://github.com/jugalkpatel">
              <AiFillGithub />
            </LinkButton>

            <LinkButton href="https://in.linkedin.com/in/jugal-patel-7846b7189">
              <AiFillLinkedin />
            </LinkButton>

            <LinkButton href="https://twitter.com/Jugal_Pt99">
              <AiFillTwitterCircle />
            </LinkButton>
          </FooterIconsWrapper>
        </FooterContent>
      </FooterContainer>
    </>
  );
}

export { Footer };
