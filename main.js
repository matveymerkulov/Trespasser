import {loadData, settings} from "./data.js"
import {project, tileMap, tileSet} from "../Furca/src/project.js"
import {emptyTile, initTileMap, TileMap} from "../Furca/src/tile_map.js"
import {apsk, defaultCanvas} from "../Furca/src/system.js"
import {Key} from "../Furca/src/key.js"
import {ShapeType} from "../Furca/src/shape.js"
import {Layer} from "../Furca/src/layer.js"
import {MoveToPoint} from "./move_to_point.js"

project.getAssets = () => {
    return {
        texture: ["tiles.png"],
        sound: [],
    }
}

const wallTile = 0
const ladderTile = 1
const closedDoorTile = 2
const openedDoorTile = 3
const playerTile = 4
const enemyTile = 5
const crateTile = 6
const bazookaTile = 7
const coinTile = 8

const walkable = [emptyTile, ladderTile, openedDoorTile, bazookaTile, coinTile]

export let GameState = {
    idle: 0,
    moving: 1,
}

export let gameState = GameState.idle

project.init = () => {
    const left = new Key("ArrowLeft", "KeyA")
    const right = new Key("ArrowRight", "KeyD")
    const up = new Key("ArrowUp", "KeyW")
    const down = new Key("ArrowDown", "KeyS")

    loadData()

    defaultCanvas(11, 12)
    initTileMap()

    let level = tileMap.level1.copy()
    level.setPosition(0, 0)

    let coins = level.countTiles(coinTile)

    const player = level.extractVectorTile(playerTile)
    player.speed = 1
    let enemies = new Layer()
    level.extractVectorTiles(enemyTile, ShapeType.box, enemies)
    let doorIndex = level.findTileIndex(closedDoorTile)
    let entities = new Layer(player, enemies)
    let fx = new Layer()

    project.scene.add(level, player)

    let time = 1

    project.update = () => {
        fx.update()
        if(gameState === GameState.idle) {
            let dx = 0, dy = 0
            if(left.wasPressed) {
                dx = -1
            } else if(right.wasPressed) {
                dx = 1
            } else if(up.wasPressed) {
                if(level.tileByPoint(player) === ladderTile) {
                    dy = -1
                }
            } else if(down.wasPressed) {
                dy = 1
            }

            if(dx === 0 && dy === 0) return

            const x = player.x + dx
            const y = player.y + dy

            let tile = level.tileByCoords(x, y)
            if(walkable.includes(tile)) {
                gameState = GameState.moving
                let move = new MoveToPoint(fx, undefined, player, settings.movement, x, y)
                move.next = () => {
                    gameState = GameState.idle
                }
            }

            switch(tile) {
                case coinTile:
                    level.setTileByCoords(x, y, emptyTile)
                    coins--
                    if(coins === 0) level.setTileByIndex(doorIndex, openedDoorTile)
                    break
                case openedDoorTile:

                    break
            }

            return
        } else {

        }

        player.limit(level)
    }
}