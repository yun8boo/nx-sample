import { getAddTodoButton, getTodo } from '../support/app.po';

describe('TodoApps', () => {
  beforeEach(() => cy.visit('/'));

  it('should display todos', () => {
    getTodo().should((t) => expect(t.length).equal(2));
    getAddTodoButton().click();
    getTodo().should((t) => expect(t.length).equal(3));
  });
});
