import { AbsoluteFill, Sequence, useVideoConfig } from "remotion";
import WordLevelOpacityReveal from "../components/WordLevelOpacityReveal";
import ScrollingTextList from "../components/ScrollingTextList";
import { translations } from "@/constants";

export default function AllThingsWeAddedSequence({
  list,
  langCode,
}: {
  list: string[];
  langCode: string;
}) {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill className="text-7xl text-center items-center justify-start font-black bg-black text-white flex gap-10 !flex-row px-16">
      <div className="flex-1">
        {/* <Sequence from={fps * -0.5}> */}
        <WordLevelOpacityReveal>
          {translations.HERES_ALL_THE_STUFF_ADDED[
            langCode as keyof typeof translations.HERES_ALL_THE_STUFF_ADDED
          ] ?? translations.HERES_ALL_THE_STUFF_ADDED["en"]}
        </WordLevelOpacityReveal>
        {/* </Sequence> */}
      </div>
      <Sequence from={fps * 0.5} className="!relative flex-1">
        <ScrollingTextList list={list} />
      </Sequence>
    </AbsoluteFill>
  );
}
