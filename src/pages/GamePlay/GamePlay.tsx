import { useEffect } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router";
import { Toaster } from "react-hot-toast";

import {
  FinishButton,
  GamePlayContent,
  GamePlayWrapper,
  MaxWidthWrapper,
} from "./GamePlay.styles";
import {
  QuitButton,
  QuitIcon,
} from "../../components/GamePlayHeader/GamePlayHeader.styles";
import { secondaryFont } from "../../styles/common.styles";

import { LevelTypes, QuestionType, GamePlayTypes } from "../../common";
import {
  GamePlayHeader,
  Question,
  QuestionNav,
  Spinner,
} from "../../components";
import { useGamePlay } from "../../hooks";
import { ACTIONS } from "../../helpers";

export type GamePlayProps = {
  level: LevelTypes;
  questions: QuestionType[];
};

function useSprint() {
  return useOutletContext<GamePlayTypes>();
}

function GamePlay({ level, questions }: GamePlayProps) {
  const { state, dispatch } = useGamePlay(questions, level);
  const navigate = useNavigate();

  const isGameFinished =
    state.attended && Object.keys(state.attended).length === 10 ? true : false;

  useEffect(() => {
    if (isGameFinished && level === "Skillful") {
      dispatch({ type: ACTIONS.SUBMIT_ATTEMPT });
    }
  }, [isGameFinished, dispatch, level]);

  useEffect(() => {
    if (state.negativePoints > 0 && level === "Expert") {
      dispatch({ type: ACTIONS.SUBMIT_ATTEMPT });
    }
  }, [state.negativePoints, level, dispatch]);

  const handleClick = () => {
    if (state.status === "PLAYING") {
      dispatch({ type: ACTIONS.SUBMIT_ATTEMPT });
    }

    if (state.status === "FINISHED") {
      navigate(`/play/${level}/quiz/finish`, {
        state: { questions },
      });
    }
  };

  return (
    <>
      <MaxWidthWrapper>
        <GamePlayWrapper>
          <GamePlayContent>
            <GamePlayHeader
              status={state.status}
              level={level}
              questionNumber={state.questionNumber}
              dispatch={dispatch}
            >
              <QuitButton
                disabled={state.status === "SUBMITTING" ? true : false}
                onClick={() => {
                  navigate(`/play/${level}/quiz/exit`, {
                    state: { questions },
                  });
                }}
              >
                <QuitIcon />
              </QuitButton>
            </GamePlayHeader>

            <Question
              level={level}
              gameState={state}
              questions={questions}
              dispatch={dispatch}
            />

            <QuestionNav
              level={level}
              status={state.status}
              questionNumber={state.questionNumber}
              questions={questions}
              dispatch={dispatch}
            />

            <FinishButton
              disabled={state.status === "SUBMITTING" ? true : false}
              onClick={handleClick}
            >
              {state.status === "PLAYING" && "finish attempt"}
              {state.status === "SUBMITTING" && (
                <Spinner isLoading={true} size="5px" />
              )}
              {state.status === "FINISHED" && "exit"}
            </FinishButton>
          </GamePlayContent>
        </GamePlayWrapper>
      </MaxWidthWrapper>

      <Outlet context={state} />

      <Toaster toastOptions={{ style: { fontFamily: secondaryFont } }} />
    </>
  );
}

export { GamePlay, useSprint };
