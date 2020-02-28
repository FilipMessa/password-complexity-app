// @TODO fix eslint disable
/* eslint-disable jest/valid-expect */

describe('Password complexity app', function() {
  it('should works like charm', function() {
    cy.visit('http://localhost:8000/');
    cy.get('[data-testid=input-field]').type('ABCDEFG@!a1_a1', { delay: 100 });
    cy.get('[data-testid=doom-face]').should('be.visible');

    cy.request('POST', 'http://localhost:3005/password-complexity/v2', { password: 'Jane' }).then(
      response => {
        expect(response.body).to.contain.keys('score', 'strength', 'statusCode');
      },
    );
    cy.request('POST', 'http://localhost:3005/password-complexity/v1', { password: 'Jane' }).then(
      response => {
        expect(response.body).to.contain.keys('score', 'strength', 'statusCode'); // true
      },
    );
    cy.get('[data-testid="checkbox"]').click();
  });
});
