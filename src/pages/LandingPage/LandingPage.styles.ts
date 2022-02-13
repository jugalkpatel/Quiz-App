import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import {
  ColumnContainer,
  primaryFont,
  BigText,
  RowContainer,
} from "../../styles/common.styles";

const Container = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;

const Content = styled(ColumnContainer)`
  color: ${({ theme }) => theme.tertiary};
  padding: 3rem 2rem;
  height: 100vh;
  justify-content: space-between;

  grid-column: 1 / -1;

  @media (min-width: 730px) {
    grid-column: 1 / 2;
  }
`;

const SmallText = styled.p`
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const QuizButton = styled(NavLink)`
  background-color: ${({ theme }) => theme.tertiary};
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  padding: 1rem 2rem;
  width: fit-content;
  margin: 1.5rem 0;
  border-radius: 0.7rem;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.tertiary};

  text-decoration: none;
`;

const LogoImgWrapper = styled.section`
  display: flex;

  max-width: 3rem;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const LogoText = styled.span`
  display: block;

  font-size: 2rem;
  font-family: ${primaryFont};
  font-weight: 800;

  margin-left: 0.5rem;
`;

const LargeText = styled(BigText)`
  font-size: 1.7rem;
`;

const Poster = styled.section`
  display: none;

  @media (min-width: 568px) {
    height: 50%;
  }

  @media (min-width: 730px) {
    display: grid;
  }

  @media (min-width: 768px) {
    height: 60%;
  }

  @media (min-width: 991px) {
    height: 80%;
  }
`;

const TextContainer = styled.footer`
  display: flex;
  align-items: center;
`;

const IconContainer = styled(RowContainer)`
  margin: 0.3rem 0;
`;

export {
  Content,
  SmallText,
  QuizButton,
  StyledLink,
  LogoText,
  LogoImgWrapper,
  LogoImg,
  LargeText,
  Poster,
  Container,
  IconContainer,
  TextContainer
};
