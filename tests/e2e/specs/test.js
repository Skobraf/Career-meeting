// https://docs.cypress.io/api/introduction/api.html

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains('Secteur').click()
    cy.url().should('include', '/secteur')
    cy.contains('Tourisme').click()
    cy.url().should('include', '/secteur/0')
    cy.get('button').should('disabled', 'true')
  });
});
