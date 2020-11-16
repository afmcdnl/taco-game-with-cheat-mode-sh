function StartCountdown () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
}
function SpeedUp () {
    if (speed > 50) {
        speed += -10
    }
}
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
})
function cheat_mode () {
    if (Math.abs(Taco.get(LedSpriteProperty.X) - Player.get(LedSpriteProperty.X)) == 4) {
        Player.set(LedSpriteProperty.X, Taco.get(LedSpriteProperty.X))
    } else if (Taco.get(LedSpriteProperty.X) > Player.get(LedSpriteProperty.X)) {
        Player.change(LedSpriteProperty.X, 1)
    } else if (Taco.get(LedSpriteProperty.X) < Player.get(LedSpriteProperty.X)) {
        Player.change(LedSpriteProperty.X, -1)
    }
}
function MoveTacoDown () {
    Taco.change(LedSpriteProperty.Y, 1)
    basic.pause(speed)
}
let speed = 0
let Taco: game.LedSprite = null
let Player: game.LedSprite = null
StartCountdown()
Player = game.createSprite(2, 3)
Taco = game.createSprite(randint(0, 4), 0)
game.setLife(3)
game.setScore(0)
speed = 700
basic.pause(500)
basic.forever(function () {
    cheat_mode()
    MoveTacoDown()
    if (Player.isTouching(Taco)) {
        game.addScore(1)
        Taco.set(LedSpriteProperty.Y, 0)
        Taco.set(LedSpriteProperty.X, randint(0, 4))
        SpeedUp()
        basic.pause(speed)
    } else if (Taco.get(LedSpriteProperty.Y) == 4) {
        game.removeLife(1)
        Taco.set(LedSpriteProperty.Y, 0)
        Taco.set(LedSpriteProperty.X, randint(0, 4))
        basic.pause(speed)
    }
})
