import { test, expect } from "@playwright/test";

test("homepage renders key sections", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByRole("heading", {
      name: "I automate enterprise trust through agentic AI.",
    })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "Systems that earn trust under pressure.",
    })
  ).toBeVisible();

  await expect(
    page.getByRole("heading", {
      name: "Workflow telemetry in one view.",
    })
  ).toBeVisible();
});
