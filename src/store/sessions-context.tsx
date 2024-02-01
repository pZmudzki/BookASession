import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type SessionState = {
  upcomingSessions: Session[];
};

type SessionContextValue = SessionState & {
  addSession: (session: Session) => void;
  removeSession: (sessionId: string) => void;
};

export const SessionsContext = createContext<SessionContextValue | null>(null);

export function useSessionContext() {
  const context = useContext(SessionsContext);
  if (!context) {
    throw new Error("There isn't any context provider");
  }
  return context;
}

type AddSession = {
  type: "ADD_SESSION";
  session: Session;
};

type RemoveSession = {
  type: "REMOVE_SESSION";
  sessionId: string;
};

type SessionActions = AddSession | RemoveSession;

function sessionsReducer(state: SessionState, action: SessionActions) {
  if (action.type === "ADD_SESSION") {
    if (
      state.upcomingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      upcomingSessions: state.upcomingSessions.concat(action.session),
    };
  }
  if ((action.type = "REMOVE_SESSION")) {
    return {
      upcomingSessions: state.upcomingSessions.filter(
        (session) => session.id !== action.sessionId
      ),
    };
  }

  return state;
}

export default function SessionsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [sessionState, dispatch] = useReducer(sessionsReducer, {
    upcomingSessions: [],
  });

  function addSession(session: Session) {
    dispatch({ type: "ADD_SESSION", session });
  }
  function removeSession(sessionId: string) {
    dispatch({ type: "REMOVE_SESSION", sessionId });
  }

  const ctxValue = {
    upcomingSessions: sessionState.upcomingSessions,
    addSession,
    removeSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );
}
