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
    cy.get('.text-4xl').and('contain.text', 'datasets');
  });

  it('shows the most popular datasets', () => {
    cy.contains('MOST POPULAR DATASETS');
  });

  it('shows the ckan categories', () => {
    cy.contains('View collection');
  });

  it('shows the latest news from blog', () => {
    cy.contains('ARTICLE');
  });

  it('shows the most downloaded graph', () => {
    cy.contains('MOST DOWNLOADED');
  });
});
