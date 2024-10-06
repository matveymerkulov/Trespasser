import {loadData, settings} from "./data.js"
import {project, tileMap} from "../Furca/src/project.js"
import {emptyTile, initTileMap} from "../Furca/src/tile_map.js"
import {defaultCanvas} from "../Furca/src/system.js"
import {Key} from "../Furca/src/key.js"
import {Layer} from "../Furca/src/layer.js"
import {entries, Entry, MoveToPoint} from "./move_to_point.js"
import {sign} from "../Furca/src/functions.js"
import {currentCanvas} from "../Furca/src/canvas.js"
import {Entity} from "./entity.js"

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
    falling: 2,
}

export let gameState = GameState.idle, fx, entities, level

project.init = () => {
    const left = new Key("ArrowLeft", "KeyA")
    const right = new Key("ArrowRight", "KeyD")
    const up = new Key("ArrowUp", "KeyW")
    const down = new Key("ArrowDown", "KeyS")

    loadData()

    defaultCanvas(11, 12)
    initTileMap()

    level = tileMap.level1.copy()
    level.setPosition(0, 0)

    let coins = level.countTiles(coinTile)

    let enemies = new Layer()
    let doorIndex = level.findTileIndex(closedDoorTile)

    let player
    level.extractTilesByPos(playerTile, (tileMap, column, row) => {
        player = new Entity(settings.player.fraction)
        player.column = column
        player.row = row
        return player
    })

    entities = new Layer(player, enemies)
    fx = new Layer()

    level.extractTilesByPos(enemyTile, (tileMap, column, row) => {
        const entity = new Entity(settings.enemy.fraction)
        entity.column = column
        entity.row = row
        enemies.add(entity)
        return entity
    })

    project.scene.add(level, entities)

    currentCanvas.background = "#999999"

    function blockedTile(x, y) {
        return !walkable.includes(level.tileByPos(x, y))
    }

    function move(entity, dx, dy) {
        if(dx !== 0) {
            if(entity.xShift === 0 && blockedTile(entity.column + sign(dx), entity.row)) return false
            if(entity.yShift > 0 && blockedTile(entity.column + sign(dx), entity.row + 1)) return false
        }

        if(dy !== 0) {
            if(entity.yShift === 0 && blockedTile(entity.column, entity.row + sign(dy))) return false
            if(entity.xShift > 0 && blockedTile(entity.column + 1, entity.row + sign(dy))) return false
        }

        new Entry(entity, dx, dy)
        return true
    }

    function fall(entity) {
        for(let dx = 0; dx <= 1; dx++) {
            if(dx === 1 && entity.xShift === 0) continue
            const x = entity.column + dx
            if(blockedTile(x, entity.row + 1)) return false
            for(let dy = 0; dy <= 1; dy++) {
                const y = entity.row + dy
                const tile = level.tileByPos(x, y)
                if(tile === ladderTile) return false
            }
        }
        return true
    }

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

            //console.log(player.column + ", " + player.row + ", " + player.xShift + ", " + player.yShift)

            if(!move(player, dx, dy)) return

            const x = player.x + dx
            const y = player.y + dy

            let tile = level.tileByCoords(x, y)
            gameState = GameState.moving
            let movement = new MoveToPoint()
            movement.next = () => {
                gameState = GameState.falling
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

            for(let enemy of enemies.items) {
                const dx = sign(player.column + player.xShift / player.grid - enemy.column - enemy.xShift / enemy.grid)
                const dy = sign(player.row + player.yShift / player.grid - enemy.row - enemy.yShift / enemy.grid)
                if(dx !== 0 && move(enemy, dx, 0)) continue
                if(dy !== 0) move(enemy, 0, dy)
            }

            return
        } else if(gameState === GameState.falling) {
            entities.processSprites((entity) => {
                if(fall(entity)) {
                    new Entry(entity, 0, 1)
                }
            })
            if(entries.length > 0) {
                gameState = GameState.moving
                let movement = new MoveToPoint()
                movement.next = () => {
                    gameState = GameState.falling
                }
            } else {
                gameState = GameState.idle
            }
        }

        player.limit(level)
    }
}