import beginner from "../../assets/beginner.svg";
import intermediate from "../../assets/intermediate.svg";
import expert from "../../assets/expert.svg";
import profile from "../../assets/profile.svg";

import { ComponentWrapper, PageHeader, CardWrapper } from "./main.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { DifficultyCard } from "../../components";

function Main() {
  return (
    <>
      <ComponentWrapper>
        <PageHeader>
          <ColumnContainer>
            <BigText>Let's Play</BigText>
            <SubText>Be the first</SubText>
          </ColumnContainer>
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
