import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import black_logo from "../../assets/quiz_logo.svg";
import white_logo from "../../assets/quiz_logo_white.svg";
import cover from "../../assets/cover.svg";

import {
  Content,
  SmallText,
  QuizButton,
  StyledLink,
  LogoImgWrapper,
  LogoImg,
  LogoText,
  LargeText,
  Container,
  Poster,
  IconContainer,
  TextContainer
} from "./LandingPage.styles";

import { Theme } from "../../common";
import {
  ColumnContainer,
  LinkButton,
  CodeIcon
} from "../../styles/common.styles";

export type LandingPageProps = {
  mode: Theme;
};

function LandingPage({ mode }: LandingPageProps) {
  return (
    <Container>
      <Content>
        <StyledLink to="/">
          <LogoImgWrapper>
            <LogoImg src={mode === "light" ? black_logo : white_logo} />
          </LogoImgWrapper>
          <LogoText>Liquiz</LogoText>
        </StyledLink>

        <ColumnContainer>
          <LargeText>are you consider yourself a linux specialist?</LargeText>
          <LargeText>take this quiz to attest!</LargeText>
          <SmallText>
            participate in a quiz to verify your knowledge on various concepts.
          </SmallText>

          <QuizButton to="/login">take a quiz</QuizButton>
        </ColumnContainer>

        <ColumnContainer>
          <TextContainer>Made with {<CodeIcon />} by Jugal patel</TextContainer>
          <IconContainer>
            <LinkButton href="https://github.com/jugalkpatel">
              <AiFillGithub />
            </LinkButton>

            <LinkButton href="https://in.linkedin.com/in/jugal-patel-7846b7189">
              <AiFillLinkedin />
            </LinkButton>

            <LinkButton href="https://twitter.com/Jugal_Pt99">
              <AiFillTwitterCircle />
            </LinkButton>
          </IconContainer>
        </ColumnContainer>
      </Content>

      <Poster>
        <img src={cover} alt="cover_img" />
      </Poster>
    </Container>
  );
}

export { LandingPage };
