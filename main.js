import {project, tileSet} from "../Furca/src/project.js"
import {initTileMap} from "../Furca/src/tile_map.js"
import {defaultCanvas, texture} from "../Furca/src/system.js"
import {floor} from "../Furca/src/functions.js"
import {currentCanvas} from "../Furca/src/canvas.js"
import {fx, initLevel, nextLevel} from "./level.js"
import {coinTile, flameTile} from "./tiles.js"
import {skipLevel} from "./keys.js"
import {checkPlayer, movePlayer} from "./player.js"
import {falling} from "./falling.js"
import {moveEnemies} from "./enemies.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {Img} from "../Furca/src/image.js"
import {loadData} from "./data.js"
import "./text.js"

project.getAssets = () => {
    return {
        texture: ["tiles.png", "objects.png", "flame.png", "coins.png", "grenade.png"],
        sound: [],
    }
}

export let GameState = {
    idle: Symbol("idle"),
    moving: Symbol("moving"),
    falling: Symbol("falling"),
    flying: Symbol("flying"),
}

export let gameState = GameState.falling

export function setGameState(state) {
    gameState = state
}

export let flameImages, coinImages, grenadeImage

project.init = () => {
    loadData()

    flameImages = new ImageArray(texture.flame, 5, 5)
    coinImages = new ImageArray(texture.coins, 6, 1)
    grenadeImage = new Img(texture.grenade)

    defaultCanvas(11, 12)
    initTileMap()

    initLevel()

    currentCanvas.background = "#999999"

    project.update = () => {
        let time = new Date().getTime()
        let tileSetImages = tileSet.objects.images
        tileSetImages.setImage(flameTile, flameImages.image(floor(time / 50) % 25))
        tileSetImages.setImage(coinTile, coinImages.image(floor(time / 200) % 6))

        fx.update()

        if(skipLevel.wasPressed) nextLevel()

        if(gameState === GameState.idle) {
            if(movePlayer()) moveEnemies()
        } else if(gameState === GameState.falling) {
            falling()
        }
    }
}