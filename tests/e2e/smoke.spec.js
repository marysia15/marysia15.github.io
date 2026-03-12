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
    await expect(page).toHaveTitle(/1,5% dla Marysi/i);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "1,5% dla Marysi. W PIT to chwila, dla niej codzienna pomoc.",
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

  test("hero CTA navigates to PIT data card", async ({ page }) => {
    await page.goto("/");

    await page.getByTestId("cta-to-pit").click();

    await expect(page).toHaveURL(/#dane-do-pit$/);
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

  test("faq page loads with updated title and heading", async ({ page }) => {
    const response = await page.goto("/docs/faq.html");

    expect(response).not.toBeNull();
    expect(response.ok()).toBeTruthy();
    await expect(page).toHaveTitle(/FAQ dla Marysi/i);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "FAQ dla tych, którzy chcą pomóc Marysi",
      })
    ).toBeVisible();
  });
});
