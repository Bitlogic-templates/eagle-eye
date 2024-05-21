// eslint-disable-next-line
const report = require("multiple-cucumber-html-reporter");

report.generate({
  pageTitle: "Peregrin",
  reportName: "Peregrin - Supply Chain Security Platform - QA status",
  pageFooter:
    '<div class="created-by"><p>Peregrin end to end framwork</p></div>',
  displayDuration: true,
  hideMetadata: true,
  useCDN: true,
  jsonDir: "./reports/",
  reportPath: "./reports/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "22.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "Supply Chain Security Platform" },
      { label: "Release", value: "X.X.X" },
      { label: "Cycle", value: "B1XXXXXX" },
    ],
  },
});
