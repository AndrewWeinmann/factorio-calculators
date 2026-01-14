import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect the app to have loaded with correct title
  await expect(page).toHaveTitle(/Factorio Calculators/);
});

test("app renders", async ({ page }) => {
  await page.goto("http://localhost:5173/");

  // Expect the main app element to be visible
  await expect(page.locator("#root")).toBeVisible();
});
