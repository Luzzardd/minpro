import Home from './page'; // Updated to default import

describe('<Home />', () => {
  it('mounts', () => {
    cy.mount(<Home />);
  });

  it('displays the correct content', () => {
    cy.mount(<Home />);
    cy.get('h1').should('contain', 'Login'); // Updated assertion to match the new content
  });

  it('contains a footer', () => {
    cy.mount(<Home />);
    cy.get('footer').should('exist'); // Check if footer exists
  });
});
