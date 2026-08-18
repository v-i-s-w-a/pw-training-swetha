import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CartPage } from "../pages/CartPage";

type Fixtures = {
    loginPage: LoginPage;
    inventoryPage: InventoryPage;
    cartPage: CartPage;
};

export const test = base.extend<Fixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    inventoryPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);

        await loginPage.open();
        await loginPage.login("standard_user", "secret_sauce");

        await use(new InventoryPage(page));
    },

    cartPage: async ({ inventoryPage, page }, use) => {
        await inventoryPage.addToCart("Sauce Labs Backpack");
        await inventoryPage.addToCart("Sauce Labs Bike Light");

        await inventoryPage.openCart();

        await use(new CartPage(page));
    },
});

export { expect } from "@playwright/test";