import { BasePage } from "./BasePage";
import { Page, Locator } from "@playwright/test";

export class LoginPage extends BasePage{
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly error: Locator;

    constructor(page: Page){
        super(page, "/");
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('password');
        this.loginButton = page.getByRole("button", {name: "Login"});
        this.error = page.getByTestId('error');
    }

    async login(user: string, pass: string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.loginButton.click();
    }
}