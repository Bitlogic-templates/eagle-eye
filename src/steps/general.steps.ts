import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';
import { Then } from '@cucumber/cucumber';

Then('The page title {string}', async function (this: ICustomWorld, title: string) {
  const { page } = this;
  const page_title = await page?.title();
  expect(page_title).toEqual(title);
});

Then('We see the message {string}', async function (this: ICustomWorld, message: string) {
  const page = this.page!;
  await expect(page.getByText(message)).toBeVisible();
});

Then('We see the and error message', async function (this: ICustomWorld) {
  const page = this.page!;
  await expect(page.locator('#error')).toBeVisible();
});
