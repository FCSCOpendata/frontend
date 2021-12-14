describe('Blog Page', () => {
  beforeEach(() => {
    cy.visit('/blog');
  });

  it('shows found articles', () => {
    cy.contains('articles found');
  });

  it('has at least 1 article in the list', () => {
    cy.get('main')
      .find('div')
      .should(($div) => {
        expect($div).to.have.length.of.at.least(1);
      });
  });
});
