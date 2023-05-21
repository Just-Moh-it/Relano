import { ReactNode } from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  AbsoluteFill,
} from "remotion";

export default function FadeOutExit({ children }: { children?: ReactNode }) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const exitOpacity = interpolate(
    spring({
      fps,
      frame,
      config: {
        damping: 100,
      },
      durationInFrames: fps * 1,
      delay: durationInFrames - fps * 1,
    }),
    [0, 1],
    [1, 0]
  );

  return (
    <AbsoluteFill style={{ opacity: exitOpacity }}>{children}</AbsoluteFill>
  );
}
