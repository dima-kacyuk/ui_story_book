import type { StorybookConfig } from "@storybook/react-vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-themes",
    "@storybook/addon-designs"
  ],
  docs: {
    autodocs: true
  },
  async viteFinal(viteConfig) {
    const { mergeConfig } = await import("vite");

    const base = process.env.STORYBOOK_BASE_PATH ?? "/";

    return mergeConfig(viteConfig, {
      base,
      resolve: {
        alias: {
          "@": path.resolve(dirname, "../src")
        }
      }
    });
  }
};

export default config;
