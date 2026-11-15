// tests/pages/MenuPage.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class MenuPage {
  readonly page: Page;
  readonly cartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartLink = page.getByRole('link', { name: 'Cart page' });
  }

  async goto() {
    await this.page.goto('/');
  }

  async addProduct(dataTestId: string) {
    await this.page.locator(`[data-test="${dataTestId}"]`).click();
  }

  async addProducts(dataTestIds: string[]) {
    for (let i = 0; i < dataTestIds.length; i++) {
      await this.addProduct(dataTestIds[i]);

      // Promo popup fires after every 3rd item (3, 6, 9...)
      if ((i + 1) % 3 === 0) {
        await this.dismissPromoPopup();
      }
    }
  }

  async dismissPromoPopup() {
    const possibleButtons = ["Nah, I'll skip.", 'Yes, of course!'];
    for (const name of possibleButtons) {
      const btn = this.page.getByRole('button', { name });
      try {
        await btn.waitFor({ state: 'visible', timeout: 3000 });
        await btn.click();
        return;
      } catch {
        // try next variant
      }
    }
    throw new Error('Promo popup did not appear after 3rd item — rule may have changed');
  }

  async goToCart() {
    // Guard: fail fast if cart is empty
    await expect(this.cartLink).not.toHaveText(/cart \(0\)/);
    await this.cartLink.click();
  }
}