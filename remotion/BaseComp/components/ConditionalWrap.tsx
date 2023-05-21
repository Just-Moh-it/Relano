import { ReactNode } from "react";

export default function ConditionalWrap({
  condition,
  wrap,
  children,
}: {
  condition: boolean;
  wrap: (children: ReactNode) => JSX.Element;
  children: JSX.Element;
}) {
  return condition ? wrap(children) : children;
}
