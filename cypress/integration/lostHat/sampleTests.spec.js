context('Lost Hat', () => {
    beforeEach(() => {
      cy.visit('https://autodemo.testoneo.com/en/')
    })
    
    it('Shop - Contact Us - invalid email address', () => {
      cy.get('#contact-link > a')
        .click();
      cy.get('.form-footer > .btn')
        .click();
      cy.get('.alert.alert-dadnger > ul > li')
        .first()
        .should('have.text', 'Invalid email address.')
    })
    
    it('Shop - Subscribe - invalid email address', () => {
      cy.get('.hidden-xs-down')
        .click();
      cy.get('.alert')
        .first()
        .should('contain.text', 'Invaldsfid email address.')
    })
   })
   