import { ComponentWrapper, PageHeader, CardWrapper } from "./Main.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { DifficultyCard } from "../../components";
import { dashboardData } from "../../utils";
import { DashBoardTypes, LevelInfoTypes } from "../../common";

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
          {Object.keys(dashboardData).map((difficulty) => {
            const { image, level } = dashboardData[
              difficulty as keyof DashBoardTypes
            ] as LevelInfoTypes;
            return (
              <DifficultyCard
                key={difficulty}
                image={image}
                level={level}
                name={difficulty}
              />
            );
          })}
        </CardWrapper>
      </ComponentWrapper>
    </>
  );
}

export { Main };
