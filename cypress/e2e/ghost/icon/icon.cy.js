import { Login } from "../login/login";
import { Site } from "../site/site";
import { Menu } from "../menu/menu";
import { Icon } from "./icon";

describe('template spec', () => {
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

    // WHEN: usuario navega a la pantalla setting/General
    menuObject = new Menu();
    menuObject.when_user_navigate_to_general();
    // AND: usuario da click en el boton expand del titulo y la descripción
    _generalObject = new Icon();
    _generalObject.when_user_click_on_upload_image();
    // AND: usuario guarda las configuraciones
    _generalObject.when_user_save_settings();

    // THEN: el post fue publicado
    _generalObject.then_save_settings();
  });
})