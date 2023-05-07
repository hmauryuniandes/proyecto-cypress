export class General {
    constructor() {}
  
    when_user_click_on_expand_title_and_description = () => {
        cy.get('.gh-setting-first > .gh-setting-action > button').then(buttons => { 
            buttons[0].click();
        });
    };
  
    when_user_type_title_and_descripcion = () => {
      cy.get('.gh-setting-content-extended > .form-group.ember-view > .ember-text-field.gh-input.ember-view').then($inputs => {
        cy.wrap($inputs[0]).type('Nuevo Título');
      });
      cy.get('.gh-setting-content-extended > .form-group.ember-view > .ember-text-field.gh-input.ember-view').then($inputs => {
        cy.wrap($inputs[1]).type('Nuevo Descripción');
      });
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