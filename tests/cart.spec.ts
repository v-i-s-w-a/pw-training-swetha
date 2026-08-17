import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

test("should add two products, remove one, and verify the other remains", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    // Login
    await loginPage.open();
    await loginPage.login("standard_user", "secret_sauce");

    // Add two products
    await inventoryPage.addToCart("Sauce Labs Backpack");
    await inventoryPage.addToCart("Sauce Labs Bike Light");

    // Open cart
    await inventoryPage.openCart();

    // Verify both products are in the cart
    const itemNames = await cartPage.itemNames();

    expect(itemNames).toContain("Sauce Labs Backpack");
    expect(itemNames).toContain("Sauce Labs Bike Light");

    // Remove one product
    await cartPage.removeItem("Sauce Labs Backpack");

    // Verify the other product is still in the cart
    const remainingItems = await cartPage.itemNames();

    expect(remainingItems).toContain("Sauce Labs Bike Light");
});