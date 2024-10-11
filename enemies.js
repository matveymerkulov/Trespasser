import {EntityType} from "./entity.js"
import {setMovingVector} from "./moving.js"
import {sign} from "../Furca/src/functions.js"
import {enemies, player} from "./level.js"

export function moveEnemies() {
    for(let enemy of enemies.items) {
        if(!enemy.visible) {
            if(enemy.respawnDelay > 0) {
                enemy.respawnDelay--
                continue
            }
            enemy.visible = true
        }

        if(enemy.type === EntityType.leftCircle) {
            setMovingVector(enemy, -1, 0)
            continue
        }

        if(enemy.type === EntityType.rightCircle) {
            setMovingVector(enemy, 1, 0)
            continue
        }

        const dx2 = sign(player.xPos - enemy.xPos)
        const dy2 = sign(player.yPos - enemy.yPos)
        if(dx2 !== 0 && setMovingVector(enemy, dx2, 0)) continue
        setMovingVector(enemy, 0, dy2)
    }

    for(let enemy1 of enemies.items) {
        for(let enemy2 of enemies.items) {
            if(enemy1 === enemy2) continue
            if(enemy1.collidesWith(enemy2)) {
                if(enemy1.type === EntityType.monster) {
                    setMovingVector(enemy1, 0, sign(player.yPos - enemy1.yPos))
                    if(enemy1.collidesWith(enemy2)) {
                        enemy1.dy = 0
                    }
                } else {
                    enemy1.dx = 0
                }
            }
        }
    }
}