// tests/pages/CartPage.ts
import { type Page, type Locator } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async increaseQuantity(displayName: string) {
    await this.page.getByRole('button', { name: `Add one ${displayName}` }).click();
  }

  async decreaseQuantity(displayName: string) {
    await this.page.getByRole('button', { name: `Remove one ${displayName}` }).click();
  }

  async checkout() {
    await this.checkoutButton.click();
  }
}