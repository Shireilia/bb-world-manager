import { getGreeting } from '../support/app.po';

describe('world-manager', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to world-manager!');
  });
});
