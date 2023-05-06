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
        /*<button class="gh-btn-editor gh-publish-back-button" title="Close" data-test-button="close-publish-flow" type="button">
            <span><svg viewBox="0 0 16 16"><path d="M12.05 1.303a1 1 0 01-.02 1.414L6.597 8l5.433 5.283a1 1 0 01-1.394 1.434L4.756 9a1.4 1.4 0 01-.423-1 1.39 1.39 0 01.423-1l5.88-5.717a1 1 0 011.414.02z"></path></svg> Editor</span>
        </button>*/
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
  