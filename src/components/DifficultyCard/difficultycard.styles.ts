import styled from "styled-components";
import { quiz_black } from "../../styles/colors.styles";

const LevelCard = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  font-family: "JetBrainsMono";
  border: 3px solid ${quiz_black};
  padding: 1rem;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 1rem;
  margin: 1rem 0;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1.5fr;
    margin-right: 1rem;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 1rem;
`;

const CardImg = styled.img`
  width: 100%;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
  width: fit-content;
  border-radius: 40%;
  border: 3px solid ${quiz_black};
  background-color: transparent;
  margin: 0.5rem 0;
  cursor: pointer;
`;

const LevelLabel = styled.p`
  font-size: 0.8rem;
`;

const LevelName = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
`;

export {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
  CardImg,
};
