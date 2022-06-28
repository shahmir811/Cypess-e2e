/// <reference types="cypress" />

describe('Basic Tests', () => {
	it('We have correct page title', () => {
		cy.visit('https://codedamn.com/');

		cy.contains('Learn Programming').should('exist');
	});
});
