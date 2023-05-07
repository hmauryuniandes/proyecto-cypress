export class Site {
  url;

  constructor(url) {
    this.url = url;
  }

  given_user_visit_ghost = () => {
    cy.visit(this.url);
    cy.wait(2000);
  }
  
  then_user_is_redirected_to_site_portal = () => {
    cy.window().then((win) => {
      expect(win.document.location.href).to.include("/ghost/#/site");
    });
    cy.get(".gh-nav-menu-details-blog").then(($header) => {
      expect($header).not.to.be.undefined
    });
  };

  then_user_is_redirected_to_site_login = () => {
    cy.wait(2000);
    cy.window().then((win) => {
      expect(win.document.location.href).to.include("/ghost/#/signin");
    });
  };
}
