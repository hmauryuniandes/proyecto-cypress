# proyecto-cypress

## prerequisitos

    - Ghost version 3.41.1
    - Node version 14.18.0
    - Cypress version 12.9.0

## instalacion: TDB 

    - Iniciar proyecto usando el comando **cypress open**.
    - Seleccionar pruebas E2E.
    - Seleccionar navegador.
    - En el menu lateral seleccionar la opcion specs, ahi vera todos los escenarios de pruebas.
    - Ejecute uno a uno los escenarios.

## Escenarios de prueba

### Login
    - login exitoso 
    - login fallido 
    - logout (login exitoso)   (Humberto)

### Menu
    - navegar menu
    - volver panel
    - view site

### Posts (Humberto)
    - Crear post (login exitoso, navegar menu)
    - Editar post (login exitoso, navegar menu, Crear post)
    - Eliminar post (login exitoso, navegar menu, Crear post)
   
### Page (Santiago) 
    - Crear Page (login exitoso, navegar menu)
    - Editar Page (login exitoso, navegar menu, Crear Page)
    - Eliminar Page (login exitoso, navegar menu, Crear Page)

### Tag (Monica)
    - Crar un tag (login exitoso, navegar menu)
    - Editar un tag (login exitoso, navegar menu)
    - Asignar un tag a un post (login exitoso, navegar menu, Crar un tag, volver panel, Crear post)
    - Asignar un tag a un Page (login exitoso, navegar menu, Crar un tag, volver panel, Crear Page)

### General (Fredy)
    - cambiar title y description (login exitoso, navegar menu, view site)
    - cambiar Publication icon (login exitoso, navegar menu)
    - cambiar Publication logo (login exitoso, navegar menu, view site)

### Code injection (Fredy)
    - Aplicar un estilos en el header y footer del html (login exitoso, navegar menu, view side)
        <style>
            .nav-home {
                background-color: rosybrown;
            }
        </style>

### Profile 
    - Editar profile, cambia nombre del usuario (login exitoso) (Fredy)
    - Editar profile, cambia password (login exitoso, editar password, login exitoso, restaurar password original) (Monica)

### Configuracion/Diseño 
    - Configurar un nuevo elemento de menu con una pagina nueva (login exitoso, navegar menu, Crear Page, volver panel, view side) (Santiago)
    - Configurar un nuevo elemento de menu con un post nuevo (login exitoso, navegar menu, Crear post, volver panel, view side) (Santiago)
    - Configurar un nuevo elemento de menu secundario con una pagina nueva (login exitoso, navegar menu, Crear Page, volver panel, view side) (Monica)