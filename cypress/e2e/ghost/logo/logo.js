export class Logo {
    constructor() { }

    when_user_click_on_delete_logo = () => {
        cy.get('.gh-setting > .gh-setting-action.gh-setting-action-smallimg > button').click();
        cy.wait(500);
      };

    when_user_click_on_upload_image = () => {
        cy.fixture('kraken-icon.png').then(fileContent => {
            cy.get('.gh-setting-first > .gh-setting-action.gh-setting-action-smallimg > button').then($input => {
                // Convertir el contenido del archivo a un objeto de archivo de JavaScript
                const file = new File([fileContent], 'kraken-icon.png', { type: 'image/png' })
                // Crear una lista de archivos para el input de archivo
                const list = new DataTransfer()
                list.items.add(file)
                // Asignar la lista de archivos al input de archivo
                $input[0].files = list.files
                cy.wait(4000);
                // Disparar el evento 'change' para simular la carga de archivo
                cy.get('.gh-setting-first > .gh-setting-action.gh-setting-action-smallimg > button').trigger('change', { force: true })
                cy.wait(4000);
            })
        });
    };
  
    when_user_save_settings = () => {
      cy.get('.gh-btn.gh-btn-blue.gh-btn-icon.ember-view').click();
      cy.wait(1000);
    };
  
    
    then_save_settings = () => {
      cy.get('.view-actions > .gh-btn.gh-btn-blue.gh-btn-icon.ember-view > span').then(($title) => {
        expect($title[0].innerText).to.equal("Saved");
      });
    };

}