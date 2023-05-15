import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";
import {
  AbsoluteFill,
  Audio,
  Series,
  Video,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import * as z from "zod";
import First from "./First";
import * as interFont from "@remotion/google-fonts/Inter";
import SlidingDoors from "../utils/SlidingDoors";
import AppearFromBottom from "./AppearFromBottom";
import GridPattern from "./GridPattern";
import BubbleFromBottom from "./First";

export const baseCompSchema = z.object({});

const inter = interFont.loadFont("normal", {
  weights: ["400", "500", "600", "700", "800", "900"],
});

const BaseComp = ({
  ...props
}: z.infer<typeof baseCompSchema> & HTMLAttributes<HTMLDivElement>) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const slidingDoorsProgressFirst = spring({
    frame,
    fps,
    config: { damping: 100 },
  });
  const slidingDoorsProgressSecond = spring({
    frame: frame + fps * 3,
    fps,
    config: { damping: 100 },
  });

  // return (
  //   <AbsoluteFill
  //     {...props}
  //     className={cn(
  //       "items-center justify-center bg-black text-white",
  //       props.className
  //     )}
  //     style={{ fontFamily: inter.fontFamily }}
  //   >
  //     <SlidingDoors
  //       enteringElement={
  //         <First>
  //           <h1 className="text-9xl font-black">{"Vercel/NextJS"}</h1>
  //         </First>
  //       }
  //       exitingElement={<AbsoluteFill className="bg-black"></AbsoluteFill>}
  //       progress={slidingDoorsProgressFirst}
  //       angle={-30}
  //       direction="open"
  //     />
  //   </AbsoluteFill>
  // );

  return (
    <>
      <Audio
        src="https://audiocdn.epidemicsound.com/ES_ITUNES/Zy0ALC_Ganja/ES_Ganja.mp3"
        startFrom={20 * fps}
      />
      <Series>
        {/* <Series.Sequence durationInFrames={fps * 0.5}>
          <AbsoluteFill className="bg-black" />
        </Series.Sequence> */}
        <Series.Sequence durationInFrames={fps * 1} className="text-white">
          <AbsoluteFill className="bg-black" />
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 1.5}
          offset={-fps * 1}
          className="text-white"
        >
          <SlidingDoors>
            <First className="bg-black">
              <h1 className="text-9xl font-black">{"Vercel/NextJS"}</h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 1.5}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <First className="bg-blue-500">
              <h1 className="text-9xl font-black">{"v19.2.3"}</h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 3}
          offset={-20}
          className="text-black"
        >
          <SlidingDoors>
            <First className="bg-white text-center">
              <div className="flex items-center justify-center gap-10 flex-col">
                <h1 className="text-9xl font-black">{"Vercel/NextJS"}</h1>
                <h1 className="text-5xl font-bold">{"v19.2.3"}</h1>
              </div>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 3}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <First className="bg-black text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={464}
                height={516}
                fill="none"
                className="absolute z-20"
                style={{ rotate: `${frame * 4}deg`, right: 0, bottom: 0 }}
              >
                <path
                  fill="currentColor"
                  opacity={0.1}
                  d="M232 0c32.033 0 58 25.968 58 58v99.541l86.205-49.771c27.741-16.016 63.213-6.511 79.229 21.23 16.017 27.741 6.512 63.213-21.229 79.229L348 258l86.205 49.77c27.741 16.017 37.246 51.489 21.229 79.23-16.016 27.741-51.488 37.246-79.229 21.229L290 358.459V458c0 32.033-25.967 58-58 58s-58-25.967-58-58v-99.541l-86.205 49.77C60.054 424.246 24.582 414.741 8.565 387c-16.016-27.741-6.511-63.213 21.23-79.23L116 258l-86.205-49.771C2.054 192.213-7.451 156.741 8.565 129c16.017-27.741 51.489-37.246 79.23-21.23L174 157.541V58c0-32.032 25.967-58 58-58Z"
                />
              </svg>
              <svg
                width={524}
                height={523}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-20 scale-50"
                style={{ rotate: `${-frame * 3}deg`, left: -100, top: -100 }}
              >
                <path
                  opacity={0.1}
                  d="M327 65c0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65v131.5H65.5c-35.898 0-65 29.101-65 65 0 35.898 29.102 65 65 65H197V458c0 35.898 29.102 65 65 65 35.899 0 65-29.102 65-65V326.5h131.5c35.898 0 65-29.102 65-65 0-35.899-29.102-65-65-65H327V65Z"
                  fill="currentColor"
                />
              </svg>
              <h1 className="text-9xl font-black">{"Here's what's new!"}</h1>
            </First>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-sky-500 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">1</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      Fixed problems with dynamic routing!
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Made the app a lot more faster by reducing dynamic routes
                      from the equation!
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-teal-600 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">2</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      Another thing about some stuff!
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Some stuff that has been hapenning lately is infuriating
                      me! I don't wanna ask you why
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-indigo-500 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">3</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      Another thing about some stuff!
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Some stuff that has been hapenning lately is infuriating
                      me! I don't wanna ask you why
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-blue-500 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">4</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      Another thing about some stuff!
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Some stuff that has been hapenning lately is infuriating
                      me! I don't wanna ask you why
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-purple-600 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">5</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      Another thing about some stuff!
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Some stuff that has been hapenning lately is infuriating
                      me! I don't wanna ask you why
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence
          durationInFrames={fps * 4}
          offset={-20}
          className="text-white"
        >
          <SlidingDoors>
            <GridPattern className="bg-fuchsia-600 text-center">
              <Series>
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <div className="flex items-center justify-center rounded-full bg-white text-black aspect-square h-[250px] w-[250px]">
                      <h1 className="text-9xl font-black leading-[100%]">6</h1>
                    </div>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  >
                    <h1 className="text-8xl font-black">
                      And here's the last thing (we swear!)
                    </h1>
                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Some stuff that has been hapenning lately is infuriating
                      me! I don't wanna ask you why
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
              </Series>
            </GridPattern>
          </SlidingDoors>
        </Series.Sequence>

        <Series.Sequence durationInFrames={fps * 5} offset={-20}>
          {/* <BubbleFromBottom className="bg-black text-center text-white">
            <GridPattern>
              <Series> */}
                <Series.Sequence durationInFrames={fps * 4}>
                  <AppearFromBottom>
                    <h1 className="text-8xl font-black">
                      We thank these awesome contributors!
                    </h1>

                    <p className="text-4xl font-medium opacity-60 leading-normal w-3/4">
                      Let's be honest. They did the hard work!
                    </p>
                  </AppearFromBottom>
                </Series.Sequence>
                <Series.Sequence durationInFrames={fps * 3} offset={-fps * 3}>
                  <AppearFromBottom
                    noExit
                    className="gap-10 flex flex-col items-center -mb-20"
                  ></AppearFromBottom>
                </Series.Sequence>
              {/* </Series>
            </GridPattern>
          </BubbleFromBottom> */}
        </Series.Sequence>
      </Series>
    </>
  );
};

export default BaseComp;
