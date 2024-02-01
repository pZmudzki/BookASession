import { useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "../UI/Modal.tsx";

import { useSessionContext } from "../../store/sessions-context.tsx";
import Button from "../UI/Button.tsx";

import UpcomingSession from "./UpcomingSession.tsx";

export default function UpcomingSessions({ onDone }: { onDone: () => void }) {
  const modal = useRef<ModalHandle>(null);
  const { upcomingSessions } = useSessionContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Upcomming Sessions</h2>
      {upcomingSessions.length === 0 ? (
        <p>No upcomming sessions.</p>
      ) : (
        <ul>
          {upcomingSessions.map((session) => {
            return <UpcomingSession session={session} />;
          })}
        </ul>
      )}
      <p className="actions">
        <Button type="button" onClick={onDone}>
          Close
        </Button>
      </p>
    </Modal>
  );
}
