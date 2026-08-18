import { test, expect } from "@playwright/test";
test("basic webtest", async({ page })=>{
    await page.goto("https://saucedemo.com/");
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page).toHaveURL(
        'https://www.saucedemo.com/'
    ) ;
    await page.getByPlaceholder('Username').fill('locked_out_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
})