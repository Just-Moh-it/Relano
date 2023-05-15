import { AbsoluteFill, Composition, Video, staticFile } from "remotion";
import BaseComp, { baseCompSchema } from "./BaseComp";

export default function Comp() {
  return (
    <>
      <Composition
        component={BaseComp}
        durationInFrames={30 * 40}
        schema={baseCompSchema}
        fps={30}
        width={2160}
        height={1080}
        id="base-comp"
        defaultProps={{}}
      />
      <Composition
        component={() => <Video src={staticFile("/insp.mp4")} />}
        durationInFrames={570}
        schema={baseCompSchema}
        fps={30}
        width={2160}
        height={1080}
        id="insp"
        defaultProps={{}}
      />
      <Composition
        component={() => (
          <>
            <Video
              src={staticFile("/insp.mp4")}
              className="z-0 w-full h-full absolute inset-0"
            />
            <AbsoluteFill className="opacity-50">
              <BaseComp className="relative z-10 opacity-50" />
            </AbsoluteFill>
          </>
        )}
        durationInFrames={200}
        schema={baseCompSchema}
        fps={30}
        width={2160}
        height={1080}
        id="overlayed"
        defaultProps={{}}
      />
    </>
  );
}
