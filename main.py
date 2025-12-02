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
    personaje_4()

def on_a_pressed():
    mySprite.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def onMenuPrincipalA(value: str, index: number):
    if index == 0:
        menuPrincipal.close()
        Seleccionar_personajes()
    elif index == 1:
        menuPrincipal.close()
        Seleccionar_mapas()
def Seleccionar_mapas():
    dibujar_mapa_4()
def dibujar_mapa_4():
    tiles.set_current_tilemap(tilemap("""
        mapaPrueba
        """))
    scene.set_background_image(assets.image("""
        mapafodno
        """))
def onMenuPrincipalB(value2: str, index2: number):
    menuPrincipal.close()
    game.splash("saliendo del menu")
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
def personaje_2():
    global mySprite
    mySprite = sprites.create(assets.image("""
        pato
        """), SpriteKind.player)
    animation.run_image_animation(mySprite,
        [img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """)],
        200,
        True)
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
    
    def on_button_pressed(selection, selectedIndex):
        onMenuPrincipalA(selection, selectedIndex)
    menuPrincipal.on_button_pressed(controller.A, on_button_pressed)
    
    
    def on_button_pressed2(selection2, selectedIndex2):
        onMenuPrincipalB(selection2, selectedIndex2)
    menuPrincipal.on_button_pressed(controller.B, on_button_pressed2)
    
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
    animation.run_image_animation(mySprite,
        [img("""
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            """)],
        200,
        True)
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
pantallaActual = ""
menuPrincipal: miniMenu.MenuSprite = None
mySprite: Sprite = None
pantalla_inicio()
Menu_principal()