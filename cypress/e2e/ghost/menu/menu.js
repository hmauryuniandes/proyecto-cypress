export class Menu {
  constructor() {}

  when_user_navigate_to_posts = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/posts/"]').click();
    });
  };

  when_user_navigate_to_general = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/settings/general/"]').click();
    });
  };

  when_user_navigate_to_code_injection = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/settings/code-injection/"]').click();
    });
  };

  when_user_navigate_to_site = () => {
    cy.get("section.gh-nav-body").within(() => {
      cy.get('a[href="#/site/"]').click();
    });
  };
}
