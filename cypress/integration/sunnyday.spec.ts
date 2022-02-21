
/// <reference types="cypress" />


describe('The app', () => {
  beforeEach(() => {

    cy.visit('/')
  })

  it('displays the page correctly', () => {
    cy.contains('Country Explorer').should('exist');
    cy.contains('Region').should('exist');
  })

  it('can select a region', () => {

    cy.get(`[id="regionsearch"]`).first().click();
    cy.contains('Americas').should('exist');
    cy.contains('Americas').click();

    cy.contains('Argentina').should('exist');
    cy.contains('Argentina').click();

    cy.get(`[alt="Argentinaflag"]`).should('exist');

    cy.contains('In Japanese: アルゼンチン').should('exist');
    cy.contains('Argentine Republic').should('exist');
    cy.contains('In Japanese: アルゼンチン共和国').should('exist');
    cy.contains('Native names').should('exist');
    cy.contains('Argentina').should('exist');
    cy.contains('Argentine Republic').should('exist');
    cy.contains('República Argentina').should('exist');
    cy.contains('Population density: 16.320228384405123').should('exist');

  })

})
