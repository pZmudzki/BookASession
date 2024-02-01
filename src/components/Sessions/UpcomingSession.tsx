import { type Session } from "../../store/sessions-context.tsx";
import Button from "../UI/Button";
import { useSessionContext } from "../../store/sessions-context.tsx";

type UpcomingSessionProps = {
  session: Session;
};

export default function UpcomingSession({ session }: UpcomingSessionProps) {
  const { removeSession } = useSessionContext();

  return (
    <li>
      <article className="upcoming-session">
        <div>
          <h3>{session.title}</h3>
          <p>{session.summary}</p>
          <time dateTime={new Date(session.date).toISOString()}>
            {new Date(session.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </time>
        </div>
        <p className="actions">
          <Button onClick={() => removeSession(session.id)} textonly>
            Cancel
          </Button>
        </p>
      </article>
    </li>
  );
}
