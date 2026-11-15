// tests/data/checkout.data.ts
export const CheckoutData = {
  customer: {
    name: 'Earl',
    email: 'sample@gmail.com',
  },

  products: {
    espresso: 'Espresso',
    espressoMacchiato: 'Espresso_Macchiato',
    cappuccino: 'Cappuccino',
    mocha: 'Mocha',
    flatWhite: 'Flat_White',
    americano: 'Americano',
    cafeLatte: 'Cafe_Latte',
    espressoConPanna: 'Espresso_Con Panna', // ⚠️ contains a space
    cafeBreve: 'Cafe_Breve',
  },

  displayNames: {
    americano: 'Americano',
    cafeBreve: 'Cafe Breve', // ⚠️ space, not underscore (used by cart buttons)
  },

  promoPopup: {
    dismissButtonNames: ["Nah, I'll skip.", 'Yes, of course!'],
  },

  successMessage: 'Thanks for your purchase. Please check your email for payment.',
} as const;