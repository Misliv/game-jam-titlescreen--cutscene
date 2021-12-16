namespace SpriteKind {
    export const CutsceneMC = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (titleScreens) {
        titleScreens = false
        for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
            value.destroy()
        }
        TitlescreenText.destroy()
        blockMenu.setControlsEnabled(true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Cutscene()
})
function Cutscene () {
    scene.setBackgroundImage(assets.image`black`)
    game.showLongText("The year is 2022, climate change has pretty much set the world on fire, so you decide to take things into your own hands. You hop onto your ship named Climarine and set sail. Only you can restore the ecology. ", DialogLayout.Center)
    scene.setBackgroundImage(assets.image`Cutscene background`)
    bird = sprites.create(assets.image`Line`, SpriteKind.Projectile)
    animation.runImageAnimation(
    bird,
    assets.animation`Bird`,
    50,
    true
    )
    bird.setPosition(170, randint(20, 60))
    bird.setVelocity(-100, 0)
    bird.setFlag(SpriteFlag.AutoDestroy, true)
    bird.setFlag(SpriteFlag.Ghost, true)
    pause(2500)
    game.setDialogFrame(assets.image`Textbox Border`)
    mySprite = sprites.create(assets.image`Clay Mattson Cutscene happy`, SpriteKind.Player)
    game.showLongText("What a nice day today!", DialogLayout.Bottom)
    mySprite.destroy()
    mySprite = sprites.create(assets.image`Clay Mattson Cutscene smile`, SpriteKind.Player)
    game.showLongText("Oh boy I can't wait to put out more fires!", DialogLayout.Bottom)
    mySprite.destroy()
    mySprite = sprites.create(assets.image`Clay Mattson Cutscene looking`, SpriteKind.Player)
    game.showLongText("Speaking of fires, I see one in the distance!", DialogLayout.Bottom)
    mySprite.destroy()
    mySprite = sprites.create(assets.image`Clay Mattson Cutscene smile`, SpriteKind.Player)
    game.showLongText("Let's go!", DialogLayout.Bottom)
    mySprite.destroy()
}
let line: Sprite = null
let mySprite: Sprite = null
let bird: Sprite = null
let TitlescreenText: TextSprite = null
let titleScreens = false
scene.setBackgroundImage(assets.image`Titlescreen`)
titleScreens = true
let TitleScreenBoat = sprites.create(assets.image`boat transparent`, SpriteKind.Player)
TitlescreenText = textsprite.create("Press A to start")
TitlescreenText.setPosition(80, 105)
forever(function () {
    if (titleScreens) {
        line = sprites.create(assets.image`Line`, SpriteKind.Projectile)
        line.setPosition(160, randint(0, 80))
        line.setVelocity(-100, 0)
        line.setFlag(SpriteFlag.AutoDestroy, true)
        line.setFlag(SpriteFlag.Ghost, true)
        TitleScreenBoat.destroy()
        TitlescreenText.y = 105
        pause(100)
        TitlescreenText.y = 106
        pause(100)
    }
})
