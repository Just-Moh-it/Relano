import { Config } from "remotion";
import { webpackOverride } from "./remotion-webpack-override";

Config.overrideWebpackConfig(webpackOverride);
