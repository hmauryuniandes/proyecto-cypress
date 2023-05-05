export class Post {
  constructor() {}

  when_user_click_on_new_post = () => {
    cy.get("header.post-header").within(() => {
      cy.get('a[href="#/editor/post/"]').click();
    });
  };

  when_user_type_title_and_content = () => {
    cy.get('textarea[placeholder="Post Title"]').type("nuevo post");
    cy.window().then((win) => {
      win.document.querySelector(
        'p[data-koenig-dnd-droppable="true"]'
      ).innerHTML = "Hola mundo!";
    });
    cy.wait(500);
  };

  when_user_publish_post = () => {
    cy.get("div.gh-publishmenu-trigger").click();
    cy.wait(100);
    cy.get("button.gh-publishmenu-button").click();
    cy.wait(1000);
  };

  then_post_was_published = () => {
    cy.get(
      "aside > article > .gh-notification-content > .gh-notification-title"
    ).then(($title) => {
      expect($title[0].innerText).to.equal("Published");
    });

    cy.get("div.gh-publishmenu-trigger").then(($action) => {
      expect($action[0].innerText.trim()).to.equal("Update");
    });
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
}
