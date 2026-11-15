// tests/pages/PaymentModal.ts
import { type Page, type Locator, expect } from '@playwright/test';

export class PaymentModal {
  readonly page: Page;
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly promoCheckbox: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.getByRole('textbox', { name: 'Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.promoCheckbox = page.getByRole('checkbox', { name: 'Promotion checkbox' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

  async fillPaymentDetails(name: string, email: string) {
    await this.nameInput.fill(name);
    await this.emailInput.fill(email);
    await this.promoCheckbox.check();
  }

  async submit() {
    await this.submitButton.click();
  }

  async expectSuccess(message: string) {
    await expect(this.page.getByText(message)).toBeVisible();
  }
}