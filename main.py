# Tile de muerte: Multitud 3

def on_overlap_tile(sprite5, location5):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.crowd3, on_overlap_tile)

# Tile de muerte: Esquina verde interior suroeste

def on_overlap_tile2(sprite9, location9):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile2)

def personaje_4():
    global mySprite
    # Crea y configura el personaje Goku
    mySprite = sprites.create(assets.image("""
        Goku0
        """), SpriteKind.player)
    animation.run_image_animation(mySprite,
        assets.animation("""
            GokuAnim
            """),
        200,
        True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
# Eventos de Colisión con Tiles de Muerte
# Tile de muerte: Pantano

def on_overlap_tile3(sprite, location):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile0,
    on_overlap_tile3)

# Tile sin acción: Transparente

def on_overlap_tile4(sprite18, location18):
    pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        transparency16
        """),
    on_overlap_tile4)

# Eventos de Colisión con Tiles de Victoria
# Tile de victoria: Meta personalizada

def on_overlap_tile5(sprite17, location17):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "GAME OVER!")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Meta
        """),
    on_overlap_tile5)

def on_b_pressed():
    # Maneja el botón B: cancelar acciones
    if pantallaActual == "confirmarInicio":
        Seleccionar_mapas()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def Seleccionar_personajes():
    global pantallaActual, itemsPersonajes, menuPersonajes
    # Muestra el menú de selección de personajes
    pantallaActual = "seleccionarPersonaje"
    # Crear los items de personajes
    itemsPersonajes = [miniMenu.create_menu_item("Bart", assets.image("""
            Bart0
            """)),
        miniMenu.create_menu_item("Santa", assets.image("""
            Santa0
            """)),
        miniMenu.create_menu_item("Finn", assets.image("""
            Finn
            """)),
        miniMenu.create_menu_item("Goku", assets.image("""
            Goku0
            """))]
    # Configurar el menú
    menuPersonajes = miniMenu.create_menu_from_array(itemsPersonajes)
    menuPersonajes.set_title("Personajes")
    # Configurar layout vertical (4 filas x 1 columna)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 4)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 1)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 120)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 110)
    # Configurar colores: fondo gris con borde azul
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BACKGROUND_COLOR, 15)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER, 3)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER_COLOR, 8)
    # Centrar el título y los items
    menuPersonajes.set_style_property(miniMenu.StyleKind.DEFAULT_AND_SELECTED,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    menuPersonajes.set_style_property(miniMenu.StyleKind.TITLE,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    # Posicionar y activar eventos de botones
    menuPersonajes.set_position(80, 60)
    menuPersonajes.set_button_events_enabled(True)
    
    def on_button_pressed(selection, selectedIndex):
        onPersonaje_Seleccionado(selection, selectedIndex)
    menuPersonajes.on_button_pressed(controller.A, on_button_pressed)
    
    
    def on_button_pressed2(selection2, selectedIndex2):
        onPersonaje_Cancelar(selection2, selectedIndex2)
    menuPersonajes.on_button_pressed(controller.B, on_button_pressed2)
    
def onPersonaje_Seleccionado(selection3: str, selectedIndex3: number):
    global personajeSeleccionado
    # Guarda el personaje seleccionado y vuelve al menú principal
    personajeSeleccionado = selectedIndex3 + 1
    menuPersonajes.close()
    game.splash("Personaje seleccionado.")
    Menu_principal()
# Tile de muerte: Multitud 2

def on_overlap_tile6(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.crowd2, on_overlap_tile6)

# Tile de muerte: Roca del castillo

def on_overlap_tile7(sprite3, location3):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.castle.rock1, on_overlap_tile7)

def onMapa_Seleccionado(selection4: str, selectedIndex4: number):
    global mapaSeleccionado
    # Guarda el mapa seleccionado e inicia el juego
    mapaSeleccionado = selectedIndex4 + 1
    menuMapas.close()
    game.splash("Mapa seleccionado.")
    iniciar_juego()
def onMapa_Cancelar(selection5: str, selectedIndex5: number):
    # Cancela la selección de mapa y vuelve al menú principal
    menuMapas.close()
    Menu_principal()
# Controladores de Botones

def on_a_pressed():
    # Maneja el botón A: saltar durante el juego o confirmar en otras pantallas
    if pantallaActual == "jugando":
        mySprite.vy = -170
    elif pantallaActual == "confirmarInicio":
        iniciar_juego()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

# Tile de muerte: Pared verde exterior norte

def on_overlap_tile8(sprite11, location11):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_north2,
    on_overlap_tile8)

# Tile de muerte: Esquina verde interior noreste

def on_overlap_tile9(sprite8, location8):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_north_east,
    on_overlap_tile9)

def Seleccionar_mapas():
    global pantallaActual, itemsMapas, menuMapas
    # Muestra el menú de selección de mapas
    pantallaActual = "seleccionarMapa"
    # Crear los items de mapas con sus imágenes preview
    itemsMapas = [miniMenu.create_menu_item("Castillo de Lava", assets.image("""
            icono1
            """)),
        miniMenu.create_menu_item("Reino del Dragón", assets.image("""
            meta2
            """)),
        miniMenu.create_menu_item("Mundo Submarino",
            img("""
                . . . . . . . . b b . . . . . .
                . . . . . . . b 9 1 b . . . . .
                . . b b . . . b 9 9 b . . . . .
                . b 9 1 b . . b b b . . b b b .
                . b 3 9 b . b b b b . b 9 9 1 b
                . b b b b b 9 9 1 1 b b 3 9 9 b
                . . . . b 9 d 9 1 1 b b b b b .
                . . . . b 5 3 9 9 9 b . . . . .
                . . b b b 5 3 3 d 9 b . . . . .
                . b 5 1 b b 5 5 9 b b b b . . .
                . b 5 5 b b b b b b 3 9 9 3 . .
                . b b b b b b b . b 9 1 1 9 b .
                . . . b 5 5 1 b . b 9 1 1 9 b .
                . . . b 5 5 5 b . b 3 9 9 3 b .
                . . . . b b b . . . b b b b . .
                . . . . . . . . . . . . . . . .
                """)),
        miniMenu.create_menu_item("Campo Silvestre",
            img("""
                ....................
                ....................
                .........1..........
                ......661d1.........
                .....177717766......
                ....1d177777677.....
                ..6.717777c77177....
                ...7c77767771d17....
                ...77677766771777...
                ..1777766677777767..
                .1d1776717676777c7..
                .7177661d176777777..
                .77767771777777176..
                .677c77777c7671d17..
                .77777777777767176..
                .667776776777777767.
                ...76776766676766...
                ....................
                ....................
                ....................
                """))]
    # Configurar el menú
    menuMapas = miniMenu.create_menu_from_array(itemsMapas)
    menuMapas.set_title("Mapas")
    # Configurar layout vertical (4 filas x 1 columna)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 4)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 1)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 130)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 115)
    # Configurar colores: fondo gris con borde azul
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BACKGROUND_COLOR, 15)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER, 3)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER_COLOR, 8)
    # Centrar el título y los items
    menuMapas.set_style_property(miniMenu.StyleKind.TITLE,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    menuMapas.set_style_property(miniMenu.StyleKind.DEFAULT_AND_SELECTED,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    # Posicionar y activar eventos de botones
    menuMapas.set_position(80, 60)
    menuMapas.set_button_events_enabled(True)
    
    def on_button_pressed3(selection6, selectedIndex6):
        onMapa_Seleccionado(selection6, selectedIndex6)
    menuMapas.on_button_pressed(controller.A, on_button_pressed3)
    
    
    def on_button_pressed4(selection7, selectedIndex7):
        onMapa_Cancelar(selection7, selectedIndex7)
    menuMapas.on_button_pressed(controller.B, on_button_pressed4)
    
# Función Principal del Juego
def iniciar_juego():
    global pantallaActual
    # Inicia el juego con el mapa y personaje seleccionados
    pantallaActual = "jugando"
    scene.set_background_color(9)
    game.splash("¡Iniciando juego!")
    pause(200)
    # Destruir sprites anteriores antes de crear nuevos
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    # Cargar el mapa según la selección
    if mapaSeleccionado == 1:
        dibujar_mapa_1()
    elif mapaSeleccionado == 2:
        dibujar_mapa_2()
    elif mapaSeleccionado == 3:
        dibujar_mapa_3()
    elif mapaSeleccionado == 4:
        dibujar_mapa_4()
    pause(100)
    # Crear el personaje según la selección
    if personajeSeleccionado == 1:
        personaje_1()
    elif personajeSeleccionado == 2:
        personaje_2()
    elif personajeSeleccionado == 3:
        personaje_3()
    elif personajeSeleccionado == 4:
        personaje_4()
def dibujar_mapa_4():
    # Configura el Mapa 4: Campo Silvestre
    tiles.set_current_tilemap(tilemap("""
        MAPA4_CAMPO
        """))
    scene.set_background_image(assets.image("""
        mapafondo4
        """))
# Callbacks de Menús
def onMenu_Principal_A(selection8: str, selectedIndex8: number):
    # Maneja la selección en el menú principal cuando se presiona A
    if selectedIndex8 == 0:
        # Opción 0: ir a selección de mapas
        menuPrincipal.close()
        Seleccionar_mapas()
    elif selectedIndex8 == 1:
        # Opción 1: ir a selección de personajes
        menuPrincipal.close()
        Seleccionar_personajes()
# Funciones de Menús
def pantalla_inicio():
    # Muestra la pantalla de inicio del juego
    scene.set_background_color(15)
    scene.set_background_image(assets.image("""
        fondo_inicio
        """))
    game.splash("PIXEL DASH")
    effects.confetti.start_screen_effect(100)
# Tile de muerte: Lava

def on_overlap_tile10(sprite14, location14):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile10)

# Tile de muerte: Esquina verde interior noroeste

def on_overlap_tile11(sprite15, location15):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_north_west,
    on_overlap_tile11)

# Tile de muerte: Pared verde exterior este

def on_overlap_tile12(sprite12, location12):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_outer_east2,
    on_overlap_tile12)

def dibujar_mapa_2():
    # Configura el Mapa 2: Reino del Dragón
    tiles.set_current_tilemap(tilemap("""
        MAPA2_DRAGON
        """))
    scene.set_background_image(assets.image("""
        fondoMapa2
        """))
def onMenu_Principal_B(selection9: str, selectedIndex9: number):
    # Maneja cuando se presiona B en el menú principal para salir
    menuPrincipal.close()
    game.splash("Saliendo del menú")
def personaje_2():
    global mySprite
    # Crea y configura el personaje Santa
    mySprite = sprites.create(assets.image("""
        Santa0
        """), SpriteKind.player)
    animation.run_image_animation(mySprite, assets.animation("""
        Santa
        """), 200, True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
# Tile de muerte: Pared púrpura exterior norte

def on_overlap_tile13(sprite13, location13):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_north2,
    on_overlap_tile13)

# Tile de muerte: Pantano 3

def on_overlap_tile14(sprite7, location7):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile3,
    on_overlap_tile14)

# Tile de muerte: Pared púrpura este

def on_overlap_tile15(sprite4, location4):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.purple_outer_east2,
    on_overlap_tile15)

# Tile de muerte: Coral

def on_overlap_tile16(sprite16, location16):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.coral0, on_overlap_tile16)

# Tile de muerte: Tile del bosque

def on_overlap_tile17(sprite10, location10):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.builtin.forest_tiles10,
    on_overlap_tile17)

# Funciones de Mapas
def dibujar_mapa_1():
    # Configura el Mapa 1: Castillo de Lava
    tiles.set_current_tilemap(tilemap("""
        MAPA1_LAVA
        """))
    scene.set_background_image(assets.image("""
        fondo_castillo
        """))
def onPersonaje_Cancelar(selection10: str, selectedIndex10: number):
    # Cancela la selección de personaje y vuelve al menú principal
    menuPersonajes.close()
    Menu_principal()
def Menu_principal():
    global pantallaActual, items, menuPrincipal
    # Crea el menú principal con las opciones de Personajes y Mapas
    scene.set_background_color(15)
    pantallaActual = "menuPrincipal"
    # Crear los items del menú
    items = [miniMenu.create_menu_item("Personajes", assets.image("""
            personaje
            """)),
        miniMenu.create_menu_item("Mapas", assets.image("""
            MapaPortada
            """))]
    # Configurar el menú
    menuPrincipal = miniMenu.create_menu_from_array(items)
    menuPrincipal.set_title("Menú Principal")
    # Configurar layout horizontal (1 fila x 2 columnas)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 1)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 2)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 140)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 50)
    # Configurar colores y bordes
    menuPrincipal.set_style_property(miniMenu.StyleKind.DEFAULT,
        miniMenu.StyleProperty.BACKGROUND,
        12)
    menuPrincipal.set_style_property(miniMenu.StyleKind.DEFAULT, miniMenu.StyleProperty.BORDER, 2)
    menuPrincipal.set_style_property(miniMenu.StyleKind.DEFAULT,
        miniMenu.StyleProperty.BORDER_COLOR,
        8)
    menuPrincipal.set_style_property(miniMenu.StyleKind.TITLE,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    # Posicionar y activar eventos de botones
    menuPrincipal.set_position(80, 60)
    menuPrincipal.set_button_events_enabled(True)
    
    def on_button_pressed5(selection11, selectedIndex11):
        onMenu_Principal_A(selection11, selectedIndex11)
    menuPrincipal.on_button_pressed(controller.A, on_button_pressed5)
    
    
    def on_button_pressed6(selection12, selectedIndex12):
        onMenu_Principal_B(selection12, selectedIndex12)
    menuPrincipal.on_button_pressed(controller.B, on_button_pressed6)
    
def dibujar_mapa_3():
    # Configura el Mapa 3: Mundo Submarino
    tiles.set_current_tilemap(tilemap("""
        MAPA3_AGUA
        """))
    scene.set_background_image(assets.image("""
        fondoMapa3
        """))
# Tile de victoria: Cristal rojo

def on_overlap_tile18(sprite19, location19):
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "GAME OVER!")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile18)

# Funciones de Personajes
def personaje_1():
    global mySprite
    # Crea y configura el personaje Bart
    mySprite = sprites.create(assets.image("""
        Bart0
        """), SpriteKind.player)
    animation.run_image_animation(mySprite, assets.animation("""
        Bart
        """), 200, True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
# Tile de muerte: Esquina verde interior sureste

def on_overlap_tile19(sprite6, location6):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_east,
    on_overlap_tile19)

def personaje_3():
    global mySprite
    # Crea y configura el personaje Finn
    mySprite = sprites.create(assets.image("""
        Finn
        """), SpriteKind.player)
    animation.run_image_animation(mySprite,
        assets.animation("""
            finnAni
            """),
        200,
        True)
    mySprite.ay = 400
    controller.move_sprite(mySprite, 100, 0)
    scene.camera_follow_sprite(mySprite)
items: List[miniMenu.MenuItem] = []
menuPrincipal: miniMenu.MenuSprite = None
itemsMapas: List[miniMenu.MenuItem] = []
menuMapas: miniMenu.MenuSprite = None
menuPersonajes: miniMenu.MenuSprite = None
itemsPersonajes: List[miniMenu.MenuItem] = []
mySprite: Sprite = None
mapaSeleccionado = 0
personajeSeleccionado = 0
pantallaActual = ""
# Inicialización del Juego
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()