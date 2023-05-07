const username = "f.alarconf@uniandes.edu.co";
const invalidUsername = "xxx@xxx.com";
const password = "fredy12345";
const invalidPassword = "123";
const retryText = "Retry";

export class Login {
  username;
  password;
  loginButton;

  constructor() {
    this.username = cy.get('input[name="identification"]');
    this.password = cy.get('input[name="password"]');
    this.loginButton = cy.get("#ember12");
  }

  when_user_enter_credentials_and_click_on_login = () => {
    this.username.type(username);
    this.password.type(password);
    this.loginButton.click();
    cy.wait(1000);
  };

  when_user_enter_invalid_credentials_and_click_on_login = () => {
    cy.get("#login").within(() => {
        this.username.type(invalidUsername);
        this.password.type(invalidPassword);
        this.loginButton.click();
    });
    cy.wait(1000);
  };

  then_show_invalid_message_and_show_retry = () => {
    cy.get("#ember12 > span").then(($span) => {
      expect($span[0].innerText).to.equal(retryText);
    });

    cy.get("p.main-error").then(($error) => {
      expect($error).to.not.be.undefined;
    });
  };
}
