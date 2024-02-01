import { FormEvent, useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "../UI/Modal.tsx";

import {
  type Session,
  useSessionContext,
} from "../../store/sessions-context.tsx";
import Input from "../UI/Input.tsx";
import Button from "../UI/Button.tsx";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

export default function BookSession({ session, onDone }: BookSessionProps) {
  const { addSession } = useSessionContext();
  const modal = useRef<ModalHandle>(null);

  useEffect(() => {
    if (modal.current) {
      modal.current.open();
    }
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const parsedData = Object.fromEntries(data);
    console.log(parsedData);

    addSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form className="control" onSubmit={handleSubmit}>
        <Input id="name" name="name" label="name" type="text" />
        <Input id="email" name="email" label="email" type="email" />
        <p className="actions">
          <Button type="button" textonly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
