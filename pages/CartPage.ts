import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CartPage extends BasePage {
  constructor(page: Page) {
    super(page, "/cart.html");
  }

  async itemNames(): Promise<string[]> {
    return await this.page.locator(".inventory_item_name").allTextContents();
  }

  async removeItem(productName: string) {
    const item = this.page.locator(".cart_item").filter({
      hasText: productName,
    });

    await item.getByRole("button", { name: "Remove" }).click();
  }
}