import { expect, test } from "@playwright/test";
import { services } from "../src/data/site";
import { detailContent } from "../src/data/service-details";

test("every service route renders its matching detail content", async ({ page }) => {
  for (const service of services) {
    const slug = service.path.split("/").pop();
    expect(slug, `Service path "${service.path}" must include a slug`).toBeTruthy();

    const expected = detailContent[slug!];
    expect(
      expected,
      `Missing detailContent entry for service "${service.title}" (${slug})`,
    ).toBeDefined();

    await test.step(`visit ${service.path}`, async () => {
      await page.goto(service.path);
      await expect(page.locator(".page-intro .eyebrow")).toHaveText(expected!.eyebrow);
    });
  }
});