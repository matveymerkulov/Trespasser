import {project, tileMap} from "../Furca/src/project.js"
import {Layer} from "../Furca/src/layer.js"
import {Entity, EntityType} from "./entity.js"
import {GameState} from "./main.js"
import {
    closedDoorTile,
    coinTile,
    leftCircleTile,
    monsterTile,
    openedDoorTile,
    playerTile,
    rightCircleTile
} from "./tiles.js"
import {settings} from "./settings.js"

export let gameState, fx, grenades, entities, tiles, objects, levelNumber = settings.startingLevel, ammo, player
export let enemies, coins, doorIndex, respawnDelay

export function initLevel() {
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

export function changeAmmo(value) {
    ammo += value
}

export function getCoin() {
    coins--
    if(coins === 0) tiles.setTileByIndex(doorIndex, openedDoorTile)
}

export function nextLevel() {
    levelNumber = (levelNumber + 1) % settings.level.length
    initLevel()
}