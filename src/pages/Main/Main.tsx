import { MainContainer, PageHeader, CardWrapper } from "./Main.styles";
import { BigText, SubText, ColumnContainer } from "../../styles/common.styles";

import { DifficultyCard } from "../../components";
import { cardDetails } from "../../utils";

function Main() {
  return (
    <>
      <MainContainer>
        <PageHeader>
          <ColumnContainer>
            <BigText>Let's Play</BigText>
            <SubText>Be the first</SubText>
          </ColumnContainer>
        </PageHeader>

        <CardWrapper>
          {cardDetails.map((card) => {
            return <DifficultyCard key={card.name} {...card} />;
          })}
        </CardWrapper>
      </MainContainer>
    </>
  );
}

export { Main };
