import { ReactNode } from "react";
import { useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

export default function TextAppearWithHeight({
  children,
}: {
  children?: ReactNode;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      className="relative flex items-start"
      style={{ height: interpolate(spring({ fps, frame }), [0, 1], [0, 100]) }}
    >
      <div className="">{children}</div>
    </div>
  );
}
