import { test, expect } from "@playwright/test";

test("problem user shows the same image for all six products", async ({ page }) => {
    await page.goto("/inventory.html");

    const images = page.locator(".inventory_item_img img");

    const imageSources = await images.evaluateAll((imgs) =>
        imgs.map((img) => img.getAttribute("src"))
    );

    expect(imageSources).toHaveLength(6);
    expect(new Set(imageSources).size).toBe(1);
});