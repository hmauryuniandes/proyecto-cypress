export class Page {
    constructor() {}
  
    when_user_click_on_new_page = () => {
        cy.get('a[href="#/editor/page/"]').click();
    };
  
    when_user_type_title_and_content = () => {
      cy.get('textarea[placeholder="Page title"]').type("Nueva Pagina");
      cy.get('.koenig-editor__editor')
        .find('p[data-koenig-dnd-droppable="true"]')
        .invoke('html', 'Esta es mi primera pagina')
      cy.wait(500);
    };
  
    when_user_publish_page = () => {
      cy.get('button.gh-publish-trigger').click()
      cy.wait(100);
      cy.get('button.gh-btn-large').click()
      cy.wait(500);
      cy.get('button.gh-btn-pulse').click()
      cy.wait(500);
    };

    when_user_get_back_to_open_new_page = () => {
        cy.get('button.gh-publish-back-button').click()
        cy.wait(100);
        cy.get('a[href="#/pages/"]').click();
        cy.wait(100);
        cy.get("body > div.gh-app > div > main > section > section > div.gh-list-sticky > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)").click();
      };
  
    then_page_was_published = () => {
        cy.get('[data-test-editor-post-status]')
        .then(($span) => {
          const text = $span.text().trim()
          console.log(text)
          expect(text).to.equal('Published')

          cy.get('a[href="#/pages/"').click();
        })
    };
  
    
    when_user_click_on_edit_page = () =>{
        cy.get("body > div.gh-app > div > main > section > section > div.gh-list-sticky > div.posts-list.gh-list.feature-memberAttribution > div:nth-child(1)").click();
        cy.wait(100)
        cy.get('textarea[placeholder="Page title"]').type(" Modificada");
        cy.wait(500)
        cy.get("button.gh-editor-save-trigger").click();
    };

    then_page_was_modified = () =>{
        cy.get(
            "aside > article > .gh-notification-content > .gh-notification-title"
          ).then(($title) => {
            expect($title[0].innerText).to.equal("Updated");
          });

          cy.get('a[href="#/pages/"').click();
    };

    when_user_delete_current_post = () => {
        cy.get("button.post-settings").click();
        cy.wait(500);
        cy.get("button.settings-menu-delete-button").click();
        cy.wait(500);
        cy.get(".modal-content").within(() => {
          cy.get("button.gh-btn-red").click();
        });
      };
    delete_all_pages = () =>
    {
        cy.get('[role="menuitem"]').each(page => {
            const pageTitle = page.find('h3').text()
            console.log(pageTitle)
            if (pageTitle.includes('Nueva Pagina')) {
                console.log("eliminando...")
              cy.wrap(page).trigger('contextmenu')
              cy.wait(500)
              cy.contains('button.mr2', 'Delete').click()
              cy.wait(500)
              cy.get("button.gh-btn-red").click();
            }
          })
    }
  }
  