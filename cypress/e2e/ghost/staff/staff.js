export class Staff {
    constructor() {}
  
    when_user_click_on_first_user = () => {
        cy.get('.apps-grid-cell.tooltip-centered > a').then(buttons => { 
            buttons[0].click();
        });
    };
  
    when_user_type_new_fullname = () => {
      cy.get('#user-name').clear().type('New FullName',{force: true});
      cy.wait(500);
    };

    when_user_save_settings = () => {
      cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
      cy.wait(100);
    };
  
    
    then_save_settings = () => {
      cy.get('.view-actions > .gh-btn.gh-btn-blue.gh-btn-icon.ember-view > span').then(($title) => {
        expect($title[0].innerText).to.equal("Saved");
      });
    };
    
  }