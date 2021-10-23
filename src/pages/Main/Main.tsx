import { ComponentWrapper, PageHeader, CardWrapper } from "./main.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { DifficultyCard } from "../../components";
import { dashboardData } from "../../utils";
import { DashBoardTypes } from "../../utils/dashboardData";

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
          {dashboardData.map(({ name, level, image }: DashBoardTypes) => (
            <DifficultyCard
              key={name}
              level={level}
              name={name}
              image={image}
            />
          ))}
        </CardWrapper>
      </ComponentWrapper>
    </>
  );
}

export { Main };
