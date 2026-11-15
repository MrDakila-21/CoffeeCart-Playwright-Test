// tests/checkout.spec.ts
import { test } from './fixtures';
import { CheckoutData } from './data/checkout.data';

test('customer can purchase coffee and see confirmation', async ({
  menuPage,
  cartPage,
  paymentModal,
}) => {
  // Add Product
  await menuPage.addProducts([
    CheckoutData.products.espresso,
    CheckoutData.products.cappuccino,
    CheckoutData.products.mocha,
    CheckoutData.products.americano,
    CheckoutData.products.cafeLatte,
    CheckoutData.products.espressoConPanna,
    CheckoutData.products.cafeBreve,
  ]);

  // Checkout
  await menuPage.goToCart();
  await cartPage.checkout();

  // Submit Payment Details
  await paymentModal.fillPaymentDetails(
    CheckoutData.customer.name,
    CheckoutData.customer.email
  );
  await paymentModal.submit();

  // Verify Success
  await paymentModal.expectSuccess(CheckoutData.successMessage);
});