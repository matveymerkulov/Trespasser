import {sign} from "../Furca/src/functions.js"
import {blockedTile, ladderTile, plankTile} from "./tiles.js"
import {tiles} from "./level.js"



export function setMovingVector(entity, dx, dy) {
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