import { Login } from "../login/login";
import { Menu } from "../menu/menu";
import { Site } from "../site/site";
import { Page } from "./page";


describe("Testing page creation", () => {
  let _siteObject;
  let _loginObject;
  let _pageObject;
  let menuObject;
  beforeEach(()=>{
    // GIVEN: usuario autenticado y navego hasta pages
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();

    _loginObject = new Login();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    menuObject = new Menu();
    menuObject.when_user_navigate_to_pages();
  });
  

  /*it("Test create new page", () => {
    // WHEN: usuario da click en el boton new page
    _pageObject = new Page();
    _pageObject.when_user_click_on_new_page();
    // AND: usuario ingresa el titulo y contenido de la pagina
    _pageObject.when_user_type_title_and_content();
    // AND: usuario publica el pagina
    _pageObject.when_user_publish_page();
    // AND: usuario abre la pagina recien publicada
    //_pageObject.when_user_get_back_to_open_new_page()
    
    // THEN: la pagina fue publicado
    _pageObject.then_page_was_published();
    
  });

  it("Test edit page", ()=>{
     // WHEN: usuario da click en editar pagina
     _pageObject = new Page();
     _pageObject.when_user_click_on_edit_page();
     //THEN: la pagina fue modificada
     _pageObject.then_page_was_modified();
    
  })
  */
  it("Test delete page", ()=>{
    // WHEN: usuario da click en eliminar pagina
    _pageObject = new Page();
    _pageObject.when_user_click_on_delete_page();
    //THEN: la pagina fue eliminada
    _pageObject.then_page_was_deleted();
   
 })

  after(() => {
    cy.wait(2500)
    _pageObject = new Page();
    menuObject = new Menu();
    
    //menuObject.when_user_navigate_to_pages();
    _pageObject.delete_all_pages();

  });
});
