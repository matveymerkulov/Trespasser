import {loadData} from "./data.js"
import {project, tileMap, tileSet} from "../Furca/src/project.js"
import {emptyTile, initTileMap, TileMap} from "../Furca/src/tile_map.js"
import {defaultCanvas} from "../Furca/src/system.js"
import {Key} from "../Furca/src/key.js"

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

const walkable = [-1, ladderTile, openedDoorTile, bazookaTile, coinTile]

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

    let player = level.extractTile(playerTile)
    let doorIndex = level.findTileIndex(closedDoorTile)

    project.scene.add(level, player)

    project.update = () => {
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
            player.shift(dx, dy)
        }

        if(tile === coinTile) {
            level.setTileByCoords(x, y, emptyTile)
            coins--
            if(coins === 0) level.setTileByIndex(doorIndex, openedDoorTile)
        }

        player.limit(level)
    }
}