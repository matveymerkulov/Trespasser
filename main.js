import {coinImages, flameImages, loadData, settings} from "./data.js"
import {project, tileMap, tileSet} from "../Furca/src/project.js"
import {emptyTile, initTileMap} from "../Furca/src/tile_map.js"
import {defaultCanvas, texture} from "../Furca/src/system.js"
import {Key} from "../Furca/src/key.js"
import {Layer} from "../Furca/src/layer.js"
import {MoveToPoint} from "./move_to_point.js"
import {abs, dist, floor, sign} from "../Furca/src/functions.js"
import {currentCanvas} from "../Furca/src/canvas.js"
import {Entity, EntityType} from "./entity.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {MoveSprite} from "./move_sprite.js"

project.getAssets = () => {
    return {
        texture: ["tiles.png", "objects.png", "flame.png", "coins.png", "grenade.png"],
        sound: [],
    }
}

export const wallTile = 0
export const ladderTile = 1
export const closedDoorTile = 2
export const openedDoorTile = 3
export const crateTile = 4
export const plankTile = 5

export const playerTile = 0
export const monsterTile = 1
export const ammoTile = 2
export const coinTile = 3
export const flameTile = 4
export const leftCircleTile = 5
export const rightCircleTile = 6

const blocks = [wallTile, crateTile, closedDoorTile]

export let GameState = {
    idle: 0,
    moving: 1,
    falling: 2,
    flying: 3,
}

export let gameState, fx, grenades, entities, tiles, objects, levelNumber = 0, ammo, player

project.init = () => {
    const left = new Key("ArrowLeft", "KeyA")
    const right = new Key("ArrowRight", "KeyD")
    const up = new Key("ArrowUp", "KeyW")
    const down = new Key("ArrowDown", "KeyS")
    const skip = new Key("Space")
    const fireLeft = new Key("KeyQ")
    const fireRight = new Key("KeyE")
    const skipLevel = new Key("PageDown")

    loadData()

    defaultCanvas(11, 12)
    initTileMap()

    let enemies, coins, doorIndex, respawnDelay
    initLevel()

    function initLevel() {
        gameState = GameState.falling

        const levelParameters = settings.level[levelNumber]
        tiles = tileMap[`${levelParameters.name}_tiles`].copy()
        tiles.setPosition(0, 0)
        objects = tileMap[`${levelParameters.name}_objects`].copy()
        objects.setPosition(0, 0)

        respawnDelay = levelParameters.respawnDelay
        coins = objects.countTiles(coinTile)
        ammo = levelParameters.ammo ?? 0

        enemies = new Layer()
        doorIndex = tiles.findTileIndex(closedDoorTile)

        function extract(tile, layer, parameters, type) {
            let entity
            objects.extractTilesByPos(tile, (tileMap, column, row) => {
                entity = new Entity(parameters.fraction, column, row, layer, type)
                return entity
            })
            return entity
        }

        player = extract(playerTile, undefined, settings.player, EntityType.player)
        extract(monsterTile, enemies, settings.monster, EntityType.monster)
        extract(leftCircleTile, enemies, settings.circle, EntityType.leftCircle)
        extract(rightCircleTile, enemies, settings.circle, EntityType.rightCircle)

        entities = new Layer(player, enemies)
        fx = new Layer()
        grenades = new Layer()

        project.scene.clear()
        project.scene.add(tiles, objects, grenades, entities)
    }

    currentCanvas.background = "#999999"

    function checkTile() {
        entities.processSprites((entity) => {
            if(entity.xShift > 0 || entity.yShift > 0) return
            switch(objects.tileByPos(entity.column, entity.row)) {
                case coinTile:
                    if(entity !== player) return
                    objects.setTileByPos(entity.column, entity.row, emptyTile)
                    coins--
                    if(coins === 0) tiles.setTileByIndex(doorIndex, openedDoorTile)
                    break
                case ammoTile:
                    if(entity !== player) return
                    objects.setTileByPos(entity.column, entity.row, emptyTile)
                    ammo++
                    break
                case flameTile:
                    switch(entity.type) {
                        case EntityType.player:
                            alert("YOU ARE BURNED DOWN")
                            initLevel()
                            break
                        case EntityType.monster:
                            entity.column = entity.homeColumn
                            entity.row = entity.homeRow
                            const index = objects.tileIndexForPos(entity.homeColumn, entity.homeRow)
                            entity.x = objects.tileXByIndex(index)
                            entity.y = objects.tileYByIndex(index)
                            entity.visible = false
                            entity.respawnDelay = respawnDelay
                            break
                        case EntityType.leftCircle:
                        case EntityType.rightCircle:
                            enemies.remove(entity)
                            break
                    }
                    break
            }

            if(tiles.tileByPos(entity.column, entity.row) === openedDoorTile) {
                alert("VICTORY!")
                initLevel()
                nextLevel()
            }
        })
    }

    function blockedTile(x, y) {
        return blocks.includes(tiles.tileByPos(x, y))
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
                    if(tiles.tileByPos(entity.column + dx2, entity.row + dy2) === ladderTile) {
                        onLadder = true
                    }
                }
            }
            if(!onLadder) return false
        } else if(dy > 0) {
            if(entity.yShift === 0) {
                if(tiles.tileByPos(entity.column, entity.row + 1) === plankTile) return false
                if(entity.xShift > 0 && tiles.tileByPos(entity.column + 1, entity.row + 1) === plankTile) return false
            }
        }

        entity.dx = dx
        entity.dy = dy
        return true
    }

    function fall(entity) {
        for(let dx = 0; dx <= 1; dx++) {
            if(dx === 1 && entity.xShift === 0) continue
            const x = entity.column + dx
            for(let dy = 0; dy <= 1; dy++) {
                const y = entity.row + dy
                if(tiles.tileByPos(x, y) === ladderTile) return false
            }
            if(entity.yShift > 0) continue
            if(blockedTile(x, entity.row + 1)) return false
            if(entity.dy === 0 && tiles.tileByPos(x, entity.row + 1) === plankTile) return false
        }
        return true
    }

    function nextLevel() {
        levelNumber = (levelNumber + 1) % settings.level.length
        initLevel()
    }

    project.update = () => {
        let time = new Date().getTime()
        let tileSetImages = tileSet.objects.images
        tileSetImages.setImage(flameTile, flameImages.image(floor(time / 50) % 25))
        tileSetImages.setImage(coinTile, coinImages.image(floor(time / 200) % 6))

        fx.update()

        if(skipLevel.wasPressed) nextLevel()

        if(gameState === GameState.idle) {
            const d = fireLeft.wasPressed ? -1 : (fireRight.wasPressed ? 1 : 0)
            if(ammo > 0 && d !== 0) {
                ammo--
                new MoveSprite(d)
            }

            let dx = 0, dy = 0
            if(left.wasPressed) {
                dx = -1
            } else if(right.wasPressed) {
                dx = 1
            } else if(up.wasPressed) {
                if(tiles.tileByPoint(player) === ladderTile) {
                    dy = -1
                }
            } else if(down.wasPressed) {
                dy = 1
            }

            for(let enemy of enemies.items) {
                if(enemy.collidesWith(player)) {
                    alert("YOU ARE CAUGHT!")
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
                if(!enemy.visible) {
                    if(enemy.respawnDelay > 0) {
                        enemy.respawnDelay--
                        continue
                    }
                    enemy.visible = true
                }

                if(enemy.type === EntityType.leftCircle) {
                    move(enemy, -1, 0)
                    continue
                }

                if(enemy.type === EntityType.rightCircle) {
                    move(enemy, 1, 0)
                    continue
                }

                const dx2 = sign(player.xPos - enemy.xPos)
                const dy2 = sign(player.yPos - enemy.yPos)
                if(dx2 !== 0 && move(enemy, dx2, 0)) continue
                move(enemy, 0, dy2)
            }

            for(let enemy1 of enemies.items) {
                for(let enemy2 of enemies.items) {
                    if(enemy1 === enemy2) continue
                    if(enemy1.collidesWith(enemy2)) {
                        if(enemy1.type === EntityType.monster) {
                            move(enemy1, 0, sign(player.yPos - enemy1.yPos))
                            if(enemy1.collidesWith(enemy2)) {
                                enemy1.dy = 0
                            }
                        } else {
                            enemy1.dx = 0
                        }
                    }
                }
            }

            return
        } else if(gameState === GameState.falling) {
            let someoneIsFalling = false
            entities.processSprites((entity) => {
                entity.dx = 0
                entity.dy = fall(entity) && entity.visible ? 1 : 0
                if(entity.dy > 0 && entity === player) {
                    someoneIsFalling = true
                }
            })

            for(let enemy1 of enemies.items) {
                for(let enemy2 of enemies.items) {
                    if(enemy1 === enemy2 || enemy1.dy === 0) continue
                    if(enemy1.collidesWith(enemy2)) {
                        enemy1.dy = 0
                        continue
                    }
                }
                if(enemy1.dy > 0) someoneIsFalling = true
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

        player.limit(tiles)
    }
}