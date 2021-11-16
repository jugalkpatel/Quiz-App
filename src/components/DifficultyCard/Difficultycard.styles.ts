import styled from "styled-components";
import { RiLock2Fill } from "react-icons/ri";

import { primaryFont, RowContainer, SubText } from "../../styles/common.styles";

const LevelCard = styled.article`
  display: grid;
  grid-template-columns: 0.5fr 1fr;

  position: relative;

  font-family: ${primaryFont};

  margin: 1rem;

  padding: 1rem;

  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.border};

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  @media (min-width: 568px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

const ContentWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 1rem;
`;

const CardImg = styled.img`
  width: 100%;
`;

const PlayButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;

  width: fit-content;

  font-size: 1rem;
  color: ${({ theme }) => theme.tertiary};

  margin: 0.5rem 0;

  padding: 0.5rem;

  border-radius: 40%;
  border: 3px solid ${({ theme }) => theme.tertiary};

  cursor: pointer;

  @media (min-width: 568px) {
    &:hover {
      background-color: ${({ theme }) => theme.tertiary};
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const LockOverlay = styled(RowContainer)`
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: rgba(158, 158, 158, 0.2);

  position: absolute;

  border-radius: 1rem;
`;

const LockIcon = styled(RiLock2Fill)`
  font-size: 2rem;
  color: ${({ theme }) => theme.tertiary};
`;

const LevelLabel = styled(SubText)`
  font-size: 0.8rem;
`;

const LevelName = styled.p`
  font-weight: 800;
  font-size: 1.5rem;

  margin: 0;
`;

export {
  LevelCard,
  PlayButton,
  LevelLabel,
  LevelName,
  ContentWrapper,
  CardImg,
  LockOverlay,
  LockIcon,
};
