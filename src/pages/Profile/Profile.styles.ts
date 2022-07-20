import styled from "styled-components";
import { ColumnContainer, RowContainer } from "../../styles/common.styles";
import { FaRegUserCircle } from "react-icons/fa";

const ProfileContainer = styled(ColumnContainer)`
  color: ${({ theme }) => theme.tertiary};
  align-items: center;
  justify-content: center;
`;

const ProfileContent = styled(ColumnContainer)`
  margin: auto;
  align-items: center;
  width: 100%;
  @media (min-width: 768px) {
    width: 70%;
  }
`;

const ProfileImage = styled(FaRegUserCircle)`
  font-size: 5rem;
`;

const ProfileName = styled.p`
  font-size: 2.5rem;
`;

const ProfileLevel = styled.p`
  font-size: 1.5rem;
`;

const PlayedContainer = styled(RowContainer)`
  background-color: ${({ theme }) => theme.secondary};
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  margin: 1rem;
  font-size: 1.3rem;

  @media (min-width: 568px) {
    font-size: 1rem;
  }
`;

const PlayLabel = styled.p`
  background-color: ${({ theme }) => theme.secondary};
`;

export {
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileLevel,
  PlayLabel,
  PlayedContainer,
  ProfileContent,
};
