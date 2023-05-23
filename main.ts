// import { getInput, debug } from "@actions/core";
import { bundle } from "@remotion/bundler";
import { getCompositions, renderMedia } from "@remotion/renderer";
import path from "path";
import { webpackOverride } from "./remotion-webpack-override";
import { Configuration, OpenAIApi } from "openai";
import { getInput } from "@actions/core";

const run = async () => {
  const compositionId = "basecomp";
  const entry = "./remotion/index.ts";

  // const openaiConfig = new Configuration({
  //   apiKey: getInput("openai-api-key"), // TODO: Remove me!!!
  // });
  // const openai = new OpenAIApi(openaiConfig);

  const releaseNotes =
    getInput("releaseNotes") ||
    "What's Changed\n--------------\n\n-   Easier Tailwind installation with `@remotion/tailwind`! by [@rjackson](https://github.com/rjackson) in [#2310](https://github.com/remotion-dev/remotion/pull/2310)\n-   Fix Skia on PNPM and eliminate peer dependency warning by [@JonnyBurger](https://github.com/JonnyBurger) in [#2303](https://github.com/remotion-dev/remotion/pull/2303)\n-   Fix extraneous brackets in `preloadAsset()` by [@thecmdrunner](https://github.com/thecmdrunner) in [#2297](https://github.com/remotion-dev/remotion/pull/2297)\n\nDocs\n----\n\n-   Update legacy link by [@thecmdrunner](https://github.com/thecmdrunner) in [#2301](https://github.com/remotion-dev/remotion/pull/2301)\n\nInternals\n---------\n\n-   Generate Fig autocomplete from Remotion code by [@JonnyBurger](https://github.com/JonnyBurger) in [#2292](https://github.com/remotion-dev/remotion/pull/2292)\n\nFull Changelog: [`v3.3.94...v3.3.95`](https://github.com/remotion-dev/remotion/compare/v3.3.94...v3.3.95)";
  const repositorySlug = getInput("repositorySlug") || "remotion-dev/remotion";
  const releaseTag = getInput("releaseTag") || "v3.3.95";

  // const completion = await openai.createChatCompletion({
  //   stop: "```",
  //   model: "gpt-3.5-turbo",
  //   frequency_penalty: 0,
  //   temperature: 1,
  //   top_p: 1,
  //   max_tokens: 1800,
  //   messages: [
  //     {
  //       role: "system",
  //       content:
  //         "You are a github release notes video creator ai, which has been prompted to convert the following release-notes to digestable information in the form of a video. You don't actually do the video creation part, but just create input props in the form of yaml for the video to be created from. \n\nWhen passed in release notes:\n- Create at most 5 top changes, each with the following properties:\n    - Title: A title describing the change (e.g. 'New Design Theme'). Use at most 7 words\n    - Description: A short description about the change (e.g. 'Updated the button styles, touched up some colors, and made the ui look a lot nicer'). Please try keeping it shorter than 25 words.\n- A long list of all the changes\n\nRemember:\n- !!!Only output nothing except valid yaml. No backticks, no syntax breaking.\n- Only include text in the yaml strings. No markdown or links. The video should be self-sufficient and shouldn't ask the user to refer anywhere else.\n- End your response with ``` (triple backticks)\n\nThe yaml should follow the following zod schema when converted to json:\n\n```ts\nconst videoPropsSchema = z.object({\n    topChanges: z.array(z.object({title: string, description: string})).minLength(1),\n    allChanges: z.array(string()).minLength(1).maxLength(25)\n})\n```\n",
  //     },
  //     {
  //       role: "user",
  //       content: `These are the release notes for the latest release for 'https://github.com/Vercel/nextjs':\n\n\`\`\`md\n${releaseNotes}\n\`\`\`\n\nBased on the instructions and the release notes passed in, the videoProps yaml is:\n\n\`\`\`yaml`,
  //     },
  //   ],
  // });

  console.log("Starting script...");

  // console.log("Creating a Webpack bundle of the video");
  // const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
  //   // If you have a Webpack override, make sure to add it here
  //   webpackOverride,
  // });
  const bundleLocation = "https://lucky-melomakarona-6c5b57.netlify.app";

  // // Replace backtick with single quote
  // const content = (completion.data.choices[0].message?.content ?? "").replace(
  //   /`/g,
  //   "'"
  // );
  const content = `topChanges:
  - title: Easier Tailwind installation
    description: By @rjackson
  - title: Fixed Skia on PNPM
    description: By @JonnyBurger
  - title: Fixed extraneous brackets in preloadAsset()
    description: By @thecmdrunner
  - title: Updated legacy link
    description: By @thecmdrunner
  - title: Generated Fig autocomplete from Remotion code
    description: By @JonnyBurger
allChanges:
  - Easier Tailwind installation with \`@remotion/tailwind\`! by @rjackson
  - Fix Skia on PNPM and elimi...
  - Fix extraneous brackets in \`preloadAsset()\` by @thecmdrunner
  - Update legacy link by @thecmdrunner
  - Generate Fig autocomplete from Remotion code by @JonnyBurger`;

  // Parametrize the video by passing arbitrary props to your component.
  const inputProps = {
    repositorySlug,
    releaseTag,
    openaiGeneration: content,
    // 'topChanges:\n- title: Optimize trace span relationships\n  description: Reduced overhead for trace span relationships\n- title: Deprecate custom_ecmascript_transforms\n  description: Removed support for custom ECMAScript transforms\n- title: Updated Image preload behavior\n  description: Fixed behavior related to setting image preload and referrer policy\n- title: Introduce NextMode\n  description: Added new mode to configure Next.js settings\n- title: Port sorted-routes.ts to Rust\n  description: Improved performance with Rust-based implementation of sorted routes\nallChanges:\n- Optimize trace span relationships\n- Deprecate custom_ecmascript_transforms\n- Remove old-space-size filtering from dev server\n- Rework client router filter handling\n- Updated Image preload behavior\n- Fix cookies().set missing in types\n- Disable ;tracing/release_max_level_off; for wasm, too\n- Apply user-defined PostCSS transforms to foreign code\n- Add @swc/core to server external packages\n- ;turbo-binding; -> ;turbopack-binding;\n- Consolidate react_refresh options\n- Add support for globally providing mdx components to turbopack\n- Refactor pages structure\n- Fix conflict when re-exporting multiple Client References\n- Move transforms to plugin\n- Fix chained ;.bind; of Server Actions\n- Fix port value for metadataBase\n- Introduce NextMode\n- Port sorted-routes.ts to Rust\n- Move build workers count change behind flag\n- Update default for appDocumentPreloading config for minimalMode\n- Add @vercel/og to external server packages\n- Fix custom server React resolution with app dir and pages both presented\n- Error in ;next export; when ;serverActions; is enabled\n- Reset not-found and error boundary when navigating\n- Revert "Error in ;next export; when ;serverActions; is enabled"\n- Warning fetch for ;[object Request]; specified\n- Remove custom handling for prebundled react env\n- Set cookies followed by ;redirect();\n- Update examples to use draft mode\n- Add mdx page example to examples/app-dir-mdx\n- Update with-supertokens example\n- Update with-clerk example to app router\n- Upgrading react-ga to react-ga4\n- Update with-turbopack example\n- Add trace-to-jaeger to workspace\n- Apply fmt\n- Fix clippy errors\n- Update ;swc_core; to ;v0.76.6;\n- Fix going back to page after applying hash link\n- Update turbopack\n- Suggest a replay in the bug issue template\n- Credits',
  };

  console.log("Message content", content);

  // console.log("Bundle created at", bundleLocation);

  // Extract all the compositions you have defined in your project
  // from the webpack bundle.
  const comps = await getCompositions(bundleLocation, {
    // You can pass custom input props that you can retrieve using getInputProps()
    // in the composition list. Use this if you want to dynamically set the duration or
    // dimensions of the video.
    inputProps,
  });

  // Select the composition you want to render.
  const composition = comps.find((c) => c.id === compositionId);

  // Ensure the composition exists
  if (!composition) {
    throw new Error(`No composition with the ID ${compositionId} found.
  Review "${entry}" for the correct ID.`);
  }

  const outputLocation = `out/${compositionId}.mp4`;
  console.log("Attempting to render:", outputLocation);
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: "h264",
    outputLocation,
    onProgress: (progress) => {
      console.log("Progress:", (progress.progress * 100).toFixed(2));
    },
    inputProps,
  });
  console.log("Render done!");

  return;
};
run();
