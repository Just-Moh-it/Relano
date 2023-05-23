import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../utils/cn";

export default function TextFadeInFromBottom({
  children,
  noExit,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  noExit?: boolean;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const numberEnterSpringBottom = spring({
    frame: frame + 10,
    fps,
    config: { damping: 40, mass: 5 },
    durationInFrames: 20,
  });
  const numberEnterBottom = interpolate(
    numberEnterSpringBottom,
    [0, 1],
    [-10, 50]
  );
  const numberExitSpringBottom = spring({
    frame: frame - 20,
    fps,
    config: { damping: 40, mass: 5 },
    durationInFrames: 20,
  });
  const numberExitBottom = interpolate(
    numberExitSpringBottom,
    [0, 1],
    [50, 80]
  );

  return (
    <div
      {...props}
      className={cn(
        "absolute left-1/2 -translate-x-1/2 translate-y-1/2",
        props.className
      )}
      style={{
        ...props.style,
        bottom: `${
          frame < 20 ? numberEnterBottom : noExit ? 50 : numberExitBottom
        }%`,
      }}
    >
      {children}
    </div>
  );
}
