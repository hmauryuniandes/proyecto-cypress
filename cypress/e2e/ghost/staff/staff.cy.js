import { Login } from "../login/login";
import { Site } from "../site/site";
import { Menu } from "../menu/menu";
import { Staff } from "./staff";

describe('Testing General settings', () => {
  let _siteObject;
  let _loginObject;
  let _generalObject;
  let menuObject;

  it("Test Title & description", () => {
    // GIVEN: usuario autenticado
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();
    _loginObject = new Login();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla Staff
    menuObject = new Menu();
    menuObject.when_user_navigate_to_staff();
    // AND: usuario borra e ingresa el nuevo nombre
    _generalObject = new Staff();
    _generalObject.when_user_click_on_first_user();
    _generalObject.when_user_type_new_fullname();
    // AND: usuario guarda las configuraciones
    _generalObject.when_user_save_settings();

    // THEN: el cambio fue guardado
    _generalObject.then_save_settings();
  });
});