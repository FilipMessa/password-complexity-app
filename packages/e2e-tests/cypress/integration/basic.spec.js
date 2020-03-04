// @TODO fix eslint disable
/* eslint-disable jest/valid-expect */

const mockErrorResp = {
  status: 'error',
  statusCode: 404,
  type: 'Not Found',
  message: 'Requested resources was not found.',
};

describe('Password complexity app', function() {
  it('should works like charm', function() {
    cy.visit('/');
    cy.server();
    cy.route('POST', '/password-complexity/v1').as('post/v1');
    cy.route('POST', '/password-complexity/v2').as('post/v2');

    cy.get('[data-testid=input-field]').type('ABCDEFG@!a1_a1', { delay: 100 });
    cy.wait('@post/v1');

    cy.get('[data-testid=doom-face]').should('be.visible');
    cy.get('[data-testid=password-indicator]').contains('Good');

    cy.get('[type="checkbox"]').click();

    cy.get('[data-testid=input-field]').type('ABCDEFG@!a1_a1', { delay: 100 });
    cy.wait('@post/v2');

    cy.get('[data-testid=doom-face]').should('be.visible');
    cy.get('[data-testid=password-indicator]').contains('Strong');

    cy.route({
      status: 404,
      method: 'POST',
      url: '/password-complexity/v2',
      response: mockErrorResp,
    }).as('post/err');
    cy.wait('@post/err');

    cy.get('[data-testid=input-error-msg]').contains('Ups! Something went wrong :(');
  });
});
