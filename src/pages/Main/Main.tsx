import { ComponentWrapper, PageHeader, CardWrapper } from "./Main.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { DifficultyCard } from "../../components";
import { dashboardData } from "../../utils";
import { LevelTypes, LevelInfoTypes } from "../../common";

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
          {Object.keys(dashboardData).map((level) => {
            const { image, levelNumber } = dashboardData[
              level as LevelTypes
            ] as LevelInfoTypes;
            return (
              <DifficultyCard
                key={level}
                levelNumber={levelNumber}
                image={image}
                level={level as LevelTypes}
              />
            );
          })}
        </CardWrapper>
      </ComponentWrapper>
    </>
  );
}

export { Main };
