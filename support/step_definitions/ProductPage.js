export class ProductPage {
    addToCart() {
      cy.get('#productProperties').within(() => {
        cy.get('button[name="save_to_cart"]').click();
      });
    }
  }
  