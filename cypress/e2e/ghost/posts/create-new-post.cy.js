import { Login } from "../login/login";
import { Menu } from "../menu/menu";
import { Site } from "../site/site";
import { Post } from "./post";


describe("Testing post creation", () => {
  let _siteObject;
  let _loginObject;
  let _postObject;
  let menuObject;


  it("Test create new post", () => {
    // GIVEN: usuario autenticado
    _siteObject = new Site("http://localhost:2368/ghost/#/signin");
    _siteObject.given_user_visit_ghost();
    _loginObject = new Login();
    _loginObject.when_user_enter_credentials_and_click_on_login();

    // WHEN: usuario navega a la pantalla posts
    menuObject = new Menu();
    menuObject.when_user_navigate_to_posts();
    // AND: usuario da click en el boton new post
    _postObject = new Post();
    _postObject.when_user_click_on_new_post();
    // AND: usuario ingresa el titulo y contenido del post
    _postObject.when_user_type_title_and_content();
    // AND: usuario publica el post
    _postObject.when_user_publish_post();

    // THEN: el post fue publicado
    _postObject.then_post_was_published();
    _postObject.when_user_delete_current_post();
  });
});
