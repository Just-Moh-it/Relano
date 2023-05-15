import { ReactNode } from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

const SlidingDoors = ({ children }: { children?: ReactNode }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const progressSpring = spring({
    fps,
    frame,
    config: { damping: 100 },
    durationInFrames: 20,
  });
  const progress = interpolate(progressSpring, [0, 1], [0, 1], {
    easing: Easing.linear,
  });

  return (
    <AbsoluteFill
      style={{
        // Mask a circle
        maskImage: `linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%)`,
        WebkitMaskImage: `linear-gradient(68deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) ${interpolate(
          progress,
          [0, 1],
          [50, 0]
        )}%, #000000 ${interpolate(
          progress,
          [0, 1],
          [50, 0]
        )}%, #000000 ${interpolate(
          progress,
          [0, 1],
          [50, 100]
        )}%, rgba(0, 0, 0, 0) ${interpolate(
          progress,
          [0, 1],
          [50, 100]
        )}%, rgba(0, 0, 0, 0) 100%)`,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};
export default SlidingDoors;
