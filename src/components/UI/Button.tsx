import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

type ButtonBaseProps = {
  children: ReactNode;
  textonly?: boolean;
};
type LinkElement = ButtonBaseProps & {
  to?: string;
} & LinkProps;

type ButtonElement = ButtonBaseProps & {
  to?: never;
} & ComponentPropsWithoutRef<"button">;

function isRouterLink(
  props: LinkElement | ButtonElement
): props is LinkElement {
  return "to" in props;
}

export default function Button(props: LinkElement | ButtonElement) {
  if (isRouterLink(props)) {
    return (
      <Link
        {...props}
        to={props.to}
        className={`button ${props.textonly ? "button--text-only" : ""}`}
      >
        {props.children}
      </Link>
    );
  }
  return (
    <button
      {...props}
      className={`button ${props.textonly ? "button--text-only" : ""}`}
    >
      {props.children}
    </button>
  );
}
