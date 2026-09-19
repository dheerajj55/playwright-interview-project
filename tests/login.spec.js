const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { CartPage } = require('../pages/CartPage');

test('Login and add Backpack to cart', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await page.goto('/');

    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addBackpackToCart();

    await cartPage.openCart();

    await expect(cartPage.backpackItem).toBeVisible();
});