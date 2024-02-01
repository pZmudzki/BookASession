import SessionListCard from "./SessionListCard";
import { type Session } from "../../store/sessions-context.ts";

type SessionsListProps = {
  sessions: Session[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <SessionListCard key={session.id} session={session} />
      ))}
    </ul>
  );
}
