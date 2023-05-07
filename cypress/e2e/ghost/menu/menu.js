export class Menu {

  get postLink() {
    return cy.get('li > a[href="#/posts/"]');
  } 

  get profileDropdown() {
    return cy.get('.gh-nav-bottom > div.pointer');
  } 

  get logoutButton() {
    return cy.get('a[href="#/signout/"]');
  }
  
  get tagLink() {
    return cy.get('li > a[href="#/tags/"]');
  } 

  constructor() {}

  when_user_navigate_to_posts = () => {
    this.postLink.click();
  };

  when_user_expand_profile = () => {
    this.profileDropdown.click();
  };

  when_user_logout = () => {
    this.logoutButton.click();
  };
  when_user_navigate_to_tags = () => {
    this.tagLink.click();
  };
}





