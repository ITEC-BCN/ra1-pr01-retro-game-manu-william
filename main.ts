function personaje_4 () {
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
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile0, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd2, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.rock1, function (sprite, location) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pantallaActual == "confirmarInicio") {
        Seleccionar_mapas()
    }
})
function Seleccionar_personajes () {
    pantallaActual = "seleccionarPersonaje"
    itemsPersonajes = [
    miniMenu.createMenuItem("Bart", assets.image`Bart0`),
    miniMenu.createMenuItem("Santa", assets.image`Santa0`),
    miniMenu.createMenuItem("Finn", assets.image`Finn`),
    miniMenu.createMenuItem("Goku", assets.image`Goku0`)
    ]
    menuPersonajes = miniMenu.createMenuFromArray(itemsPersonajes)
    menuPersonajes.setTitle("Personajes")
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 120)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 110)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuPersonajes.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    menuPersonajes.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    menuPersonajes.setPosition(80, 60)
    menuPersonajes.setButtonEventsEnabled(true)
    menuPersonajes.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onPersonaje_Seleccionado(selection, selectedIndex)
    })
    menuPersonajes.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onPersonaje_Cancelar(selection, selectedIndex)
    })
}
function onPersonaje_Seleccionado (selection: string, selectedIndex: number) {
    personajeSeleccionado = selectedIndex + 1
    menuPersonajes.close()
    game.splash("Personaje seleccionado.")
    Menu_principal()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterEast2, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.crowd3, function (sprite, location) {
    game.gameOver(false)
})
function onMapa_Seleccionado (selection: string, selectedIndex: number) {
    mapaSeleccionado = selectedIndex + 1
    menuMapas.close()
    game.splash("Mapa seleccionado.")
    iniciar_juego()
}
function onMapa_Cancelar (selection: string, selectedIndex: number) {
    menuMapas.close()
    Menu_principal()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthEast, function (sprite, location) {
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pantallaActual == "jugando") {
        mySprite.vy = -170
    } else if (pantallaActual == "confirmarInicio") {
        iniciar_juego()
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile3, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthEast, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerSouthWest, function (sprite, location) {
    game.gameOver(false)
})
function Seleccionar_mapas () {
    pantallaActual = "seleccionarMapa"
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
    menuMapas = miniMenu.createMenuFromArray(itemsMapas)
    menuMapas.setTitle("Mapas")
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 4)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 1)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 130)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 115)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BackgroundColor, 15)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 3)
    menuMapas.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 8)
    menuMapas.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    menuMapas.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Alignment, 1)
    menuMapas.setPosition(80, 60)
    menuMapas.setButtonEventsEnabled(true)
    menuMapas.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onMapa_Seleccionado(selection, selectedIndex)
    })
    menuMapas.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onMapa_Cancelar(selection, selectedIndex)
    })
}
function iniciar_juego () {
    pantallaActual = "jugando"
    scene.setBackgroundColor(9)
    game.splash("¡Iniciando juego!")
    pause(200)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
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
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles10, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterNorth2, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast2, function (sprite, location) {
    game.gameOver(false)
})
function dibujar_mapa_4 () {
    tiles.setCurrentTilemap(tilemap`MAPA4_CAMPO`)
    scene.setBackgroundImage(assets.image`mapafondo4`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleOuterNorth2, function (sprite, location) {
    game.gameOver(false)
})
function onMenu_Principal_A (selection: string, selectedIndex: number) {
    if (selectedIndex == 0) {
        menuPrincipal.close()
        Seleccionar_mapas()
    } else if (selectedIndex == 1) {
        menuPrincipal.close()
        Seleccionar_personajes()
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    game.gameOver(false)
})
function pantalla_inicio () {
    scene.setBackgroundColor(15)
    scene.setBackgroundImage(assets.image`fondo_inicio`)
    game.splash("PIXEL DASH")
    effects.confetti.startScreenEffect(100)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenInnerNorthWest, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.gameOver(false)
})
function dibujar_mapa_2 () {
    tiles.setCurrentTilemap(tilemap`MAPA2_DRAGON`)
    scene.setBackgroundImage(assets.image`fondoMapa2`)
}
function onMenu_Principal_B (selection: string, selectedIndex: number) {
    menuPrincipal.close()
    game.splash("Saliendo del menú")
}
function personaje_2 () {
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`Meta`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
	
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverMessage(true, "GAME OVER!")
})
function dibujar_mapa_1 () {
    tiles.setCurrentTilemap(tilemap`MAPA1_LAVA`)
    scene.setBackgroundImage(assets.image`fondo_castillo`)
}
function onPersonaje_Cancelar (selection: string, selectedIndex: number) {
    menuPersonajes.close()
    Menu_principal()
}
function Menu_principal () {
    scene.setBackgroundColor(15)
    pantallaActual = "menuPrincipal"
    items = [miniMenu.createMenuItem("Personajes", assets.image`personaje`), miniMenu.createMenuItem("Mapas", assets.image`MapaPortada`)]
    menuPrincipal = miniMenu.createMenuFromArray(items)
    menuPrincipal.setTitle("Menú Principal")
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Columns, 2)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 140)
    menuPrincipal.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 50)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Background, 12)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.Border, 2)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Default, miniMenu.StyleProperty.BorderColor, 8)
    menuPrincipal.setStyleProperty(miniMenu.StyleKind.Title, miniMenu.StyleProperty.Alignment, 1)
    menuPrincipal.setPosition(80, 60)
    menuPrincipal.setButtonEventsEnabled(true)
    menuPrincipal.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onMenu_Principal_A(selection, selectedIndex)
    })
    menuPrincipal.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onMenu_Principal_B(selection, selectedIndex)
    })
}
function dibujar_mapa_3 () {
    tiles.setCurrentTilemap(tilemap`MAPA3_AGUA`)
    scene.setBackgroundImage(assets.image`fondoMapa3`)
}
function personaje_1 () {
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
function personaje_3 () {
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
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()
