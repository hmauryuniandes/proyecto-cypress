import { Site } from "../site/site";
import { Login } from "./login";

describe("Testing Ghost authentication", () => {
  let _siteObject;
  let _loginObject;


  it("test successful login", () => {
    // GIVEN: usuario que ingreso al enlace del sitio de ghost
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();

    // WHEN: usuario ingresa credenciales y da click en el boton login
    _loginObject = new Login();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // THEN: usuario es redireccionado al panel del sitio y se muestra el titulo del sitio
    _siteObject.then_user_is_redirected_to_site_portal();
  });

  it("test invalid login", () => {
    // GIVEN: usuario que ingreso al enlace del sitio de ghost
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();
    
    // WHEN: usuario ingresa credenciales invalidas y da click en el boton login
    _loginObject = new Login();
    _loginObject.when_user_enter_invalid_credentials_and_click_on_login();
    
    // THEN: usuario es redireccionado al panel del sitio y se muestra el titulo del sitio
    _loginObject.then_show_invalid_message_and_show_retry();
  });
});
