import { ICustomWorld } from "../support/custom-world";
import { config } from "../support/config";
import { Given, When } from "@cucumber/cucumber";

Given("Go to the login website", async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator("#login > h2").waitFor();
});

When(
  "Enter the user name {string}",
  async function (this: ICustomWorld, userName: string) {
    const page = this.page!;
    await page.getByLabel("Username").fill(userName);
  },
);

When(
  "Enter the password {string}",
  async function (this: ICustomWorld, password: string) {
    const page = this.page!;
    await page.getByLabel("Password").fill(password);
  },
);

When("Click in {string}", async function (this: ICustomWorld, name: string) {
  const page = this.page!;
  await page.getByRole("button", { name: name }).click();
});
