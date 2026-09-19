class ProductsPage {

    constructor(page) {
        this.page = page;

        this.backpack =
            page
                .locator('.inventory_item_description')
                .filter({ hasText: 'Sauce Labs Backpack' });

        this.backpackAddToCart =
            this.backpack.getByRole('button', { name: 'Add to cart' });
    }

    async addBackpackToCart() {
        await this.backpackAddToCart.click();
    }
}

module.exports = { ProductsPage };