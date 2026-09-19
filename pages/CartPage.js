class CartPage {

    constructor(page) {
        this.page = page;

        this.cartLink = page.locator('.shopping_cart_link');
        this.backpackItem = page.getByText('Sauce Labs Backpack');
    }

    async openCart() {
        await this.cartLink.click();
    }
}

module.exports = { CartPage };