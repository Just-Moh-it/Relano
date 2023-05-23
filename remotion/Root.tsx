import {
  Composition,
  getInputProps,
  delayRender,
  continueRender,
} from "remotion";
import BaseComp, { ParsedPropsSchema, BaseCompProps } from "./BaseComp";
import { useMemo, useState } from "react";
import { parse } from "yaml";

const inputProps = getInputProps() as BaseCompProps;

export default function Comp() {
  const [handle] = useState(() => delayRender());
  const [durationInFrames, setDurationInFrames] = useState(30 * 3);
  const { topChanges, allChanges } = useMemo((): ParsedPropsSchema => {
    const parsed = parse(
      inputProps.openaiGeneration ?? openaiGeneration
    ) as unknown as ParsedPropsSchema;

    const duration = 81 * parsed.topChanges.length + 555;

    setDurationInFrames(duration);

    continueRender(handle);

    console.log("Props", {
      repositorySlug: "Vercel/NextJS",
      releaseTag: "13.4.2",
      parsed,
      openaiGeneration,
    });
    return parsed;
  }, [handle, inputProps.openaiGeneration]);

  return (
    <>
      <Composition
        component={BaseComp}
        // component={() => <Video src={staticFile("/insp.mp4")} />}
        // component={() => (
        //   <AbsoluteFill className="flex-col gap-20 justify-center items-center text-white bg-black text-9xl w-full h-full">
        //     {" "}
        //     Hello World{" "}
        //     <Video width={200} height={200} src={staticFile("/insp.mp4")} />
        //   </AbsoluteFill>
        // )}
        // durationInFrames={30 * 4}
        durationInFrames={durationInFrames}
        fps={30}
        width={2160}
        height={1080}
        id="basecomp"
        defaultProps={{
          repositorySlug: "Vercel/NextJS",
          releaseTag: "13.4.2",
          topChanges,
          allChanges,
          openaiGeneration,
          // topChanges: [
          //   {
          //     title: "Some awesome feature",
          //     description:
          //       "Hey! We added some awesome feature you should check out! Just get to the repo",
          //   },
          //   {
          //     title: "Some awesome feature",
          //     description:
          //       "Hey! We added some awesome feature you should check out! Just get to the repo",
          //   },
          //   {
          //     title: "Some awesome feature",
          //     description:
          //       "Hey! We added some awesome feature you should check out! Just get to the repo",
          //   },
          //   {
          //     title: "Some awesome feature",
          //     description:
          //       "Hey! We added some awesome feature you should check out! Just get to the repo",
          //   },
          //   {
          //     title: "Some awesome feature",
          //     description:
          //       "Hey! We added some awesome feature you should check out! Just get to the repo",
          //   },
          // ],
          // allChanges: [
          //   "make sure server component externals only apply to files resolvable by node",
          //   "Fix link not being GC'd sometimes",
          //   "Fix issue where nextP is not replaced in searchParams",
          //   "Add typescript version to next-info",
          //   "Upgrade React to 18.3.0-canary-16d053d59-20230506",
          //   "Remove empty config warning",
          //   "app-router: add startTransition call to revalidate dispatcher",
          //   "Inline static data buffer instead of using fs read",
          //   "Revert 'Temporarily disable app dir export integration test'",
          //   "Add link to Server Actions docs.",
          //   "Replace metadata clone with custom handler in dev",
          //   "Add request-async-storage to the shared layer",
          //   "Fix revalidate: false detection in app",
          //   "Fix metadata image route encoding",
          //   "Fix actions redirect handling",
          //   "Restrict useOptimistic and useFormStatus APIs on the server layer",
          //   "Fix external rewrite with body",
          //   "fix: better error message with an invalid assetPrefix",
          //   "Fix Node Crypto polyfill",
          //   "Fix: Router.query contains _next when using middleware with dynamic routes",
          //   "type: update React.CSSProperties type to Record",
          //   "Fix server CSS imports and HMR not working properly in specific conditions",
          //   "Fix HMR support for server layer imported SASS and SCSS",
          //   "Support .bind syntax with Action functions",
          //   "ci(test): enable turbopack test",
          //   "feat(next-core): relay transform plugin",
          //   "Fix canonical url for dynamic routes",
          //   "Add experimental compile/generate handling",
          //   "chore: cross-platform rm -rf script",
          //   "refactor(next-core): remove ast cloning in custom transform",
          //   "fix: a11y issues in react-dev-overlay",
          //   "Add tests for HMR",
          //   "Add stub Route type for typedRoutes",
          //   "Add test for appdir referenced images",
          //   "feat: Allow trace-level logging for non-published release builds",
          //   "Fix unexpected object mutation while resolving Open Graph",
          //   "actions: forward fetch rejections to the action handler",
          //   "actions: make cookies.set revalidate",
          //   "interception route: fix route groups breaking the referrer computation",
          //   "Allow export decl with any init value in the actions compiler",
          //   "Handle unstable_cache in pages",
          //   "Update cache method handling during build",
          //   "Fix fetchCache and no-store handling",
          //   "interception routes: fix rewrites order",
          //   "Ensure initialHeaders are normalized",
          //   "app-router: add support for parallel routes in useParams",
          //   "Add puppeteer to external packages list",
          //   "Add playwright to external package list",
          //   "actions: fill prefetchCache with revalidation payload",
          //   "Rename Turbopack/tasks crates to common prefixes",
          //   "chore(jest): Simplify isServer expression",
          //   "Add missing config vars into Webpack cache key",
          //   "misc: Apply PR comments from #49206",
          //   "fix: Standalone node http server starts accepting requests before next handler is ready",
          //   "Update links from beta to stable docs.",
          // ],
        }}
      />
      {/* <Composition
        component={() => <Video src={staticFile("/insp.mp4")} />}
        durationInFrames={570}
        fps={30}
        width={2160}
        height={1080}
        id="insp"
        defaultProps={{}}
      /> */}
      {/* <Composition
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
        fps={30}
        width={2160}
        height={1080}
        id="overlayed"
        defaultProps={{}}
      /> */}
    </>
  );
}

const openaiGeneration = `topChanges:
- title: Optimize trace span relationships
  description: Reduced overhead for trace span relationships
- title: Deprecate custom_ecmascript_transforms
  description: Removed support for custom ECMAScript transforms
- title: Updated Image preload behavior
  description: Fixed behavior related to setting image preload and referrer policy
- title: Introduce NextMode
  description: Added new mode to configure Next.js settings
- title: Port sorted-routes.ts to Rust
  description: Improved performance with Rust-based implementation of sorted routes
allChanges:
- Optimize trace span relationships
- Deprecate custom_ecmascript_transforms
- Remove old-space-size filtering from dev server
- Rework client router filter handling
- Updated Image preload behavior
- Fix cookies().set missing in types
- Disable ;tracing/release_max_level_off; for wasm, too
- Apply user-defined PostCSS transforms to foreign code
- Add @swc/core to server external packages
- ;turbo-binding; -> ;turbopack-binding;
- Consolidate react_refresh options
- Add support for globally providing mdx components to turbopack
- Refactor pages structure
- Fix conflict when re-exporting multiple Client References
- Move transforms to plugin
- Fix chained ;.bind; of Server Actions
- Fix port value for metadataBase
- Introduce NextMode
- Port sorted-routes.ts to Rust
- Move build workers count change behind flag
- Update default for appDocumentPreloading config for minimalMode
- Add @vercel/og to external server packages
- Fix custom server React resolution with app dir and pages both presented
- Error in ;next export; when ;serverActions; is enabled
- Reset not-found and error boundary when navigating
- Revert "Error in ;next export; when ;serverActions; is enabled"
- Warning fetch for ;[object Request]; specified
- Remove custom handling for prebundled react env
- Set cookies followed by ;redirect();
- Update examples to use draft mode
- Add mdx page example to examples/app-dir-mdx
- Update with-supertokens example
- Update with-clerk example to app router
- Upgrading react-ga to react-ga4
- Update with-turbopack example
- Add trace-to-jaeger to workspace
- Apply fmt
- Fix clippy errors
- Update ;swc_core; to ;v0.76.6;
- Fix going back to page after applying hash link
- Update turbopack
- Suggest a replay in the bug issue template
- Credits` as const;
