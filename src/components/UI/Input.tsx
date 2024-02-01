import { ComponentPropsWithRef, PropsWithChildren } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithRef<"input">;

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <div>
      <label>{label}</label>
      <input id={id} {...props} />
    </div>
  );
}
