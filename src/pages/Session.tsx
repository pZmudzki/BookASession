import { useParams } from "react-router-dom";
import Button from "../components/UI/Button.tsx";
import BookSession from "../components/Sessions/BookSession.tsx";
import { SESSIONS } from "../dummy-sessions.ts";
import { useState } from "react";

export default function SessionPage() {
  const [isBooking, setIsBooking] = useState<boolean>(false);

  const params = useParams<{ id: string }>();

  const sessionId = params.id;
  const loadedSession = SESSIONS.find((session) => session.id === sessionId);

  if (!loadedSession) {
    return (
      <main id="session-page">
        <p>No session found!</p>
      </main>
    );
  }

  function handleStartBooking() {
    setIsBooking(true);
  }

  function handleStopBooking() {
    setIsBooking(false);
  }

  return (
    <main id="session-page">
      {isBooking ? (
        <BookSession session={loadedSession} onDone={handleStopBooking} />
      ) : null}
      <article>
        <header>
          <img src={loadedSession.image} alt={loadedSession.title} />
          <div>
            <h2>{loadedSession.title}</h2>
            <time dateTime={new Date(loadedSession.date).toISOString()}>
              {new Date(loadedSession.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
            <p>
              <Button onClick={handleStartBooking}>Book Session</Button>
            </p>
          </div>
        </header>
        <p id="content">{loadedSession.description}</p>
      </article>
    </main>
  );
}
