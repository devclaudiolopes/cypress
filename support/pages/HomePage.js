export class HomePage {
    searchProduct(productName) {
      cy.get('#menuSearch').click();
      cy.get('#autoComplete').type(productName).type('{enter}');
    }
  
    validateSearchResults() {
      cy.get('.categoryTitle').should('contain', 'LAPTOPS');
      cy.get('.productName').should('have.length.greaterThan', 0);
    }
  }
  