const { test, expect } = require("@playwright/test");

test.describe("Homepage smoke", () => {
  test("root URL serves redirect shell (no directory listing)", async ({ request }) => {
    const response = await request.get("/");
    const html = await response.text();

    expect(response.ok()).toBeTruthy();
    expect(html).toContain('window.location.replace("./docs/");');
    expect(html).not.toContain("Directory listing for /");
  });

  test("loads with HTTP 200 and expected title and H1", async ({ page }) => {
    const response = await page.goto("/");

    expect(response).not.toBeNull();
    expect(response.ok()).toBeTruthy();
    await expect(page).toHaveTitle(/1,5% podatku.*Marysia Wywiał/i);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "Przekaż 1,5% podatku dla Marysi Wywiał",
      })
    ).toBeVisible();
  });

  test("renders key action links and copy controls", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByTestId("hero-image")).toBeVisible();
    await expect(page.getByTestId("copy-krs")).toBeVisible();
    await expect(page.getByTestId("copy-cel")).toBeVisible();
    await expect(page.getByTestId("cta-to-pit")).toBeVisible();
    await expect(page.getByTestId("cta-foundation")).toBeVisible();
  });

  test("hero CTA scrolls to PIT data card", async ({ page }) => {
    await page.goto("/");

    const initialY = await page.evaluate(() => globalThis.scrollY);

    await page.getByTestId("cta-to-pit").click();

    await expect(page).toHaveURL(/#dane-do-pit$/);

    const finalY = await page.evaluate(() => globalThis.scrollY);
    expect(finalY).toBeGreaterThan(initialY);
    await expect(page.locator("#dane-do-pit")).toBeVisible();
  });

  test("has no runtime errors in console", async ({ page }) => {
    const runtimeErrors = [];

    page.on("console", (msg) => {
      if (msg.type() === "error") {
        runtimeErrors.push(`console: ${msg.text()}`);
      }
    });

    page.on("pageerror", (error) => {
      runtimeErrors.push(`pageerror: ${error.message}`);
    });

    await page.goto("/");

    expect(runtimeErrors).toEqual([]);
  });
});
