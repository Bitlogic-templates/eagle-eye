import { LaunchOptions } from "@playwright/test";
const browserOptions: LaunchOptions = {
  slowMo: 0,
  headless: true,
  args: [
    "--use-fake-ui-for-media-stream",
    "--use-fake-device-for-media-stream",
    "--start-maximized",
  ],
  firefoxUserPrefs: {
    "media.navigator.streams.fake": true,
    "media.navigator.permission.disabled": true,
  },
};

export const config = {
  browser: process.env.BROWSER || "chromium",
  browserOptions,
  BASE_URL: "https://practicetestautomation.com/practice-test-login/",
};
