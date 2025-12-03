def personaje_4():
    global mySprite
    mySprite = sprites.create(assets.image("""
        pato
        """), SpriteKind.player)
    animation.run_image_animation(mySprite,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . b 5 5 b . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . b b b b b 5 5 5 5 5 5 5 b . .
                . b d 5 b 5 5 5 5 5 5 5 5 b . .
                . . b 5 5 b 5 d 1 f 5 d 4 f . .
                . . b d 5 5 b 1 f f 5 4 4 c . .
                b b d b 5 5 5 d f b 4 4 4 4 b .
                b d d c d 5 5 b 5 4 4 4 4 4 4 b
                c d d d c c b 5 5 5 5 5 5 5 b .
                c b d d d d d 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . b b b b b 5 5 5 5 5 5 5 b . .
                . b d 5 b 5 5 5 5 5 5 5 5 b . .
                . . b 5 5 b 5 d 1 f 5 d 4 f . .
                . . b d 5 5 b 1 f f 5 4 4 c . .
                b b d b 5 5 5 d f b 4 4 4 4 4 b
                b d d c d 5 5 b 5 4 4 4 4 4 b .
                c d d d c c b 5 5 5 5 5 5 5 b .
                c b d d d d d 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . . . . b c . . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 5 d f . .
                . . . . b 5 5 1 f f 5 d 4 c . .
                . . . . b 5 5 d f b d d 4 4 . .
                b d d d b b d 5 5 5 4 4 4 4 4 b
                b b d 5 5 5 b 5 5 4 4 4 4 4 b .
                b d c 5 5 5 5 d 5 5 5 5 5 b . .
                c d d c d 5 5 b 5 5 5 5 5 5 b .
                c b d d c c b 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 d 4 c . .
                . . . . b 5 5 1 f f d d 4 4 4 b
                . . . . b 5 5 d f b 4 4 4 4 b .
                . . . b d 5 5 5 5 4 4 4 4 b . .
                . . b d d 5 5 5 5 5 5 5 5 b . .
                . b d d d d 5 5 5 5 5 5 5 5 b .
                b d d d b b b 5 5 5 5 5 5 5 b .
                c d d b 5 5 d c 5 5 5 5 5 5 b .
                c b b d 5 d c d 5 5 5 5 5 5 b .
                . b 5 5 b c d d 5 5 5 5 5 d b .
                b b c c c d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 d 4 c . .
                . . . . b 5 5 1 f f d d 4 4 4 b
                . . . . b 5 5 d f b 4 4 4 4 b .
                . . . b d 5 5 5 5 4 4 4 4 b . .
                . b b d d d 5 5 5 5 5 5 5 b . .
                b d d d b b b 5 5 5 5 5 5 5 b .
                c d d b 5 5 d c 5 5 5 5 5 5 b .
                c b b d 5 d c d 5 5 5 5 5 5 b .
                c b 5 5 b c d d 5 5 5 5 5 5 b .
                b b c c c d d d 5 5 5 5 5 d b .
                . . . . c c d d d 5 5 5 b b . .
                . . . . . . c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 5 d f . .
                . . . . b 5 5 1 f f 5 d 4 c . .
                . . . . b 5 5 d f b d d 4 4 . .
                . b b b d 5 5 5 5 5 4 4 4 4 4 b
                b d d d b b d 5 5 4 4 4 4 4 b .
                b b d 5 5 5 b 5 5 5 5 5 5 b . .
                c d c 5 5 5 5 d 5 5 5 5 5 5 b .
                c b d c d 5 5 b 5 5 5 5 5 5 b .
                . c d d c c b d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
def Seleccionar_personajes():
    global pantallaActual, itemsPersonajes, menuPersonajes
    pantallaActual = "seleccionarPersonaje"
    itemsPersonajes = [miniMenu.create_menu_item("1",
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . 3 3 3 3 3 3 3 3 3 3
                . 3 3 3 3 3 . . . . . . . . . 3
                3 . . . . . . . . . . . . . . 3
                . . . . . . . 3 . . . . . . . 3
                . . . . . . . 3 . . . . . . . 3
                . . . . . . . 3 . . . . . . 3 3
                . . . . . . . . 3 3 . . 3 3 . .
                . . . . . . . . . . 3 3 . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)),
        miniMenu.create_menu_item("2",
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . 3 3 3 3 3 3 3 3 3 3 3 3 3 .
                . . . . . . . . . . . . . . 3 .
                . . . . . . . . 3 3 . . . . 3 .
                . . . . . . . . 3 . . . . . 3 .
                . . . . . . . . 3 3 3 3 . . 3 .
                . . . . . . . . . . . . 3 3 3 .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """)),
        miniMenu.create_menu_item("3",
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . 3 3 3 3 3 3 3 . . . . . . . .
                . . . . . . . . 3 3 3 3 . . . .
                . . . 3 . . . . . . . . 3 3 3 .
                . . . 3 . . . . . . . . . . 3 3
                . . . 3 3 . . . . . . . . . . 3
                . . . . 3 3 . . . . . . . . . 3
                . . . . . 3 3 3 . . . . . . . 3
                . . . . . . . . 3 3 3 3 3 3 3 .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                """))]
    menuPersonajes = miniMenu.create_menu_from_array(itemsPersonajes)
    menuPersonajes.set_title("Personajes")
    menuPersonajes.set_button_events_enabled(True)
    
    def on_button_pressed(selection, selectedIndex):
        onPersonaje_Seleccionado(selection, selectedIndex)
    menuPersonajes.on_button_pressed(controller.A, on_button_pressed)
    
    
    def on_button_pressed2(selection2, selectedIndex2):
        onPersonaje_Cancelar(selection2, selectedIndex2)
    menuPersonajes.on_button_pressed(controller.B, on_button_pressed2)
    
def onPersonaje_Seleccionado(selection3: str, selectedIndex3: number):
    global personajeSeleccionado
    personajeSeleccionado = selectedIndex3 + 1
    menuPersonajes.close()
    game.splash("personaje seleccionado")
    Menu_principal()

def on_a_pressed():
    mySprite.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def Seleccionar_mapas():
    dibujar_mapa_4()
def dibujar_mapa_4():
    tiles.set_current_tilemap(tilemap("""
        mapaPrueba
        """))
    scene.set_background_image(assets.image("""
        mapafodno
        """))
def onMenu_Principal_A(selection4: str, selectedIndex4: number):
    if selectedIndex4 == 0:
        menuPrincipal.close()
        Seleccionar_personajes()
    elif selectedIndex4 == 1:
        menuPrincipal.close()
        Seleccionar_mapas()
def pantalla_inicio():
    scene.set_background_color(15)
    game.splash("PIXEL DASH")
    effects.confetti.start_screen_effect(100)
def dibujar_mapa_2():
    tiles.set_current_tilemap(tilemap("""
        mapaPrueba
        """))
    scene.set_background_image(assets.image("""
        mapafodno
        """))
def onMenu_Principal_B(selection5: str, selectedIndex5: number):
    menuPrincipal.close()
    game.splash("saliendo del menu")
def personaje_2():
    global mySprite
    mySprite = sprites.create(assets.image("""
        pato
        """), SpriteKind.player)
    animation.run_image_animation(mySprite, assets.animation("""
        Santa
        """), 200, True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
def dibujar_mapa_1():
    tiles.set_current_tilemap(tilemap("""
        mapaPrueba
        """))
    scene.set_background_image(assets.image("""
        mapafodno
        """))
def onPersonaje_Cancelar(selection6: str, selectedIndex6: number):
    menuPersonajes.close()
    Menu_principal()
def Menu_principal():
    global pantallaActual, items, menuPrincipal
    scene.set_background_color(15)
    pantallaActual = "menuPrincipal"
    items = [miniMenu.create_menu_item("Personajes",
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . . f f f . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . f f f f . . . f . . .
                . . f f f f . f . f f f f . . .
                . . . . . . . f . . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . . . f . . . . . . . .
                . . . . . . f f f f . . . . . .
                . . . . . f f . . f . . . . . .
                . . . . . f . . . f f . . . . .
                . . . . f f . . . . f f . . . .
                . . . . f . . . . . . f . . . .
                """)),
        miniMenu.create_menu_item("Mapas",
            img("""
                8 . . . . . . . . . . . . 8 8 .
                8 8 8 8 8 . . . . . 8 . . 8 . .
                . . . . . . . . . . 8 8 8 . . .
                . . . . . . . . . . . 8 8 . . .
                . 7 7 7 7 7 7 7 . . . . . . . .
                . . . . . . . 7 7 7 . . . 7 7 .
                . . . . . . . . . 7 7 7 7 7 . .
                . . . . . . . . . . . . . . . 7
                7 7 7 7 . . . . . . . . 7 7 7 7
                . . . 7 7 7 7 7 7 7 . 7 7 . . .
                . . . . . . . . . . 7 7 . . . .
                7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7
                . . . . . . . . . . . . . . . .
                7 7 7 7 7 7 . . . . . . . 7 7 7
                . . . . . 7 7 7 7 7 7 7 7 7 . .
                . . . . . . . . . . . . . . . .
                """))]
    menuPrincipal = miniMenu.create_menu_from_array(items)
    menuPrincipal.set_title("Menu Principal")
    menuPrincipal.set_button_events_enabled(True)
    
    def on_button_pressed3(selection7, selectedIndex7):
        onMenu_Principal_A(selection7, selectedIndex7)
    menuPrincipal.on_button_pressed(controller.A, on_button_pressed3)
    
    
    def on_button_pressed4(selection8, selectedIndex8):
        onMenu_Principal_B(selection8, selectedIndex8)
    menuPrincipal.on_button_pressed(controller.B, on_button_pressed4)
    
def dibujar_mapa_3():
    tiles.set_current_tilemap(tilemap("""
        mapaPrueba
        """))
    scene.set_background_image(assets.image("""
        mapafodno
        """))
def personaje_1():
    global mySprite
    mySprite = sprites.create(assets.image("""
        pato
        """), SpriteKind.player)
    animation.run_image_animation(mySprite, assets.animation("""
        Bart
        """), 200, True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
def personaje_3():
    global mySprite
    mySprite = sprites.create(assets.image("""
        pato
        """), SpriteKind.player)
    animation.run_image_animation(mySprite,
        [img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . .
                . . . . . . . . . b 5 5 b . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . b b b b b 5 5 5 5 5 5 5 b . .
                . b d 5 b 5 5 5 5 5 5 5 5 b . .
                . . b 5 5 b 5 d 1 f 5 d 4 f . .
                . . b d 5 5 b 1 f f 5 4 4 c . .
                b b d b 5 5 5 d f b 4 4 4 4 b .
                b d d c d 5 5 b 5 4 4 4 4 4 4 b
                c d d d c c b 5 5 5 5 5 5 5 b .
                c b d d d d d 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . . . . . . .
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . b b b b b 5 5 5 5 5 5 5 b . .
                . b d 5 b 5 5 5 5 5 5 5 5 b . .
                . . b 5 5 b 5 d 1 f 5 d 4 f . .
                . . b d 5 5 b 1 f f 5 4 4 c . .
                b b d b 5 5 5 d f b 4 4 4 4 4 b
                b d d c d 5 5 b 5 4 4 4 4 4 b .
                c d d d c c b 5 5 5 5 5 5 5 b .
                c b d d d d d 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . . . . b c . . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 5 d f . .
                . . . . b 5 5 1 f f 5 d 4 c . .
                . . . . b 5 5 d f b d d 4 4 . .
                b d d d b b d 5 5 5 4 4 4 4 4 b
                b b d 5 5 5 b 5 5 4 4 4 4 4 b .
                b d c 5 5 5 5 d 5 5 5 5 5 b . .
                c d d c d 5 5 b 5 5 5 5 5 5 b .
                c b d d c c b 5 5 5 5 5 5 5 b .
                . c d d d d d d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 d 4 c . .
                . . . . b 5 5 1 f f d d 4 4 4 b
                . . . . b 5 5 d f b 4 4 4 4 b .
                . . . b d 5 5 5 5 4 4 4 4 b . .
                . . b d d 5 5 5 5 5 5 5 5 b . .
                . b d d d d 5 5 5 5 5 5 5 5 b .
                b d d d b b b 5 5 5 5 5 5 5 b .
                c d d b 5 5 d c 5 5 5 5 5 5 b .
                c b b d 5 d c d 5 5 5 5 5 5 b .
                . b 5 5 b c d d 5 5 5 5 5 d b .
                b b c c c d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 d 4 c . .
                . . . . b 5 5 1 f f d d 4 4 4 b
                . . . . b 5 5 d f b 4 4 4 4 b .
                . . . b d 5 5 5 5 4 4 4 4 b . .
                . b b d d d 5 5 5 5 5 5 5 b . .
                b d d d b b b 5 5 5 5 5 5 5 b .
                c d d b 5 5 d c 5 5 5 5 5 5 b .
                c b b d 5 d c d 5 5 5 5 5 5 b .
                c b 5 5 b c d d 5 5 5 5 5 5 b .
                b b c c c d d d 5 5 5 5 5 d b .
                . . . . c c d d d 5 5 5 b b . .
                . . . . . . c c c c c b b . . .
                """),
            img("""
                . . . . . . . . . . b 5 b . . .
                . . . . . . . . . b 5 b . . . .
                . . . . . . b b b b b b . . . .
                . . . . . b b 5 5 5 5 5 b . . .
                . . . . b b 5 d 1 f 5 5 d f . .
                . . . . b 5 5 1 f f 5 d 4 c . .
                . . . . b 5 5 d f b d d 4 4 . .
                . b b b d 5 5 5 5 5 4 4 4 4 4 b
                b d d d b b d 5 5 4 4 4 4 4 b .
                b b d 5 5 5 b 5 5 5 5 5 5 b . .
                c d c 5 5 5 5 d 5 5 5 5 5 5 b .
                c b d c d 5 5 b 5 5 5 5 5 5 b .
                . c d d c c b d 5 5 5 5 5 d b .
                . . c b d d d d d 5 5 5 b b . .
                . . . c c c c c c c c b b . . .
                . . . . . . . . . . . . . . . .
                """)],
        500,
        True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
items: List[miniMenu.MenuItem] = []
menuPrincipal: miniMenu.MenuSprite = None
personajeSeleccionado = 0
menuPersonajes: miniMenu.MenuSprite = None
itemsPersonajes: List[miniMenu.MenuItem] = []
pantallaActual = ""
mySprite: Sprite = None
pantalla_inicio()
Menu_principal()