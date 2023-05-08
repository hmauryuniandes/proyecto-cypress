import { Login } from "../login/login";
import { Site } from "../site/site";
import { Menu } from "../menu/menu";
import { Staff } from "./staff";

describe('Testing General settings', () => {
  let _siteObject;
  let _loginObject;
  let _staffObject;
  let _menuObject;

  beforeEach(() => {
    _siteObject = new Site();
    _loginObject = new Login();
    _staffObject = new Staff();
    _menuObject = new Menu();
  })

  afterEach(() => {
    _staffObject.when_user_type_old_fullname();
    _staffObject.when_user_save_settings();
  })

  it("Test Title & description", () => {
    // GIVEN: usuario autenticado
    _siteObject.given_user_visit_ghost();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla Staff
    _menuObject.when_user_navigate_to_staff();
    // AND: usuario borra e ingresa el nuevo nombre
    _staffObject.when_user_click_on_first_user();
    _staffObject.when_user_type_new_fullname();
    // AND: usuario guarda las configuraciones
    _staffObject.when_user_save_settings();

    // THEN: el cambio fue guardado
    _staffObject.then_save_settings();
  });
});