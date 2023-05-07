export class Tag {
    

    get newTagButton() {
      return cy.get('header.tags-header > .view-actions > a[href="#/tags/new/"]');
    }
    get tagNameInput() {
      return cy.get('input[name=name]');
    }
    get saveTag() {
      return cy.get('button').find('span').contains('Save');
    }
    get settingButton() {
      return cy.get("button.post-settings");
    }
    get deleteButton() {
      return cy.get('section.gh-canvas > button.gh-btn-red');
    }
    get deleteConfirmationButton() {
      return cy.get(".modal-content > .modal-footer > button.gh-btn-red");
    }
    
    constructor() { 
      this.slug;
    }
  
    when_user_click_on_new_tag = () => {
      this.newTagButton.click();
    };
  
    when_user_name_tag = (nameTag) => {
      this.tagNameInput
      .type(nameTag);
      cy.wait(500);
    };
  
    when_user_save_tag = () => {
      this.saveTag.click();
      cy.wait(500);
    };
  
    then_valida_titulo_tag = (nameTag) => {
      cy.get(
        "h2.gh-canvas-title"
      ).then(($title) => {
        expect($title[0].innerText).to.equal(`Tags\n${nameTag}`);
      });
    };

    when_retorna_slug = () => {
      return cy.get('input[name=slug]')
      .invoke('val')
      .then(value => {
        return value;
      });
    };

    when_click_list_tag = (slugSel, nameTag) => {
      cy.wait(500);
      cy.get('.tags-list > li.gh-tags-list-item')
      .find(`a[href="#/tags/${slugSel}/"]`)
      .contains(nameTag)
      .click({ retryOnStatusCodeFailure: true, retries: 3 });
    }; 
  
    when_user_delete_current_tag = () => {
      this.deleteButton.click();
      cy.wait(500);
      this.deleteConfirmationButton.click();
      cy.wait(500);
    };

    When_clear_name = () => {
      this.tagNameInput.invoke('val', '');
    };

    then_list_tag = (slugSel, nameTag) => {
      cy.wait(500);
      cy.get('.tags-list > li.gh-tags-list-item')
      .find(`a[href="#/tags/${slugSel}/"]`)
      .should('not.exist');
    };
  }