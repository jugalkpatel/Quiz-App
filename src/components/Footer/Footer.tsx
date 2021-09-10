import {
  FooterContainer,
  FooterText,
  FooterIconsWrapper,
  CodeIcon,
  LinkButton,
} from "./footer.styles";

import { WidthContainer } from "../../styles/common.styles";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

function Footer() {
  return (
    <>
      <FooterContainer>
        <WidthContainer>
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
        </WidthContainer>
      </FooterContainer>
    </>
  );
}

export { Footer };
