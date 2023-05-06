import { Site } from "../site/site";
import { Login } from "./login";

const _url = "http://localhost:2368/ghost/#/signin";

describe("Testing Ghost authentication", () => {
  let _siteObject = new Site(_url);
  let _loginObject = new Login();


  it("test successful login", () => {
    // GIVEN: usuario que ingreso al enlace del sitio de ghost
    _siteObject.given_user_visit_ghost();

    // WHEN: usuario ingresa credenciales y da click en el boton login
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // THEN: usuario es redireccionado al panel del sitio y se muestra el titulo del sitio
    _siteObject.then_user_is_redirected_to_site_portal();
  });

  it("test invalid login", () => {
    // GIVEN: usuario que ingreso al enlace del sitio de ghost
    _siteObject.given_user_visit_ghost();
    
    // WHEN: usuario ingresa credenciales invalidas y da click en el boton login
    _loginObject.when_user_enter_invalid_credentials_and_click_on_login();
    
    // THEN: usuario es redireccionado al panel del sitio y se muestra el titulo del sitio
    _loginObject.then_show_invalid_message_and_show_retry();
  });
});
