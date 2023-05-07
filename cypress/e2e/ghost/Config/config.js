export class Config {
    constructor() {}
  
    when_user_create_new_menu = (url) => {
        cy.get('input[placeholder="Label"]').last().type("Nueva Pagina")
        cy.wait(100)
        cy.get('input.ember-text-field').last().type("nueva-pagina")
        cy.get('button.gh-blognav-add').last().click();
        cy.wait(500)
        cy.get('button.gh-btn-blue').click();
        
    };
    
    then_the_menu_was_created = () => {
        cy.get('button.gh-btn-green').should('exist');
           
        //document.querySelector(" div.site-nav-right")
        
    };
    
  }
  