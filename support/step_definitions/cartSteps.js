import { ProductPage } from '../../support/pages/ProductPage';
import { CartPage } from '../../support/pages/CartPage';

const productPage = new ProductPage();
const cartPage = new CartPage();

Given('que o usuário pesquisa pelo produto {string}', (productName) => {
  cy.visit('https://advantageonlineshopping.com/#/');
  cy.get('#menuSearch').click();
  cy.get('#autoComplete').type(productName).type('{enter}');
  cy.get('.productName').contains(productName).click();
});

When('o usuário adiciona o produto ao carrinho', () => {
  productPage.addToCart();
});

Then('o sistema deve exibir o produto no carrinho com quantidade {string}', (quantity) => {
  cartPage.validateCart(quantity);
});
