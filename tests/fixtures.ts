// tests/fixtures.ts
import { test as base } from '@playwright/test';
import { MenuPage } from './pages/MenuPage';
import { CartPage } from './pages/CartPage';
import { PaymentModal } from './pages/PaymentModal';

type Fixtures = {
  menuPage: MenuPage;
  cartPage: CartPage;
  paymentModal: PaymentModal;
};

export const test = base.extend<Fixtures>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await menuPage.goto();
    await use(menuPage);
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  paymentModal: async ({ page }, use) => {
    await use(new PaymentModal(page));
  },
});

export { expect } from '@playwright/test';