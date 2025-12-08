# -----------------------------
#  TILES DE MUERTE / VICTORIA
#  Y MANEJO DE PERSONAJES/MAPAS
#  PIXEL DASH
# -----------------------------

# Tile de muerte: Multitud 3
# Si el jugador pisa este tile, la partida termina con derrota.
def on_overlap_tile(sprite5, location5):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.crowd3, on_overlap_tile)

# Tile de muerte: Esquina verde interior suroeste
# Zona de colisión letal en el mapa de mazmorra verde.
def on_overlap_tile2(sprite9, location9):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_inner_south_west,
    on_overlap_tile2)

# -----------------------------
#  PERSONAJE 4 (GOKU)
# -----------------------------
def personaje_4():
    global mySprite
    # Crea y configura el personaje Goku:
    #  - Usa la imagen base Goku0
    #  - Le aplica la animación GokuAnim en bucle
    #  - Activa la gravedad y el movimiento horizontal
    #  - Hace que la cámara siga al personaje
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

# -----------------------------
#  TILES DE MUERTE (GENERALES)
# -----------------------------
# Eventos de Colisión con Tiles de Muerte
# Tile de muerte: Pantano
def on_overlap_tile3(sprite, location):
    # Si toca pantano, derrota inmediata.
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player,
    sprites.swamp.swamp_tile0,
    on_overlap_tile3)

# Tile sin acción: Transparente
# Tile "placeholder" que no hace nada cuando se pisa.
def on_overlap_tile4(sprite18, location18):
    pass
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        transparency16
        """),
    on_overlap_tile4)

# -----------------------------
#  TILES DE VICTORIA
# -----------------------------
# Tile de victoria: Meta personalizada
def on_overlap_tile5(sprite17, location17):
    # Al pisar la meta:
    #  - Marca victoria
    #  - Lanza confeti
    #  - Muestra mensaje final
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "GAME OVER!")
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        Meta
        """),
    on_overlap_tile5)

# -----------------------------
#  MENÚ DE SELECCIÓN DE PERSONAJES
# -----------------------------
def Seleccionar_personajes():
    global pantallaActual, itemsPersonajes, menuPersonajes
    # Muestra el menú de selección de personajes.
    # Cambia el estado de pantalla para que los botones se interpreten correctamente.
    pantallaActual = "seleccionarPersonaje"
    # Crear los items de personajes con su icono correspondiente.
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
    # Configurar el menú de personajes.
    menuPersonajes = miniMenu.create_menu_from_array(itemsPersonajes)
    menuPersonajes.set_title("Personajes")
    # Layout vertical (4 filas x 1 columna).
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 4)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 1)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 120)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 110)
    # Colores y borde (fondo gris, borde azul).
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BACKGROUND_COLOR, 15)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER, 3)
    menuPersonajes.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER_COLOR, 8)
    # Centrar el título y los items.
    menuPersonajes.set_style_property(miniMenu.StyleKind.DEFAULT_AND_SELECTED,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    menuPersonajes.set_style_property(miniMenu.StyleKind.TITLE,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    # Posicionar el menú y activar eventos de botones.
    menuPersonajes.set_position(80, 60)
    menuPersonajes.set_button_events_enabled(True)
    
    # Botón A -> confirmar personaje seleccionado.
    def on_button_pressed(selection, selectedIndex):
        onPersonaje_Seleccionado(selection, selectedIndex)
    menuPersonajes.on_button_pressed(controller.A, on_button_pressed)
    
    # Botón B -> cancelar y volver al menú principal.
    def on_button_pressed2(selection2, selectedIndex2):
        onPersonaje_Cancelar(selection2, selectedIndex2)
    menuPersonajes.on_button_pressed(controller.B, on_button_pressed2)

# Callback cuando el jugador elige un personaje en el menú.
def onPersonaje_Seleccionado(selection3: str, selectedIndex3: number):
    global personajeSeleccionado
    # Guarda el personaje seleccionado (1–4) y regresa al menú principal.
    personajeSeleccionado = selectedIndex3 + 1
    menuPersonajes.close()
    game.splash("Personaje seleccionado.")
    Menu_principal()

# -----------------------------
#  OTROS TILES DE MUERTE
# -----------------------------
# Tile de muerte: Multitud 2
def on_overlap_tile6(sprite2, location2):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.builtin.crowd2, on_overlap_tile6)

# Tile de muerte: Roca del castillo
def on_overlap_tile7(sprite3, location3):
    game.game_over(False)
scene.on_overlap_tile(SpriteKind.player, sprites.castle.rock1, on_overlap_tile7)

# -----------------------------
#  CALLBACKS MENÚ DE MAPAS
# -----------------------------
def onMapa_Seleccionado(selection4: str, selectedIndex4: number):
    global mapaSeleccionado
    # Guarda el mapa seleccionado (1–4) e inicia el juego directamente.
    mapaSeleccionado = selectedIndex4 + 1
    menuMapas.close()
    game.splash("Mapa seleccionado.")
    iniciar_juego()

def onMapa_Cancelar(selection5: str, selectedIndex5: number):
    # Cancela la selección de mapa y vuelve al menú principal.
    menuMapas.close()
    Menu_principal()

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

# -----------------------------
#  MENÚ DE SELECCIÓN DE MAPAS
# -----------------------------
def Seleccionar_mapas():
    global pantallaActual, itemsMapas, menuMapas
    # Muestra el menú de selección de mapas.
    pantallaActual = "seleccionarMapa"
    # Crear los items de mapas con sus imágenes preview.
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
    # Configurar el menú de mapas.
    menuMapas = miniMenu.create_menu_from_array(itemsMapas)
    menuMapas.set_title("Mapas")
    # Layout vertical (4 filas x 1 columna).
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 4)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 1)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 130)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 115)
    # Colores: fondo gris con borde azul.
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BACKGROUND_COLOR, 15)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER, 3)
    menuMapas.set_menu_style_property(miniMenu.MenuStyleProperty.BORDER_COLOR, 8)
    # Centrar el título y los items.
    menuMapas.set_style_property(miniMenu.StyleKind.TITLE,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    menuMapas.set_style_property(miniMenu.StyleKind.DEFAULT_AND_SELECTED,
        miniMenu.StyleProperty.ALIGNMENT,
        1)
    # Posicionar y activar eventos de botones.
    menuMapas.set_position(80, 60)
    menuMapas.set_button_events_enabled(True)
    
    # Botón A -> confirmar mapa seleccionado.
    def on_button_pressed3(selection6, selectedIndex6):
        onMapa_Seleccionado(selection6, selectedIndex6)
    menuMapas.on_button_pressed(controller.A, on_button_pressed3)
    
    # Botón B -> cancelar selección y volver al menú principal.
    def on_button_pressed4(selection7, selectedIndex7):
        onMapa_Cancelar(selection7, selectedIndex7)
    menuMapas.on_button_pressed(controller.B, on_button_pressed4)

# -----------------------------
#  CONTROLADORES DE BOTONES
# -----------------------------
def on_a_pressed():
    # Botón A:
    #  - Si estamos jugando -> salto.
    #  - Si estamos en pantalla de confirmación -> iniciar juego.
    if pantallaActual == "jugando":
        mySprite.vy = -190
    elif pantallaActual == "confirmarInicio":
        iniciar_juego()
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    # Botón B:
    #  - Si estamos confirmando inicio -> volver a seleccionar mapas.
    if pantallaActual == "confirmarInicio":
        Seleccionar_mapas()
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

# -----------------------------
#  FUNCIÓN PRINCIPAL DEL JUEGO
# -----------------------------
def iniciar_juego():
    global pantallaActual
    # Inicia el juego con el mapa y personaje seleccionados.
    pantallaActual = "jugando"
    scene.set_background_color(9)
    game.splash("¡Iniciando juego!")
    pause(200)
    # Destruir sprites anteriores antes de crear nuevos.
    sprites.destroy_all_sprites_of_kind(SpriteKind.player)
    # Cargar el mapa según la selección del jugador.
    if mapaSeleccionado == 1:
        dibujar_mapa_1()
    elif mapaSeleccionado == 2:
        dibujar_mapa_2()
    elif mapaSeleccionado == 3:
        dibujar_mapa_3()
    elif mapaSeleccionado == 4:
        dibujar_mapa_4()
    pause(100)
    # Crear el personaje según la selección.
    if personajeSeleccionado == 1:
        personaje_1()
    elif personajeSeleccionado == 2:
        personaje_2()
    elif personajeSeleccionado == 3:
        personaje_3()
    elif personajeSeleccionado == 4:
        personaje_4()

# -----------------------------
#  MAPA 4 – CAMPO SILVESTRE
# -----------------------------
def dibujar_mapa_4():
    # Configura el Mapa 4: Campo Silvestre
    tiles.set_current_tilemap(tilemap("""
        MAPA4_CAMPO
        """))
    scene.set_background_image(assets.image("""
        mapafondo4
        """))

# -----------------------------
#  CALLBACKS MENÚ PRINCIPAL
# -----------------------------
def onMenu_Principal_A(selection8: str, selectedIndex8: number):
    # Maneja la selección en el menú principal cuando se presiona A.
    if selectedIndex8 == 0:
        # Opción 0: ir a selección de mapas.
        menuPrincipal.close()
        Seleccionar_mapas()
    elif selectedIndex8 == 1:
        # Opción 1: ir a selección de personajes.
        menuPrincipal.close()
        Seleccionar_personajes()

# -----------------------------
#  PANTALLA DE INICIO
# -----------------------------
def pantalla_inicio():
    # Muestra la pantalla de inicio del juego con título y efecto de confeti.
    scene.set_background_color(15)
    scene.set_background_image(assets.image("""
        fondo_inicio
        """))
    game.splash("PIXEL DASH")
    effects.confetti.start_screen_effect(100)

# -----------------------------
#  MÁS TILES DE MUERTE
# -----------------------------
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

# -----------------------------
#  MAPA 2 – REINO DEL DRAGÓN
# -----------------------------
def dibujar_mapa_2():
    # Configura el Mapa 2: Reino del Dragón
    tiles.set_current_tilemap(tilemap("""
        MAPA2_DRAGON
        """))
    scene.set_background_image(assets.image("""
        fondoMapa2
        """))

def onMenu_Principal_B(selection9: str, selectedIndex9: number):
    # Maneja cuando se presiona B en el menú principal para salir del menú.
    menuPrincipal.close()
    game.splash("Saliendo del menú")

# -----------------------------
#  PERSONAJE 2 – SANTA
# -----------------------------
def personaje_2():
    global mySprite
    # Crea y configura el personaje Santa:
    #  - Imagen base Santa0
    #  - Animación Santa en bucle
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

# -----------------------------
#  MAPA 1 – CASTILLO DE LAVA
# -----------------------------
def dibujar_mapa_1():
    # Configura el Mapa 1: Castillo de Lava
    tiles.set_current_tilemap(tilemap("""
        MAPA1_LAVA
        """))
    scene.set_background_image(assets.image("""
        fondo_castillo
        """))

# Callback de cancelar selección de personaje.
def onPersonaje_Cancelar(selection10: str, selectedIndex10: number):
    # Cancela la selección de personaje y vuelve al menú principal.
    menuPersonajes.close()
    Menu_principal()

# -----------------------------
#  MENÚ PRINCIPAL
# -----------------------------
def Menu_principal():
    global pantallaActual, items, menuPrincipal
    # Crea el menú principal con las opciones de Personajes y Mapas.
    scene.set_background_color(15)
    pantallaActual = "menuPrincipal"
    # Crear los items del menú.
    items = [miniMenu.create_menu_item("Personajes", assets.image("""
            personaje
            """)),
        miniMenu.create_menu_item("Mapas", assets.image("""
            MapaPortada
            """))]
    # Configurar el menú principal.
    menuPrincipal = miniMenu.create_menu_from_array(items)
    menuPrincipal.set_title("Menú Principal")
    # Layout horizontal (1 fila x 2 columnas).
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.ROWS, 1)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.COLUMNS, 2)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.WIDTH, 140)
    menuPrincipal.set_menu_style_property(miniMenu.MenuStyleProperty.HEIGHT, 50)
    # Configurar colores y bordes.
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
    # Posicionar y activar eventos de botones.
    menuPrincipal.set_position(80, 60)
    menuPrincipal.set_button_events_enabled(True)
    
    # Botón A -> navegar a mapas/personajes según opción.
    def on_button_pressed5(selection11, selectedIndex11):
        onMenu_Principal_A(selection11, selectedIndex11)
    menuPrincipal.on_button_pressed(controller.A, on_button_pressed5)
    
    # Botón B -> cerrar menú principal.
    def on_button_pressed6(selection12, selectedIndex12):
        onMenu_Principal_B(selection12, selectedIndex12)
    menuPrincipal.on_button_pressed(controller.B, on_button_pressed6)

# -----------------------------
#  MAPA 3 – MUNDO SUBMARINO
# -----------------------------
def dibujar_mapa_3():
    # Configura el Mapa 3: Mundo Submarino
    tiles.set_current_tilemap(tilemap("""
        MAPA3_AGUA
        """))
    scene.set_background_image(assets.image("""
        fondoMapa3
        """))

# -----------------------------
#  TILE DE VICTORIA: CRISTAL ROJO
# -----------------------------
def on_overlap_tile18(sprite19, location19):
    # Victoria alternativa al alcanzar el cristal rojo.
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
    game.set_game_over_message(True, "GAME OVER!")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.collectible_red_crystal,
    on_overlap_tile18)

# -----------------------------
#  PERSONAJE 1 – BART
# -----------------------------
def personaje_1():
    global mySprite
    # Crea y configura el personaje Bart.
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

# -----------------------------
#  PERSONAJE 3 – FINN
# -----------------------------
def personaje_3():
    global mySprite
    # Crea y configura el personaje Finn.
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

# -----------------------------
#  VARIABLES GLOBALES DEL JUEGO
# -----------------------------
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

# -----------------------------
#  INICIALIZACIÓN DEL JUEGO
# -----------------------------
# Estado inicial: menú principal con personaje y mapa por defecto.
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()
