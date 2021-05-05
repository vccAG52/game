namespace SpriteKind {
    export const Mom = SpriteKind.create()
    export const Girl = SpriteKind.create()
    export const Son = SpriteKind.create()
    export const Dog = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Son, function (sprite, otherSprite) {
    if (Mom <= 1) {
        if (Son == 0) {
            Son += 1
            mySprite4.say(":(", 2000)
            pause(2000)
            mySprite4.say("My dog! He's lost!", 5000)
            pause(5000)
            mySprite4.say("Can you find him? He should be here somewhere..", 5000)
            mySprite4.follow(mySprite, 60)
            mySprite5 = sprites.create(img`
                e e e . . . . e e e . . . . 
                c d d c . . c d d c . . . . 
                c b d d f f d d b c . . . . 
                c 3 b d d b d b 3 c . . . . 
                f b 3 d d d d 3 b f . . . . 
                e d d d d d d d d e . . . . 
                e d f d d d d f d e . b f b 
                f d d f d d f d d f . f d f 
                f b d d b b d d 2 f . f d f 
                . f 2 2 2 2 2 2 b b f f d f 
                . f b d d d d d d b b d b f 
                . f d d d d d b d d f f f . 
                . f d f f f d f f d f . . . 
                . f f . . f f . . f f . . . 
                `, SpriteKind.Dog)
            tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(1, 50), randint(1, 50)))
            while (!(mySprite.overlapsWith(mySprite5))) {
                mySprite5.x += randint(-10, 10)
                mySprite5.y += randint(-10, 10)
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mom, function (sprite, otherSprite) {
    if (Mom == 0) {
        Mom += 1
        mySprite2.say("Hi! Oh, who are you?", 5000)
        pause(5000)
        mySprite2.say("Can I ask you to do a favor?", 5000)
        pause(5000)
        mySprite2.say("Please find my son.", 5000)
        pause(5000)
        mySprite2.say("He should be around here somewhere.", 5000)
        pause(5000)
        mySprite4 = sprites.create(img`
            . . . . f f f f . . . . 
            . . f f e e e e f f . . 
            . f f e e e e e e f f . 
            f f f f 4 e e e f f f f 
            f f f 4 4 4 e e f f f f 
            f f f 4 4 4 4 e e f f f 
            f 4 e 4 4 4 4 4 4 e 4 f 
            f 4 4 f f 4 4 f f 4 4 f 
            f e 4 d d d d d d 4 e f 
            . f e d d b b d d e f . 
            . f f e 4 4 4 4 e f f . 
            e 4 f b 1 1 1 1 b f 4 e 
            4 d f 1 1 1 1 1 1 f d 4 
            4 4 f 6 6 6 6 6 6 f 4 4 
            . . . f f f f f f . . . 
            . . . f f . . f f . . . 
            `, SpriteKind.Son)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(24, 37))
    }
    Son = 0
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dog, function (sprite, otherSprite) {
    mySprite4.say("Thank you so much!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("A pizza...")
    Pizza.destroy()
    mySprite3.say("This is it!", 5000)
    pause(5000)
    mySprite3.say("I need to find my mommy.", 5000)
    pause(5000)
    mySprite3.say("Will you help me find her?", 5000)
    mySprite2 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f 5 5 5 5 5 5 5 5 f . . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        . f 5 5 5 d b b d 5 5 5 f . 
        f 5 5 5 b 4 4 4 4 b 5 5 5 f 
        f 5 5 c c 4 4 4 4 c c 5 5 f 
        f b b f b f 4 4 f b f b b f 
        f b b 4 1 f d d f 1 4 b b f 
        . f b f d d d d d d f b f . 
        . f e f e 4 4 4 4 e f e f . 
        . e 4 f 6 9 9 9 9 6 f 4 e . 
        . 4 d c 9 9 9 9 9 9 c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 3 f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.Mom)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(17, 18))
    Mom = 0
})
let mySprite2: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let Son = 0
let Mom = 0
let mySprite: Sprite = null
let mySprite3: Sprite = null
let Pizza: Sprite = null
tiles.setTilemap(tilemap`level1`)
Pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(Pizza, tiles.getTileLocation(17, 28))
mySprite3 = sprites.create(img`
    . f f f . f f f f . f f f . 
    f f f f f c c c c f f f f f 
    f f f f b c c c c b f f f f 
    f f f c 3 c c c c 3 c f f f 
    . f 3 3 c c c c c c 3 3 f . 
    . f c c c c 4 4 c c c c f . 
    . f f c c 4 4 4 4 c c f f . 
    . f f f b f 4 4 f b f f f . 
    . f f 4 1 f d d f 1 4 f f . 
    . . f f d d d d d d f f . . 
    . . e f e 4 4 4 4 e f e . . 
    . e 4 f b 3 3 3 3 b f 4 e . 
    . 4 d f 3 3 3 3 3 3 c d 4 . 
    . 4 4 f 6 6 6 6 6 6 f 4 4 . 
    . . . . f f f f f f . . . . 
    . . . . f f . . f f . . . . 
    `, SpriteKind.Girl)
mySprite3.x += 20
mySprite = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
mySprite3.say("I need to go to the building...", 5000)
pause(5000)
mySprite3.say("Can you take me there?", 5000)
pause(2000)
mySprite3.say("Wait up!", 2000)
mySprite3.follow(mySprite, 50)
