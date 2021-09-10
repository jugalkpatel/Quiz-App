import styled from "styled-components";
import { quiz_black } from "../../styles/colors.styles";

const LevelCard = styled.article`
  font-family: "JetBrainsMono";
  border: 3px solid ${quiz_black};
  padding: 1rem;
  position: relative;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 1rem;
  margin: 1rem 0;
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem;
  width: fit-content;
  border-radius: 25%;
  border: 3px solid ${quiz_black};
  background-color: transparent;
`;

const LevelLabel = styled.p`
  margin: 0.5rem 0 0 0;
  font-size: 0.8rem;
`;

const LevelName = styled.p`
  margin: 0;
  font-weight: 800;
  font-size: 1.5rem;
`;

export { LevelCard, PlayButton, LevelLabel, LevelName, ContentWrapper };
