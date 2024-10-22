import {MoveSprite} from "./move_sprite.js"
import {setMovingVector} from "./moving.js"
import {MoveToPoint} from "./move_to_point.js"
import {checkTile} from "./check_tile.js"
import {down, fireLeft, fireRight, left, right, skip, up} from "./keys.js"
import {ammo, changeAmmo, enemies, initLevel, player, tiles} from "./level.js"
import {ladderTile} from "./tiles.js"
import {GameState, setGameState} from "./main.js"
import {loc} from "../Furca/src/system.js"
import {settings} from "./settings.js"

export function movePlayer() {
    const d = fireLeft.wasPressed ? -1 : (fireRight.wasPressed ? 1 : 0)
    if(ammo > 0 && d !== 0) {
        changeAmmo(-1)
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

    if(dx === 0 && dy === 0 && !skip.wasPressed) return false

    //console.log(player.column + ", " + player.row + ", " + player.xShift + ", " + player.yShift)

    if(!setMovingVector(player, dx, dy)) return false
    player.limit(tiles)
    checkPlayer()

    setGameState(GameState.moving)
    const movement = new MoveToPoint(settings.movement)
    movement.next = () => {
        checkTile()
        setGameState(GameState.falling)
    }

    return true
}

export function checkPlayer() {
    for(let enemy of enemies.items) {
        if(enemy.staticallyCollidesWith(player)) {
            alert(loc("caught"))
            initLevel()
        }
    }
}