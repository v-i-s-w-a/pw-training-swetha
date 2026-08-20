import { test, expect } from "./fixtures";

test("should add two products, remove one, and verify the other remains", async ({ cartPage }) => {
    // Verify both products are in the cart
    const itemNames = await cartPage.itemNames();

    expect(itemNames).toContain("Sauce Labs Backpack");
    expect(itemNames).toContain("Sauce Labs Bike Light");

    // Remove one pRoduct
    await cartPage.removeItem("Sauce Labs Backpack");

    // Verify the other product is still in the cart
    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).toContain("Sauce Labs Bike Light");
});