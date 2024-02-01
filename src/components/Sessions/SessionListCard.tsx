import Button from "../UI/Button.tsx";

type SessionListCardProps = {
  session: { id: string; image: string; title: string; summary: string };
};

export default function SessionListCard({ session }: SessionListCardProps) {
  return (
    <li className="session-item">
      <img src={session.image} />
      <div className="session-data">
        <h3>{session.title}</h3>
        <p>{session.summary}</p>
        <p className="actions">
          <Button to={`/sessions/${session.id}`}>Learn More</Button>
        </p>
      </div>
    </li>
  );
}
