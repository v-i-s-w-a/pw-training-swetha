import { test, expect } from "@playwright/test";
test("basic testing" , async({ page }) => {
await page.goto("https://saucedemo.com/");
await page.waitForTimeout(1000);
await expect(page).toHaveTitle("Swag Labs");

await page.getByPlaceholder("Username").fill("locked_out_user")
await page.waitForTimeout(1000);
await page.getByPlaceholder("Password").fill("secret_sauce")
await page.waitForTimeout(1000);
const loginBtn = page.getByRole("button", { name:'Login' });
await loginBtn.click();
const errorMessage = page.getByTestId("error");
await expect(errorMessage).toBeVisible();
await expect(errorMessage).toContainText("Epic sadface: Sorry, this user has been locked out.")
})