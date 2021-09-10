import { DifficultyCard } from "../../components";
import {
  ComponentWrapper,
  PageHeader,
  PageTitle,
  SubText,
} from "./main.styles";

function Main() {
  return (
    <>
      <ComponentWrapper>
        <PageHeader>
          <PageTitle>Let's Play</PageTitle>
          <SubText>Be the first!</SubText>
        </PageHeader>
        <DifficultyCard level={1} levelName="Rookie" />
        <DifficultyCard level={2} levelName="Skillful" />
        <DifficultyCard level={3} levelName="Expert" />
      </ComponentWrapper>
    </>
  );
}

export { Main };
