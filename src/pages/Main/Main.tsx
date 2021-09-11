import { DifficultyCard } from "../../components";
import {
  ComponentWrapper,
  PageHeader,
  PageTitle,
  SubText,
  CardWrapper,
} from "./main.styles";

import beginner from "../../assets/beginner.svg";
import intermediate from "../../assets/intermediate.svg";
import expert from "../../assets/expert.svg";

function Main() {
  return (
    <>
      <ComponentWrapper>
        <PageHeader>
          <PageTitle>Let's Play</PageTitle>
          <SubText>Be the first!</SubText>
        </PageHeader>

        <CardWrapper>
          <DifficultyCard level="1" levelName="Rookie" image={beginner} />
          <DifficultyCard level="2" levelName="Skillful" image={intermediate} />
          <DifficultyCard level="3" levelName="Expert" image={expert} />
        </CardWrapper>
      </ComponentWrapper>
    </>
  );
}

export { Main };
