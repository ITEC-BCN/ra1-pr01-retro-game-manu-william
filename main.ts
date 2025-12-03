function personaje_4 () {
    mySprite = sprites.create(assets.image`pato`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
function onConfirmar_B (selection: string, selectedIndex: number) {
    menuConfirmar.close()
    Seleccionar_mapas()
}
function Seleccionar_personajes () {
    pantallaActual = "seleccionarPersonaje"
    itemsPersonajes = [miniMenu.createMenuItem("bart", img`
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
        `), miniMenu.createMenuItem("santa", img`
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
        `), miniMenu.createMenuItem("perro", img`
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
        `)]
    menuPersonajes = miniMenu.createMenuFromArray(itemsPersonajes)
    menuPersonajes.setTitle("Personajes")
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
    game.splash("personaje seleccionado")
    Menu_principal()
}
function onMapa_Seleccionado (selection: string, selectedIndex: number) {
    mapaSeleccionado = selectedIndex + 1
    menuMapas.close()
    game.splash("Mapa seleccionado")
    Confirmar_inicio()
}
function onMapa_Cancelar (selection: string, selectedIndex: number) {
    menuMapas.close()
    Menu_principal()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (pantallaActual == "jugando") {
        mySprite.vy = -200
    }
})
function Seleccionar_mapas () {
    pantallaActual = "seleccionarMapa"
    itemsMapas = [
    miniMenu.createMenuItem("mapa1", img`
        .......ffffffffffffffffff.......
        ......ffeeeeeeeeeeeeeeeeff......
        .....ffeeeeeeeeeeeeeeeeeeff.....
        ....ffeeeeeeeeeeeeeeeeeeeeff....
        ...ffeeeeeeeeeeeeeeeeeeeeeeff...
        ..ffeeeeeeeeeeeeeeeeeeeeeeeeff..
        .ffeeeeeeeeeeeeeeeeeeeeeeeeeeff.
        .feeeeeeeeeeeeeeeeeeeeeeeeeeeef.
        .f2e2eee2e22e2eeee2e22e2eee2e2f.
        .f2ee222ef22ee2222ee22fe222ee2f.
        .f22eeeeffe22eeeeee22effeeee22f.
        .ff222fffefe22222222efefff222ff.
        ..fffeeeeeffe222222effeeeeefff..
        ..feeee22e2fffeeeefff2e22eeeef..
        ..feeee22e2fffeeeefff2e22eeeef..
        ..f22e22e2effeeeeeeffe2e22e22e..
        .e22e22e22fffeeeeeefff22e22e22e.
        .eee22222fffeeeeeeeefff22222eee.
        .e22222effffeeeeeeeeffffe22222e.
        ..ffeffffffeeeeeeeeeeffffffeff..
        ..f2eefffffeeeeeeeeeefffffee2f..
        ..f222ffffeeeeeeeeeeeeffff222f..
        .eeeeeffffbbbddddddbbbffffeeeee.
        .e22222ffbbddddddddddbbff22222e.
        ee22222efbddddddddddddbfe22222ee
        e22e2e22ebbddddddddddbbe22e2e22e
        eeeeeeeebbbbbddddddbbbbbeeeeeeee
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        cccccccccccccccccccccccccccccccc
        .cccccccccccccccccccccccccccccc.
        ..cccccccccccccccccccccccccccc..
        `),
    miniMenu.createMenuItem("mapa2", img`
        . . . . . c c b b b . . . . . . 
        . . . . c b d d d d b . . . . . 
        . . . . c d d d d d d b b . . . 
        . . . . c d d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . . . c b b d d d d d d d b . . 
        . c c c c b b b b d d d b b b . 
        . c d d b c b b b b b b b b d b 
        c b b d d d b b b b b d d b d b 
        c c b b d d d d d d d b b b d c 
        c b c c c b b b b b b b d d c c 
        c c b b c c c c b d d d b c c b 
        . c c c c c c c c c c c b b b b 
        . . c c c c c b b b b b b b c . 
        . . . . . . c c b b b b c c . . 
        . . . . . . . . c c c c . . . . 
        `),
    miniMenu.createMenuItem("mapa3", img`
        ..cccc.........
        .c5553c........
        c35553ccccccc..
        c35553c355555c.
        c35553c5555533c
        c35553c3333333c
        c35553cccccc33c
        c35553c55553ccc
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35553c555553c.
        c35533c555553c.
        c33333cccccccc.
        c33333c355555c.
        c33333c5555533c
        c33333c3333333c
        c33333c3333333c
        c33333c3333333c
        .cccccccccccccc
        .cbbc.....cbbc.
        `),
    miniMenu.createMenuItem("mapa4", img`
        ..cccccccccccccccccccccccccccc..
        .b3333333333333333333333333333..
        c333111111111111111111111111333c
        c331133333333333333333333331133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331333333333333333333333333133c
        c331133333333333333333333331133c
        c333111111111111111111111111333c
        cb3333333333333333333333333333bc
        cbb33333333333333333333333333bbc
        cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
        c3bbbbbbbbbbbbbbbbbbbbbbbbbbbb3c
        c3bb333bbbb333bbbb333bbbb333bb3c
        .ccbcccb33bcccb33bcccb33bcccbcc.
        ..cccccccccccccccccccccccccccc..
        ..cbbc....................cbbc..
        ..c33c....................c33c..
        ...cc......................cc...
        `)
    ]
    menuMapas = miniMenu.createMenuFromArray(itemsMapas)
    menuMapas.setTitle("Mapas")
    menuMapas.setButtonEventsEnabled(true)
    menuMapas.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onMapa_Seleccionado(selection, selectedIndex)
    })
    myMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onMapa_Cancelar(selection, selectedIndex)
    })
}
function iniciar_juego () {
    pantallaActual = "jugando"
    scene.setBackgroundColor(9)
    game.splash("Iniciando juego!")
}
function dibujar_mapa_4 () {
    tiles.setCurrentTilemap(tilemap`mapaPrueba`)
    scene.setBackgroundImage(assets.image`mapafodno`)
}
function onMenu_Principal_A (selection: string, selectedIndex: number) {
    if (selectedIndex == 0) {
        menuPrincipal.close()
        Seleccionar_personajes()
    } else if (selectedIndex == 1) {
        menuPrincipal.close()
        Seleccionar_mapas()
    }
}
function pantalla_inicio () {
    scene.setBackgroundColor(15)
    game.splash("PIXEL DASH")
    effects.confetti.startScreenEffect(100)
}
function onConfirmar_A (selection: string, selectedIndex: number) {
    if (selectedIndex == 0) {
        menuConfirmar.close()
        iniciar_juego()
    } else if (selectedIndex == 1) {
        menuConfirmar.close()
        Seleccionar_mapas()
    }
}
function Confirmar_inicio () {
    pantallaActual = "confirmarInicio"
    if (personajeSeleccionado == 0) {
        game.splash("primero elige un personaje")
        Menu_principal()
        return
    }
    itemsConfirmar = [miniMenu.createMenuItem("confirmar"), miniMenu.createMenuItem("cancelar")]
    menuConfirmar = miniMenu.createMenuFromArray(itemsConfirmar)
    menuConfirmar.setTitle("Menu confirmar")
    menuConfirmar.setButtonEventsEnabled(true)
    menuConfirmar.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onConfirmar_A(selection, selectedIndex)
    })
    myMenu.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onConfirmar_B(selection, selectedIndex)
    })
}
function dibujar_mapa_2 () {
    tiles.setCurrentTilemap(tilemap`mapaPrueba`)
    scene.setBackgroundImage(assets.image`mapafodno`)
}
function onMenu_Principal_B (selection: string, selectedIndex: number) {
    menuPrincipal.close()
    game.splash("saliendo del menu")
}
function personaje_2 () {
    mySprite = sprites.create(assets.image`pato`, SpriteKind.Player)
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
function dibujar_mapa_1 () {
    tiles.setCurrentTilemap(tilemap`mapaPrueba`)
    scene.setBackgroundImage(assets.image`mapafodno`)
}
function onPersonaje_Cancelar (selection: string, selectedIndex: number) {
    menuPersonajes.close()
    Menu_principal()
}
function Menu_principal () {
    scene.setBackgroundColor(15)
    pantallaActual = "menuPrincipal"
    items = [miniMenu.createMenuItem("Personajes", img`
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
        `), miniMenu.createMenuItem("Mapas", img`
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
        `)]
    menuPrincipal = miniMenu.createMenuFromArray(items)
    menuPrincipal.setTitle("Menu Principal")
    menuPrincipal.setButtonEventsEnabled(true)
    menuPrincipal.onButtonPressed(controller.A, function (selection, selectedIndex) {
        onMenu_Principal_A(selection, selectedIndex)
    })
    menuPrincipal.onButtonPressed(controller.B, function (selection, selectedIndex) {
        onMenu_Principal_B(selection, selectedIndex)
    })
}
function dibujar_mapa_3 () {
    tiles.setCurrentTilemap(tilemap`mapaPrueba`)
    scene.setBackgroundImage(assets.image`mapafodno`)
}
function personaje_1 () {
    mySprite = sprites.create(assets.image`pato`, SpriteKind.Player)
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
    mySprite = sprites.create(assets.image`pato`, SpriteKind.Player)
    animation.runImageAnimation(
    mySprite,
    [img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `,img`
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
        `],
    500,
    true
    )
    mySprite.ay = 400
    controller.moveSprite(mySprite, 100, 0)
    scene.cameraFollowSprite(mySprite)
}
let items: miniMenu.MenuItem[] = []
let itemsConfirmar: miniMenu.MenuItem[] = []
let menuPrincipal: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let itemsMapas: miniMenu.MenuItem[] = []
let menuMapas: miniMenu.MenuSprite = null
let menuPersonajes: miniMenu.MenuSprite = null
let itemsPersonajes: miniMenu.MenuItem[] = []
let menuConfirmar: miniMenu.MenuSprite = null
let mySprite: Sprite = null
let mapaSeleccionado = 0
let personajeSeleccionado = 0
let pantallaActual = ""
pantallaActual = "menu"
personajeSeleccionado = 1
mapaSeleccionado = 1
pantalla_inicio()
Menu_principal()
