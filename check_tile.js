import {emptyTile} from "../Furca/src/tile_map.js"
import {EntityType} from "./entity.js"
import {ammoTile, coinTile, flameTile, openedDoorTile} from "./tiles.js"
import {
    changeAmmo,
    enemies,
    entities,
    getCoin,
    initLevel,
    nextLevel,
    objects,
    player,
    respawnDelay,
    tiles
} from "./level.js"



export function checkTile() {
    entities.processSprites((entity) => {
        if(entity.xShift > 0 || entity.yShift > 0) return
        switch(objects.tileByPos(entity.column, entity.row)) {
            case coinTile:
                if(entity !== player) return
                objects.setTileByPos(entity.column, entity.row, emptyTile)
                getCoin()
                break
            case ammoTile:
                if(entity !== player) return
                objects.setTileByPos(entity.column, entity.row, emptyTile)
                changeAmmo(1)
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
            nextLevel()
        }
    })
}
