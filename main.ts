// Tile de muerte: Multitud 3
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd3, function (sprite5, location5) {
    game.gameOver(false)
})
// Tile de muerte: Esquina verde interior suroeste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite9, location9) {
    game.gameOver(false)
})
function personaje_4 () {
    // Crea y configura el personaje Goku
    mySprite = sprites.create(assets.image`Goku0`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`GokuAnim`,
    200,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
// Eventos de Colisión con Tiles de Muerte
// Tile de muerte: Pantano
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    game.gameOver(false)
})
// Tile sin acción: Transparente
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite18, location18) {
	
})
// Eventos de Colisión con Tiles de Victoria
// Tile de victoria: Meta personalizada
scene.onOverlapTile(SpriteKind.Player, assets.tile`Meta`, function (sprite17, location17) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
function Seleccionar_personajes () {
    // Muestra el menú de selección de personajes
    pantallaActual = "seleccionarPersonaje"
    // Crear los items de personajes
    itemsPersonajes = [
    miniMenu.createMenuItem("Bart", assets.image`Bart0`),
    miniMenu.createMenuItem("Santa", assets.image`Santa0`),
    miniMenu.createMenuItem("Finn", assets.image`Finn`),
    miniMenu.createMenuItem("Goku", assets.image`Goku0`)
    ]
    // Configurar el menú
    menuPersonajes = miniMenu.createMenuFromArray(itemsPersonajes)
    menuPersonajes.setTitle("Personajes")
    // Configurar layout vertical (4 filas x 1 columna)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 120)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 110)
    // Configurar colores: fondo gris con borde azul
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    // Centrar el título y los items
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    // Posicionar y activar eventos de botones
    menuPersonajes.setPosition(80, 60)
    menuPersonajes.setButtonEventsEnabled(true)
    menuPersonajes.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onPersonaje_Seleccionado(selection, selectedIndex)
    })
    menuPersonajes.onButtonPressed(controller.B, function (selection2, selectedIndex2) {
        onPersonaje_Cancelar(selection2, selectedIndex2)
    })
}
function onPersonaje_Seleccionado (selection3: string, selectedIndex3: number) {
    // Guarda el personaje seleccionado y vuelve al menú principal
    personajeSeleccionado = selectedIndex3 + 1
    menuPersonajes.close()
    game.splash("Personaje seleccionado.")
    Menu_principal()
}
// Tile de muerte: Multitud 2
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd2, function (sprite2, location2) {
    game.gameOver(false)
})
// Tile de muerte: Roca del castillo
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite3, location3) {
    game.gameOver(false)
})
function onMapa_Seleccionado (selection4: string, selectedIndex4: number) {
    // Guarda el mapa seleccionado e inicia el juego
    mapaSeleccionado = selectedIndex4 + 1
    menuMapas.close()
    game.splash("Mapa seleccionado.")
    iniciar_juego()
}
function onMapa_Cancelar (selection5: string, selectedIndex5: number) {
    // Cancela la selección de mapa y vuelve al menú principal
    menuMapas.close()
    Menu_principal()
}
// Tile de muerte: Pared verde exterior norte
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function (sprite11, location11) {
    game.gameOver(false)
})
// Tile de muerte: Esquina verde interior noreste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthEast, function (sprite8, location8) {
    game.gameOver(false)
})
function Seleccionar_mapas () {
    // Muestra el menú de selección de mapas
    pantallaActual = "seleccionarMapa"
    // Crear los items de mapas con sus imágenes preview
    itemsMapas = [
    miniMenu.createMenuItem("Castillo de Lava", assets.image`icono1`),
    miniMenu.createMenuItem("Reino del Dragón", assets.image`meta2`),
    miniMenu.createMenuItem("Mundo Submarino", img`
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
        `),
    miniMenu.createMenuItem("Campo Silvestre", img`
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
        `)
    ]
    // Configurar el menú
    menuMapas = miniMenu.createMenuFromArray(itemsMapas)
    menuMapas.setTitle("Mapas")
    // Configurar layout vertical (4 filas x 1 columna)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 130)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 115)
    // Configurar colores: fondo gris con borde azul
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    // Centrar el título y los items
    menuMapas.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    menuMapas.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    // Posicionar y activar eventos de botones
    menuMapas.setPosition(80, 60)
    menuMapas.setButtonEventsEnabled(true)
    menuMapas.onButtonPressed(controller.A, function (selection6, selectedIndex6) {
        onMapa_Seleccionado(selection6, selectedIndex6)
    })
    menuMapas.onButtonPressed(controller.B, function (selection7, selectedIndex7) {
        onMapa_Cancelar(selection7, selectedIndex7)
    })
}
// Controladores de Botones
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // Maneja el botón A: saltar durante el juego o confirmar en otras pantallas
    if (pantallaActual == "jugando") {
        mySprite.vy = -190
    } else if (pantallaActual == "confirmarInicio") {
        iniciar_juego()
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    // Maneja el botón B: cancelar acciones
    if (pantallaActual == "confirmarInicio") {
        Seleccionar_mapas()
    }
})
// Función Principal del Juego
function iniciar_juego () {
    // Inicia el juego con el mapa y personaje seleccionados
    pantallaActual = "jugando"
    scene.setBackgroundColor(9)
    game.splash("¡Iniciando juego!")
    pause(200)
    // Destruir sprites anteriores antes de crear nuevos
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    // Cargar el mapa según la selección
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
    // Crear el personaje según la selección
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
function dibujar_mapa_4 () {
    // Configura el Mapa 4: Campo Silvestre
    tiles.setCurrentTilemap(tilemap`MAPA4_CAMPO`)
    scene.setBackgroundImage(assets.image`mapafondo4`)
}
// Callbacks de Menús
function onMenu_Principal_A (selection8: string, selectedIndex8: number) {
    // Maneja la selección en el menú principal cuando se presiona A
    if (selectedIndex8 == 0) {
        // Opción 0: ir a selección de mapas
        menuPrincipal.close()
        Seleccionar_mapas()
    } else if (selectedIndex8 == 1) {
        // Opción 1: ir a selección de personajes
        menuPrincipal.close()
        Seleccionar_personajes()
    }
}
// Funciones de Menús
function pantalla_inicio () {
    // Muestra la pantalla de inicio del juego
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(assets.image`fondo_inicio`)
    game.splash("PIXEL DASH")
    effects.confetti.startScreenEffect(100)
}
// Tile de muerte: Lava
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite14, location14) {
    game.gameOver(false)
})
// Tile de muerte: Esquina verde interior noroeste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthWest, function (sprite15, location15) {
    game.gameOver(false)
})
// Tile de muerte: Pared verde exterior este
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast2, function (sprite12, location12) {
    game.gameOver(false)
})
function dibujar_mapa_2 () {
    // Configura el Mapa 2: Reino del Dragón
    tiles.setCurrentTilemap(tilemap`MAPA2_DRAGON`)
    scene.setBackgroundImage(assets.image`
                fondoMapa2
                `)
}
function onMenu_Principal_B (selection9: string, selectedIndex9: number) {
    // Maneja cuando se presiona B en el menú principal para salir
    menuPrincipal.close()
    game.splash("Saliendo del menú")
}
function personaje_2 () {
    // Crea y configura el personaje Santa
    mySprite = sprites.create(assets.image`Santa0`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Santa`,
    200,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
// Tile de muerte: Pared púrpura exterior norte
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorth2, function (sprite13, location13) {
    game.gameOver(false)
})
// Tile de muerte: Pantano 3
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite7, location7) {
    game.gameOver(false)
})
// Tile de muerte: Pared púrpura este
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterEast2, function (sprite4, location4) {
    game.gameOver(false)
})
// Tile de muerte: Coral
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite16, location16) {
    game.gameOver(false)
})
// Tile de muerte: Tile del bosque
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite10, location10) {
    game.gameOver(false)
})
// Funciones de Mapas
function dibujar_mapa_1 () {
    // Configura el Mapa 1: Castillo de Lava
    tiles.setCurrentTilemap(tilemap`MAPA1_LAVA`)
    scene.setBackgroundImage(assets.image`fondo_castillo`)
}
function onPersonaje_Cancelar (selection10: string, selectedIndex10: number) {
    // Cancela la selección de personaje y vuelve al menú principal
    menuPersonajes.close()
    Menu_principal()
}
function Menu_principal () {
    // Crea el menú principal con las opciones de Personajes y Mapas
    scene.setBackgroundColor(15)
    pantallaActual = "menuPrincipal"
    // Crear los items del menú
    items = [miniMenu.createMenuItem("Personajes", assets.image`personaje`), miniMenu.createMenuItem("Mapas", assets.image`MapaPortada`)]
    // Configurar el menú
    menuPrincipal = miniMenu.createMenuFromArray(items)
    menuPrincipal.setTitle("Menú Principal")
    // Configurar layout horizontal (1 fila x 2 columnas)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 140)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 50)
    // Configurar colores y bordes
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 12)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 2)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 8)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    // Posicionar y activar eventos de botones
    menuPrincipal.setPosition(80, 60)
    menuPrincipal.setButtonEventsEnabled(true)
    menuPrincipal.onButtonPressed(controller.A, function (selection11, selectedIndex11) {
        onMenu_Principal_A(selection11, selectedIndex11)
    })
    menuPrincipal.onButtonPressed(controller.B, function (selection12, selectedIndex12) {
        onMenu_Principal_B(selection12, selectedIndex12)
    })
}
function dibujar_mapa_3 () {
    // Configura el Mapa 3: Mundo Submarino
    tiles.setCurrentTilemap(tilemap`MAPA3_AGUA`)
    scene.setBackgroundImage(assets.image`
                fondoMapa3
                `)
}
// Tile de victoria: Cristal rojo
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite19, location19) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
// Funciones de Personajes
function personaje_1 () {
    // Crea y configura el personaje Bart
    mySprite = sprites.create(assets.image`Bart0`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`Bart`,
    200,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
// Tile de muerte: Esquina verde interior sureste
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function (sprite6, location6) {
    game.gameOver(false)
})
function personaje_3 () {
    // Crea y configura el personaje Finn
    mySprite = sprites.create(assets.image`Finn`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    assets.animation`finnAni`,
    200,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
let items: miniMenu.MenuItem[] = []
let menuPrincipal: miniMenu.MenuSprite = null
let itemsMapas: miniMenu.MenuItem[] = []
let menuMapas: miniMenu.MenuSprite = null
let menuPersonajes: miniMenu.MenuSprite = null
let itemsPersonajes: miniMenu.MenuItem[] = []
let mySprite: Sprite = null
let mapaSeleccionado = 0
let personajeSeleccionado = 0
let pantallaActual = ""
// Inicialización del Juego
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()
