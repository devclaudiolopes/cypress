import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../pages/HomePage";

Given('acesso a url {string}', (url) => {
	HomePage.visit(url)
});

Then('visualizo a home', () => {
	return true;
});

