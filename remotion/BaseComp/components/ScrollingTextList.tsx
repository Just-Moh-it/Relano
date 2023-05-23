import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

export default function ScrollingTextList({ list }: { list: string[] }) {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const translateY = interpolate(
    spring({
      frame,
      fps,
      durationInFrames: durationInFrames - 8,
      delay: fps * 0.5 + 3,
      config: {
        mass: 10,
        damping: 100,
      },
    }),
    [0, 1],
    [0, -85],
    {
      easing: Easing.bezier(0.5, 0.01, 0, 1),
    }
  );

  return (
    <div
      className="relative items-start w-full h-fit"
      style={{
        transform: `translateY(${translateY}%)`,
        marginTop: 300,
        opacity: spring({
          delay: fps * 1,
          fps,
          frame,
          config: { damping: 50 },
        }),
      }}
    >
      {list.map((listItem, i) => (
        <div
          key={i}
          className="text-left w-full text-3xl font-medium text-gray-300 mt-10"
        >
          {listItem}
        </div>
      ))}
    </div>
  );
}
