// https://docs.cypress.io/api/introduction/api.html

describe("Display metier details", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.contains('Secteur').click()
    cy.url().should('include', '/secteur')
    cy.contains('Tourisme').click()
    cy.url().should('include', '/secteur/0')
  });

  it.only('submit button is disabled', () => {
    cy.get('button').should('disabled', 'true')
  })
  it.only('select filiere', () => {
    cy.get('input[value="Cuisine"]').check()
    cy.get('button').should('disabled', 'true')
  })
});
