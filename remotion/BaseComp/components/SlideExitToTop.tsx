import { ReactNode } from "react";
import {
  AbsoluteFill,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export default function SlideExitToTop({ children }: { children?: ReactNode }) {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  console.log(durationInFrames);

  const exitSpring = spring({
    frame,
    fps,
    delay: durationInFrames - fps * 1,
    durationInFrames: fps * 1,
    // config: {
    //   mass: 10,
    //   damping: 50,
    // },
  });

  return (
    <AbsoluteFill
      style={{
        transform: `translateY(${exitSpring * -100}%)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
}
