//  -----------------------------
//   TILES DE MUERTE / VICTORIA
//   Y MANEJO DE PERSONAJES/MAPAS
//   PIXEL DASH
//  -----------------------------
//  Tile de muerte: Multitud 3
//  Si el jugador pisa este tile, la partida termina con derrota.
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd3, function on_overlap_tile(sprite5: Sprite, location5: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Esquina verde interior suroeste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function on_overlap_tile2(sprite9: Sprite, location9: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   PERSONAJE 4 (GOKU)
//  -----------------------------
function personaje_4() {
    
    //  Crea y configura el personaje Goku:
    //   - Usa la imagen base Goku0
    //   - Le aplica la animación GokuAnim en bucle
    //   - Activa la gravedad y el movimiento horizontal
    //   - Hace que la cámara siga al personaje
    mySprite = sprites.create(assets.image`
        Goku0
        `, SpriteKind.Player)
    animation.runImageAnimation(mySprite, assets.animation`
            GokuAnim
            `, 200, true)
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}

//  -----------------------------
//   TILES DE MUERTE (GENERALES)
//  -----------------------------
//  Eventos de Colisión con Tiles de Muerte
//  Tile de muerte: Pantano
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function on_overlap_tile3(sprite: Sprite, location: tiles.Location) {
    //  Si toca pantano, derrota inmediata.
    game.gameOver(false)
})
//  Tile sin acción: Transparente
//  Tile "placeholder" que no hace nada cuando se pisa.
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        transparency16
        `, function on_overlap_tile4(sprite18: Sprite, location18: tiles.Location) {
    
})
//  -----------------------------
//   TILES DE VICTORIA
//  -----------------------------
//  Tile de victoria: Meta personalizada
scene.onOverlapTile(SpriteKind.Player, assets.tile`
        Meta
        `, function on_overlap_tile5(sprite17: Sprite, location17: tiles.Location) {
    //  Al pisar la meta:
    //   - Marca victoria
    //   - Lanza confeti
    //   - Muestra mensaje final
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
//  -----------------------------
//   MENÚ DE SELECCIÓN DE PERSONAJES
//  -----------------------------
function Seleccionar_personajes() {
    
    //  Muestra el menú de selección de personajes.
    //  Cambia el estado de pantalla para que los botones se interpreten correctamente.
    pantallaActual = "seleccionarPersonaje"
    //  Crear los items de personajes con su icono correspondiente.
    itemsPersonajes = [miniMenu.createMenuItem("Bart", assets.image`
            Bart0
            `), miniMenu.createMenuItem("Santa", assets.image`
            Santa0
            `), miniMenu.createMenuItem("Finn", assets.image`
            Finn
            `), miniMenu.createMenuItem("Goku", assets.image`
            Goku0
            `)]
    //  Configurar el menú de personajes.
    menuPersonajes = miniMenu.createMenuFromArray(itemsPersonajes)
    menuPersonajes.setTitle("Personajes")
    //  Layout vertical (4 filas x 1 columna).
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 120)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 110)
    //  Colores y borde (fondo gris, borde azul).
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    //  Centrar el título y los items.
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    //  Posicionar el menú y activar eventos de botones.
    menuPersonajes.setPosition(80, 60)
    menuPersonajes.setButtonEventsEnabled(true)
    //  Botón A -> confirmar personaje seleccionado.
    menuPersonajes.onButtonPressed(controller.A, function on_button_pressed(selection: string, selectedIndex: number) {
        onPersonaje_Seleccionado(selection, selectedIndex)
    })
    //  Botón B -> cancelar y volver al menú principal.
    menuPersonajes.onButtonPressed(controller.B, function on_button_pressed2(selection2: string, selectedIndex2: number) {
        onPersonaje_Cancelar(selection2, selectedIndex2)
    })
}

//  Callback cuando el jugador elige un personaje en el menú.
function onPersonaje_Seleccionado(selection3: string, selectedIndex3: number) {
    
    //  Guarda el personaje seleccionado (1–4) y regresa al menú principal.
    personajeSeleccionado = selectedIndex3 + 1
    menuPersonajes.close()
    game.splash("Personaje seleccionado.")
    Menu_principal()
}

//  -----------------------------
//   OTROS TILES DE MUERTE
//  -----------------------------
//  Tile de muerte: Multitud 2
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd2, function on_overlap_tile6(sprite2: Sprite, location2: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Roca del castillo
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function on_overlap_tile7(sprite3: Sprite, location3: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   CALLBACKS MENÚ DE MAPAS
//  -----------------------------
function onMapa_Seleccionado(selection4: string, selectedIndex4: number) {
    
    //  Guarda el mapa seleccionado (1–4) e inicia el juego directamente.
    mapaSeleccionado = selectedIndex4 + 1
    menuMapas.close()
    game.splash("Mapa seleccionado.")
    iniciar_juego()
}

function onMapa_Cancelar(selection5: string, selectedIndex5: number) {
    //  Cancela la selección de mapa y vuelve al menú principal.
    menuMapas.close()
    Menu_principal()
}

//  Tile de muerte: Pared verde exterior norte
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function on_overlap_tile8(sprite11: Sprite, location11: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Esquina verde interior noreste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthEast, function on_overlap_tile9(sprite8: Sprite, location8: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   MENÚ DE SELECCIÓN DE MAPAS
//  -----------------------------
function Seleccionar_mapas() {
    
    //  Muestra el menú de selección de mapas.
    pantallaActual = "seleccionarMapa"
    //  Crear los items de mapas con sus imágenes preview.
    itemsMapas = [miniMenu.createMenuItem("Castillo de Lava", assets.image`
            icono1
            `), miniMenu.createMenuItem("Reino del Dragón", assets.image`
            meta2
            `), miniMenu.createMenuItem("Mundo Submarino", img`
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
                `), miniMenu.createMenuItem("Campo Silvestre", img`
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
                `)]
    //  Configurar el menú de mapas.
    menuMapas = miniMenu.createMenuFromArray(itemsMapas)
    menuMapas.setTitle("Mapas")
    //  Layout vertical (4 filas x 1 columna).
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 130)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 115)
    //  Colores: fondo gris con borde azul.
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    //  Centrar el título y los items.
    menuMapas.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    menuMapas.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    //  Posicionar y activar eventos de botones.
    menuMapas.setPosition(80, 60)
    menuMapas.setButtonEventsEnabled(true)
    //  Botón A -> confirmar mapa seleccionado.
    menuMapas.onButtonPressed(controller.A, function on_button_pressed3(selection6: string, selectedIndex6: number) {
        onMapa_Seleccionado(selection6, selectedIndex6)
    })
    //  Botón B -> cancelar selección y volver al menú principal.
    menuMapas.onButtonPressed(controller.B, function on_button_pressed4(selection7: string, selectedIndex7: number) {
        onMapa_Cancelar(selection7, selectedIndex7)
    })
}

//  -----------------------------
//   CONTROLADORES DE BOTONES
//  -----------------------------
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    //  Botón A:
    //   - Si estamos jugando -> salto.
    //   - Si estamos en pantalla de confirmación -> iniciar juego.
    if (pantallaActual == "jugando") {
        mySprite.vy = -190
    } else if (pantallaActual == "confirmarInicio") {
        iniciar_juego()
    }
    
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    //  Botón B:
    //   - Si estamos confirmando inicio -> volver a seleccionar mapas.
    if (pantallaActual == "confirmarInicio") {
        Seleccionar_mapas()
    }
    
})
//  -----------------------------
//   FUNCIÓN PRINCIPAL DEL JUEGO
//  -----------------------------
function iniciar_juego() {
    
    //  Inicia el juego con el mapa y personaje seleccionados.
    pantallaActual = "jugando"
    scene.setBackgroundColor(9)
    game.splash("¡Iniciando juego!")
    pause(200)
    //  Destruir sprites anteriores antes de crear nuevos.
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    //  Cargar el mapa según la selección del jugador.
    if (mapaSeleccionado == 1) {
        dibujar_mapa_1()
    } else if (mapaSeleccionado == 2) {
        dibujar_mapa_2()
    } else if (mapaSeleccionado == 3) {
        dibujar_mapa_3()
    } else if (mapaSeleccionado == 4) {
        dibujar_mapa_4()
    }
    
    pause(100)
    //  Crear el personaje según la selección.
    if (personajeSeleccionado == 1) {
        personaje_1()
    } else if (personajeSeleccionado == 2) {
        personaje_2()
    } else if (personajeSeleccionado == 3) {
        personaje_3()
    } else if (personajeSeleccionado == 4) {
        personaje_4()
    }
    
}

//  -----------------------------
//   MAPA 4 – CAMPO SILVESTRE
//  -----------------------------
function dibujar_mapa_4() {
    //  Configura el Mapa 4: Campo Silvestre
    tiles.setCurrentTilemap(tilemap`
        MAPA4_CAMPO
        `)
    scene.setBackgroundImage(assets.image`
        mapafondo4
        `)
}

//  -----------------------------
//   CALLBACKS MENÚ PRINCIPAL
//  -----------------------------
function onMenu_Principal_A(selection8: string, selectedIndex8: number) {
    //  Maneja la selección en el menú principal cuando se presiona A.
    if (selectedIndex8 == 0) {
        //  Opción 0: ir a selección de mapas.
        menuPrincipal.close()
        Seleccionar_mapas()
    } else if (selectedIndex8 == 1) {
        //  Opción 1: ir a selección de personajes.
        menuPrincipal.close()
        Seleccionar_personajes()
    }
    
}

//  -----------------------------
//   PANTALLA DE INICIO
//  -----------------------------
function pantalla_inicio() {
    //  Muestra la pantalla de inicio del juego con título y efecto de confeti.
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(assets.image`
        fondo_inicio
        `)
    game.splash("PIXEL DASH")
    effects.confetti.startScreenEffect(100)
}

//  -----------------------------
//   MÁS TILES DE MUERTE
//  -----------------------------
//  Tile de muerte: Lava
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function on_overlap_tile10(sprite14: Sprite, location14: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Esquina verde interior noroeste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthWest, function on_overlap_tile11(sprite15: Sprite, location15: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Pared verde exterior este
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast2, function on_overlap_tile12(sprite12: Sprite, location12: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   MAPA 2 – REINO DEL DRAGÓN
//  -----------------------------
function dibujar_mapa_2() {
    //  Configura el Mapa 2: Reino del Dragón
    tiles.setCurrentTilemap(tilemap`
        MAPA2_DRAGON
        `)
    scene.setBackgroundImage(assets.image`
        fondoMapa2
        `)
}

function onMenu_Principal_B(selection9: string, selectedIndex9: number) {
    //  Maneja cuando se presiona B en el menú principal para salir del menú.
    menuPrincipal.close()
    game.splash("Saliendo del menú")
}

//  -----------------------------
//   PERSONAJE 2 – SANTA
//  -----------------------------
function personaje_2() {
    
    //  Crea y configura el personaje Santa:
    //   - Imagen base Santa0
    //   - Animación Santa en bucle
    mySprite = sprites.create(assets.image`
        Santa0
        `, SpriteKind.Player)
    animation.runImageAnimation(mySprite, assets.animation`
        Santa
        `, 200, true)
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}

//  Tile de muerte: Pared púrpura exterior norte
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorth2, function on_overlap_tile13(sprite13: Sprite, location13: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Pantano 3
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function on_overlap_tile14(sprite7: Sprite, location7: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Pared púrpura este
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterEast2, function on_overlap_tile15(sprite4: Sprite, location4: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Coral
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function on_overlap_tile16(sprite16: Sprite, location16: tiles.Location) {
    game.gameOver(false)
})
//  Tile de muerte: Tile del bosque
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function on_overlap_tile17(sprite10: Sprite, location10: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   MAPA 1 – CASTILLO DE LAVA
//  -----------------------------
function dibujar_mapa_1() {
    //  Configura el Mapa 1: Castillo de Lava
    tiles.setCurrentTilemap(tilemap`
        MAPA1_LAVA
        `)
    scene.setBackgroundImage(assets.image`
        fondo_castillo
        `)
}

//  Callback de cancelar selección de personaje.
function onPersonaje_Cancelar(selection10: string, selectedIndex10: number) {
    //  Cancela la selección de personaje y vuelve al menú principal.
    menuPersonajes.close()
    Menu_principal()
}

//  -----------------------------
//   MENÚ PRINCIPAL
//  -----------------------------
function Menu_principal() {
    
    //  Crea el menú principal con las opciones de Personajes y Mapas.
    scene.setBackgroundColor(15)
    pantallaActual = "menuPrincipal"
    //  Crear los items del menú.
    items = [miniMenu.createMenuItem("Personajes", assets.image`
            personaje
            `), miniMenu.createMenuItem("Mapas", assets.image`
            MapaPortada
            `)]
    //  Configurar el menú principal.
    menuPrincipal = miniMenu.createMenuFromArray(items)
    menuPrincipal.setTitle("Menú Principal")
    //  Layout horizontal (1 fila x 2 columnas).
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 140)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 50)
    //  Configurar colores y bordes.
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 12)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 2)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 8)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    //  Posicionar y activar eventos de botones.
    menuPrincipal.setPosition(80, 60)
    menuPrincipal.setButtonEventsEnabled(true)
    //  Botón A -> navegar a mapas/personajes según opción.
    menuPrincipal.onButtonPressed(controller.A, function on_button_pressed5(selection11: string, selectedIndex11: number) {
        onMenu_Principal_A(selection11, selectedIndex11)
    })
    //  Botón B -> cerrar menú principal.
    menuPrincipal.onButtonPressed(controller.B, function on_button_pressed6(selection12: string, selectedIndex12: number) {
        onMenu_Principal_B(selection12, selectedIndex12)
    })
}

//  -----------------------------
//   MAPA 3 – MUNDO SUBMARINO
//  -----------------------------
function dibujar_mapa_3() {
    //  Configura el Mapa 3: Mundo Submarino
    tiles.setCurrentTilemap(tilemap`
        MAPA3_AGUA
        `)
    scene.setBackgroundImage(assets.image`
        fondoMapa3
        `)
}

//  -----------------------------
//   TILE DE VICTORIA: CRISTAL ROJO
//  -----------------------------
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function on_overlap_tile18(sprite19: Sprite, location19: tiles.Location) {
    //  Victoria alternativa al alcanzar el cristal rojo.
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
//  -----------------------------
//   PERSONAJE 1 – BART
//  -----------------------------
function personaje_1() {
    
    //  Crea y configura el personaje Bart.
    mySprite = sprites.create(assets.image`
        Bart0
        `, SpriteKind.Player)
    animation.runImageAnimation(mySprite, assets.animation`
        Bart
        `, 200, true)
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}

//  Tile de muerte: Esquina verde interior sureste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function on_overlap_tile19(sprite6: Sprite, location6: tiles.Location) {
    game.gameOver(false)
})
//  -----------------------------
//   PERSONAJE 3 – FINN
//  -----------------------------
function personaje_3() {
    
    //  Crea y configura el personaje Finn.
    mySprite = sprites.create(assets.image`
        Finn
        `, SpriteKind.Player)
    animation.runImageAnimation(mySprite, assets.animation`
            finnAni
            `, 200, true)
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}

//  -----------------------------
//   VARIABLES GLOBALES DEL JUEGO
//  -----------------------------
let items : miniMenu.MenuItem[] = []
let menuPrincipal : miniMenu.MenuSprite = null
let itemsMapas : miniMenu.MenuItem[] = []
let menuMapas : miniMenu.MenuSprite = null
let menuPersonajes : miniMenu.MenuSprite = null
let itemsPersonajes : miniMenu.MenuItem[] = []
let mySprite : Sprite = null
let mapaSeleccionado = 0
let personajeSeleccionado = 0
let pantallaActual = ""
//  -----------------------------
//   INICIALIZACIÓN DEL JUEGO
//  -----------------------------
//  Estado inicial: menú principal con personaje y mapa por defecto.
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()
