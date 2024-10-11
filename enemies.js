import {EntityType} from "./entity.js"
import {setMovingVector} from "./moving.js"
import {sign} from "../Furca/src/functions.js"
import {enemies, player} from "./level.js"
import {checkPlayer} from "./player.js"


export function setEnemyMovingVector(enemy, horizontal) {
    if(!enemy.visible) {
        if(enemy.respawnDelay > 0) {
            enemy.respawnDelay--
            return true
        }
        enemy.visible = true
    }

    if(enemy.type === EntityType.leftCircle) {
        return setMovingVector(enemy, -1, 0)
    }

    if(enemy.type === EntityType.rightCircle) {
        return setMovingVector(enemy, 1, 0)
    }

    if(horizontal) {
        let dx = sign(player.xPos - enemy.staticXPos)
        return dx === 0 ? false : setMovingVector(enemy, dx, 0)
    }

    return setMovingVector(enemy, 0, sign(player.yPos - enemy.staticYPos))
}


function checkCollision(enemy, horizontal) {
    if(!setEnemyMovingVector(enemy, horizontal)) return true
    for(let enemy2 of enemies.items) {
        if(enemy === enemy2) continue
        if(enemy.collidesWith(enemy2)) return true
    }
    return false
}


export function moveEnemies() {
    let set = new Set()
    for(let enemy of enemies.items) {
        set.add(enemy)
        enemy.dx = 0
        enemy.dy = 0
    }

    while(true) {
        const newSet = new Set()
        for(let enemy of set) {
            if(checkCollision(enemy, true) && checkCollision(enemy, false)) {
                newSet.add(enemy)
                enemy.dx = 0
                enemy.dy = 0
            }
        }
        if(newSet.size === 0) return
        if(set.size === newSet.size) break
        set = newSet
    }
}