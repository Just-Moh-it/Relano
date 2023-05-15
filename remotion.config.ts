import { Config } from "@remotion/cli/config";
import { webpackOverride } from "./remotion-webpack-override";

Config.overrideWebpackConfig(webpackOverride);
