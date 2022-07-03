describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the hero title', () => {
    cy.contains('UAE Open Data');
  });

  it('submits the search form', () => {
    cy.get('form').find('[type="search"]').type('gdp');
    cy.get('form').submit();
    cy.url().should('include', '/search?q=gdp');
    cy.get('.text-4xl').and('contain.text', 'datasets');
  });

  it('shows the Discover Topics section', () => {
    cy.contains('Discover Topics');
  });

  it('shows the map of organizations', () => {
    cy.contains('Explore data through organizations');
  });

  it('shows the latest news from blog', () => {
    cy.contains("What's New");
  });

  it('shows the Open Data 101 section', () => {
    cy.contains('Open Data 101');
  });
});
