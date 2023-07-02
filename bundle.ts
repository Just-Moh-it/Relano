import { bundle } from "@remotion/bundler";
import { webpackOverride } from "./remotion-webpack-override";
import path from "path";

const main = async () => {
  console.log("Started bundling!!");

  const bundleLocation = await bundle(
    path.resolve("./remotion/index.ts"),
    () => undefined,
    {
      webpackOverride,
    }
  );

  console.log("bundle location", bundleLocation);
};

main();
