import { useQuiz } from "../../contexts";

function LeaderBoard() {
  const { id, questions, leaderBoard, setQuiz } = useQuiz();
  console.log({ id, questions, leaderBoard, setQuiz });
  return <h1>You're on leaderboard</h1>;
}

export { LeaderBoard };
