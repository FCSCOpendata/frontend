describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the hero title', () => {
    cy.contains('Find and Share');
  });

  it('checks that a search form exists', () => {
    cy.get('form').contains('Search');
  });

  it('submits the search form', () => {
    cy.get('form').find('[type="search"]').type('gdp');
    cy.get('form').submit();
    cy.url().should('include', '/search?q=gdp');
    cy.get('.text-3xl').and('contain.text', 'results found');
  });

  it('shows the recent datasets', () => {
    cy.contains('Recent Datasets');
  });

  it('returns the expected number of recent datasets', () => {
    cy.get('ul.grid')
      .find('li')
      .should(($li) => {
        expect($li).to.have.length.of.at.least(2);
      });
  });
});
