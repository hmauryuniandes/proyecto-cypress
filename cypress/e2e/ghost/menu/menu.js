export class Menu {
  constructor() {}

  when_user_navigate_to_posts = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/posts/"]').click();
    });
  };

  when_user_navigate_to_pages = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/pages/"]').click();
    });
  };
}
