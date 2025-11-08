import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createOpenAI } from "@ai-sdk/openai";
<<<<<<< HEAD
import * as Sentry from "@sentry/nextjs";
=======
>>>>>>> f720000e98d9a85a8f3369cf2f51f1bb4a34f515
import { generateText } from "ai";
import { inngest } from "./client";

const google = createGoogleGenerativeAI();
const openai = createOpenAI();
const anthropic = createAnthropic();
export const execute = inngest.createFunction(
  { id: "execute-ai" },
  { event: "execute/ai" },
  async ({ step }) => {
    await step.sleep("pretend-wait", "5s");

    Sentry.logger.info("User triggered test log", {
      log_source: "sentry_test",
    });

    const { steps: geminiSteps } = await step.ai.wrap(
      "gemini-generate-text",
      generateText,
      {
        model: google("gemini-2.5-flash"),
        system:
          "You are a helpful assistant that helps create AI generated content.",
        prompt: "What is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );
    const { steps: openaiSteps } = await step.ai.wrap(
      "openai-generate-text",
      generateText,
      {
        model: openai("gpt-4"),
        system:
          "You are a helpful assistant that helps create AI generated content.",
        prompt: "What is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );
    const { steps: anthropicSteps } = await step.ai.wrap(
      "anthropic-generate-text",
      generateText,
      {
        model: anthropic("claude-sonnet-4-0"),
        system:
          "You are a helpful assistant that helps create AI generated content.",
        prompt: "What is 2+2?",
        experimental_telemetry: {
          isEnabled: true,
          recordInputs: true,
          recordOutputs: true,
        },
      },
    );
    return {
      geminiSteps,
      openaiSteps,
      anthropicSteps,
    };
  },
);
