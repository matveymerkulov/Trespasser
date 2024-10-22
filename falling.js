import {MoveToPoint} from "./move_to_point.js"
import {checkTile} from "./check_tile.js"
import {GameState, gameState, setGameState} from "./main.js"
import {enemies, entities, player, tiles} from "./level.js"
import {blockedTile, ladderTile, plankTile} from "./tiles.js"
import {checkPlayer} from "./player.js"
import {settings} from "./settings.js"

export function fall(entity) {
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

export function falling() {
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
            if(enemy1.dy === 0) break
            if(enemy1 === enemy2) continue
            if(enemy1.collidesWithStaticEntity(enemy2)) enemy1.dy = 0
        }
        if(enemy1.dy > 0) someoneIsFalling = true
    }

    if(someoneIsFalling) {
        checkPlayer()
        setGameState(GameState.moving)
        let movement = new MoveToPoint(settings.falling)
        movement.next = () => {
            checkTile()
            setGameState(GameState.falling)
        }
    } else {
        setGameState(GameState.idle)
    }
}