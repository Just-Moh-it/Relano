import {
  Easing,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export default function WordLevelOpacityReveal({
  children,
}: {
  children: string;
}) {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <>
      <div className="flex gap-6 relative">
        {children.split(" ").map((word, i) => {
          return (
            <div
              key={i}
              style={{
                opacity: interpolate(
                  spring({
                    frame,
                    fps,
                    // durationInFrames: 10,
                    delay: 20 + i * 4,
                  }),
                  [0, 1],
                  [0, 1],
                  { easing: Easing.bezier(0.5, 0, 0.5, 1) }
                ),
              }}
            >
              {word}
            </div>
          );
        })}
      </div>
    </>
  );
}
