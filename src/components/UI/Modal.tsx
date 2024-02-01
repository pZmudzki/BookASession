import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export default forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return { open: () => dialog.current?.showModal() };
  });

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});
