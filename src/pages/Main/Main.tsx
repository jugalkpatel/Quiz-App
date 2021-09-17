import beginner from "../../assets/beginner.svg";
import intermediate from "../../assets/intermediate.svg";
import expert from "../../assets/expert.svg";
import profile from "../../assets/profile.svg";

import {
  ComponentWrapper,
  PageHeader,
  PageTitle,
  SubText,
  CardWrapper,
} from "./main.styles";

import { DifficultyCard } from "../../components";

function Main() {
  return (
    <>
      <ComponentWrapper>
        <PageHeader>
          <PageTitle>Let's Play</PageTitle>
          <SubText>Be the first!</SubText>
        </PageHeader>

        <CardWrapper>
          <DifficultyCard level="1" name="Rookie" image={beginner} />
          <DifficultyCard level="2" name="Skillful" image={intermediate} />
          <DifficultyCard level="3" name="Expert" image={expert} />
          <DifficultyCard name="Profile" image={profile} />
        </CardWrapper>
      </ComponentWrapper>
    </>
  );
}

export { Main };
