import {flameImages, loadData, settings} from "./data.js"
import {project, tileMap, tileSet} from "../Furca/src/project.js"
import {emptyTile, initTileMap} from "../Furca/src/tile_map.js"
import {defaultCanvas, texture} from "../Furca/src/system.js"
import {Key} from "../Furca/src/key.js"
import {Layer} from "../Furca/src/layer.js"
import {MoveToPoint} from "./move_to_point.js"
import {abs, dist, floor, sign} from "../Furca/src/functions.js"
import {currentCanvas} from "../Furca/src/canvas.js"
import {Entity} from "./entity.js"
import {ImageArray} from "../Furca/src/image_array.js"

project.getAssets = () => {
    return {
        texture: ["tiles.png", "flame.png"],
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
const flameTile = 9

const walkable = [emptyTile, ladderTile, openedDoorTile, bazookaTile, coinTile]

export let GameState = {
    idle: 0,
    moving: 1,
    falling: 2,
}

export let gameState, fx, entities, level


project.init = () => {
    const left = new Key("ArrowLeft", "KeyA")
    const right = new Key("ArrowRight", "KeyD")
    const up = new Key("ArrowUp", "KeyW")
    const down = new Key("ArrowDown", "KeyS")
    const skip = new Key("Space")

    loadData()

    defaultCanvas(11, 12)
    initTileMap()

    let player, enemies, coins, doorIndex
    initLevel()

    function initLevel() {
        gameState = GameState.falling

        level = tileMap.level1.copy()
        level.setPosition(0, 0)

        coins = level.countTiles(coinTile)

        enemies = new Layer()
        doorIndex = level.findTileIndex(closedDoorTile)

        level.extractTilesByPos(playerTile, (tileMap, column, row) => {
            player = new Entity(settings.player.fraction, column, row)
            return player
        })

        level.extractTilesByPos(enemyTile, (tileMap, column, row) => {
            const entity = new Entity(settings.enemy.fraction, column, row)
            enemies.add(entity)
            return entity
        })

        entities = new Layer(player, enemies)
        fx = new Layer()

        project.scene.clear()
        project.scene.add(level, entities)
    }

    currentCanvas.background = "#999999"

    function checkTile() {
        if(player.xShift > 0 || player.yShift > 0) return
        switch(level.tileByPos(player.column, player.row)) {
            case coinTile:
                level.setTileByPos(player.column, player.row, emptyTile)
                coins--
                if(coins === 0) level.setTileByIndex(doorIndex, openedDoorTile)
                break
            case openedDoorTile:
                alert("ПОБЕДА!")
                initLevel()
                break
        }
    }

    function blockedTile(x, y) {
        return !walkable.includes(level.tileByPos(x, y))
    }

    function move(entity, dx, dy) {
        entity.dx = 0
        entity.dy = 0

        if(dx !== 0) {
            if(entity.xShift === 0 && blockedTile(entity.column + sign(dx), entity.row)) return false
            if(entity.yShift > 0 && blockedTile(entity.column + sign(dx), entity.row + 1)) return false
        }

        if(dy !== 0) {
            if(entity.yShift === 0 && blockedTile(entity.column, entity.row + sign(dy))) return false
            if(entity.xShift > 0 && blockedTile(entity.column + 1, entity.row + sign(dy))) return false
        }

        if(dy < 0) {
            let onLadder = false
            for(let dx2 = 0; dx2 <= 1; dx2++) {
                if(dx2 === 1 && entity.xShift === 0) continue
                for(let dy2 = 0; dy2 <= 1; dy2++) {
                    if(dy2 === 1 && entity.yShift === 0) continue
                    if(level.tileByPos(entity.column + dx2, entity.row + dy2) === ladderTile) onLadder = true
                }
            }
            if(!onLadder) return false
        }

        entity.dx = dx
        entity.dy = dy
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
        tileSet.trespasser.images.setImage(flameTile, flameImages.image(floor(new Date().getTime() / 50) % 25))

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

            for(let enemy of enemies.items) {
                if(enemy.collidesWith(player)) {
                    alert("ВЫ ПОЙМАНЫ!")
                    initLevel()
                }
            }

            if(dx === 0 && dy === 0 && !skip.wasPressed) return

            //console.log(player.column + ", " + player.row + ", " + player.xShift + ", " + player.yShift)

            if(!move(player, dx, dy)) return

            gameState = GameState.moving
            const movement = new MoveToPoint(settings.movement)
            movement.next = () => {
                checkTile()
                gameState = GameState.falling
            }

            for(let enemy of enemies.items) {
                const dx = sign(player.xPos - enemy.xPos)
                const dy = sign(player.yPos - enemy.yPos)
                if(dx !== 0 && move(enemy, dx, 0)) continue
                if(dy !== 0) move(enemy, 0, dy)
            }

            for(let enemy1 of enemies.items) {
                for(let enemy2 of enemies.items) {
                    if(enemy1 === enemy2) continue
                    if(enemy1.collidesWith(enemy2)) {
                        move(enemy1, 0, sign(player.yPos - enemy1.yPos))
                        if(enemy1.collidesWith(enemy2)) {
                            enemy1.dy = 0
                        }
                    }
                }
            }

            return
        } else if(gameState === GameState.falling) {
            let someoneIsFalling = false
            entities.processSprites((entity) => {
                entity.dx = 0
                entity.dy = fall(entity) ? 1 : 0
                if(entity.dy > 0 && entity === player) someoneIsFalling = true
            })

            for(let enemy1 of enemies.items) {
                for(let enemy2 of enemies.items) {
                    if(enemy1 === enemy2 || enemy1.dy === 0) continue
                    if(enemy1.collidesWith(enemy2)) {
                        enemy1.dy = 0
                        continue
                    }
                    someoneIsFalling = true
                }
            }

            if(someoneIsFalling) {
                gameState = GameState.moving
                let movement = new MoveToPoint(settings.falling)
                movement.next = () => {
                    checkTile()
                    gameState = GameState.falling
                }
            } else {
                gameState = GameState.idle
            }
        }

        player.limit(level)
    }
}