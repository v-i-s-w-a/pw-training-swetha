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
await page.getByTestId('error')
/*await page.waitForTimeout(1000);
await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
await expect(page.getByText('Products')).toBeVisible()
//await page.waitForTimeout(1000);
const product = page.getByTestId('inventory_item').filter({hasText:'Sauce Labs Bike Light'});
await product.getByRole('button',{name:'Add to cart'}).click();
await page.waitForTimeout(1000);
/*await page.getByText("Add to cart").click()
await page.waitForTimeout(1000);
await page.goto("https://www.saucedemo.com/cart.html")
await page.waitForTimeout(1000)
await page.getByRole("button", { name: "Checkout"}).click()
await page.waitForTimeout(1000)
await page.waitForURL("https://www.saucedemo.com/checkout-step-one.html");
await expect(page).toHaveURL("https://www.saucedemo.com/checkout-step-one.html")*/

})