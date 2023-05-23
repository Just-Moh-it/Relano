import { Configuration } from "openai";
import { getInput, debug } from "@actions/core";

const run = async () => {
  const openai = new Configuration({
    apiKey: getInput("openai-api-key"),
  });

  const prompt = getInput("prompt");

  debug(`Prompt: ${prompt}`);
};
run();
