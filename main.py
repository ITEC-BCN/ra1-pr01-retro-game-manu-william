def on_a_pressed():
    mySprite.vy = -200
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

mySprite: Sprite = None
tiles.set_current_tilemap(tilemap("""
    mapaPrueba
    """))
scene.set_background_image(assets.image("""
    mapafodno
    """))
mySprite = sprites.create(assets.image("""
    pato
    """), SpriteKind.player)
mySprite.ay = 400
controller.move_sprite(mySprite, 100, 0)
scene.camera_follow_sprite(mySprite)