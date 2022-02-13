import {
  ProfileContainer,
  ProfileContent,
  ProfileImage,
  ProfileName,
  ProfileLevel,
  PlayedContainer,
  PlayLabel,
} from "./Profile.styles";

import { useAuth } from "../../contexts";

function Profile() {
  const { history, level, name } = useAuth();
  return (
    <ProfileContainer>
      <ProfileContent>
        <ProfileImage />
        <ProfileName>{name && name}</ProfileName>
        <ProfileLevel>{level && level}</ProfileLevel>
        <PlayedContainer>
          <PlayLabel>quizzes played</PlayLabel>
          <PlayLabel>{history.length ? history.length : 0}</PlayLabel>
        </PlayedContainer>
      </ProfileContent>
    </ProfileContainer>
  );
}

export { Profile };
