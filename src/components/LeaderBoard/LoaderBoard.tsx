import { useQuiz } from "../../contexts";

function LeaderBoard() {
  const { id, questions, leaderBoard } = useQuiz();
  console.log({ id, questions, leaderBoard });
  return <h1>You're on leaderboard</h1>;
}

export { LeaderBoard };
