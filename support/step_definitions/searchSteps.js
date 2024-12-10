import { HomePage } from '../../support/pages/HomePage';

const homePage = new HomePage();

Given('que o usuário acessa a página inicial', () => {
  cy.visit('https://advantageonlineshopping.com/#/');
});

When('o usuário pesquisa pelo produto {string}', (productName) => {
  homePage.searchProduct(productName);
});

Then('o sistema deve exibir uma lista de produtos relacionados', () => {
  homePage.validateSearchResults();
});
