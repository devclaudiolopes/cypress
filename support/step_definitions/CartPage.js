export class CartPage {
    validateCart(quantity) {
      cy.get('#shoppingCartLink').click();
      cy.get('.quantity').should('contain', quantity);
    }
  }
  