import { useReducer, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import { QuizType, LeaderBoard, LevelTypes } from "../../common";
import { getQuizData } from "../../services";
import { ACTIONS, STATUS } from "../../helpers";

export type QuizDataState = {
  status: keyof typeof STATUS;
  error: null | string;
  data: null | QuizType | LeaderBoard;
};

export type ACTIONTYPE =
  | { type: typeof ACTIONS.SET_LOADING }
  | {
      type: typeof ACTIONS.SET_DATA;
      payload: { data: QuizType | LeaderBoard };
    }
  | { type: typeof ACTIONS.SET_ERROR; payload: { msg: string } }
  | { type: typeof ACTIONS.RESET_STATE };

const initialState: QuizDataState = {
  status: STATUS.IDLE,
  error: null,
  data: null,
};

function reducer(state: QuizDataState, action: ACTIONTYPE) {
  switch (action.type) {
    case ACTIONS.SET_LOADING:
      return { ...state, status: STATUS.LOADING };
    case ACTIONS.SET_DATA:
      return { ...state, status: STATUS.RESOLVED, data: action.payload.data };
    case ACTIONS.SET_ERROR:
      return { ...state, status: STATUS.REJECTED, error: action.payload.msg };
    case ACTIONS.RESET_STATE:
      return { ...state, status: STATUS.IDLE, error: null, data: null };
    default:
      return state;
  }
}

function useQuizData(url: string, level: LevelTypes) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const tokenSource = axios.CancelToken.source();

    dispatch({ type: ACTIONS.SET_LOADING });

    const fetchData = async () => {
      try {
        const response = await getQuizData(level, url, tokenSource);

        if ("message" in response) {
          dispatch({
            type: ACTIONS.SET_ERROR,
            payload: { msg: response.message },
          });
          return;
        }

        if ("questions" in response) {
          const { id, level, questions } = response;
          dispatch({
            type: ACTIONS.SET_DATA,
            payload: {
              data: {
                id,
                level,
                questions,
              },
            },
          });
          return;
        }

        if ("leaderBoard" in response) {
          const { leaderBoard } = response;
          dispatch({
            type: ACTIONS.SET_DATA,
            payload: { data: { leaderBoard: leaderBoard } },
          });
          return;
        }

        throw new Error("empty response!");
      } catch (error) {
        const err = error as Error;
        const msg = err.message;
        toast.error(msg);
        dispatch({ type: ACTIONS.SET_ERROR, payload: { msg } });
      }
    };

    fetchData();

    return () => {
      dispatch({ type: ACTIONS.RESET_STATE });
      tokenSource.cancel();
    };
  }, [level, url]);

  console.log({ state });

  return [state, dispatch] as const;
}

export { useQuizData };
