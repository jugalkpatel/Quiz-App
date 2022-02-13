import { useEffect, useReducer, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { HistoryRecord, LevelTypes, User, AuthState } from "../../common";
import { ACTIONS } from "../../helpers";
import {
  logout,
  setupAuthExceptionHandler,
  setupAuthHeader,
} from "../../utils";

export type AUTH_ACTIONS =
  | {
      type: typeof ACTIONS.SET_DATA;
      payload: { user: User };
    }
  | { type: typeof ACTIONS.RESET_STATE }
  | {
      type: typeof ACTIONS.SET_HISTORY;
      payload: { history: HistoryRecord[] | [] };
    }
  | { type: typeof ACTIONS.SET_LEVEL; payload: { level: LevelTypes } };

function reducer(state: AuthState, action: AUTH_ACTIONS): AuthState {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      const { id, level, name, token, history } = action.payload.user;
      return { ...state, authenticated: true, id, level, history, name, token };
    case ACTIONS.RESET_STATE:
      return {
        ...state,
        authenticated: false,
        id: null,
        level: null,
        name: null,
        token: null,
        history: [],
      };
    case ACTIONS.SET_HISTORY:
      return { ...state, history: action.payload.history };
    case ACTIONS.SET_LEVEL:
      return { ...state, level: action.payload.level };
    default:
      throw new Error("auth action not available");
  }
}

const initialState: AuthState = {
  authenticated: false,
  id: null,
  level: null,
  name: null,
  token: null,
  history: [],
};

function setInitialState(): AuthState {
  const data = localStorage?.getItem("liquiz") || null;

  if (!data) {
    return initialState;
  }

  const { id, history, level, name, token }: User = JSON.parse(data);

  if (id && name && level && token && history) {
    return {
      authenticated: true,
      id,
      name,
      level,
      token,
      history,
    };
  }

  return initialState;
}

function useAuthData() {
  const [state, dispatch] = useReducer(reducer, initialState, setInitialState);
  const navigate = useNavigate();
  const stableNavigate = useRef(navigate);

  useEffect(() => {
    console.log("auth useEffect fired");
    if (!state.authenticated || !state.token) {
      return;
    }
    const logoutUser = logout(dispatch, stableNavigate.current);
    setupAuthHeader(state.token);
    setupAuthExceptionHandler(logoutUser);
  }, [state.authenticated, state.token]);

  return [state, dispatch] as const;
}

export { useAuthData };
