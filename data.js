import {tileMap, tileSet} from "../Furca/src/project.js"
import {TileSet} from "../Furca/src/tile_set.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {texture} from "../Furca/src/system.js"
import {TileMap} from "../Furca/src/tile_map.js"

export let flameImages

export function loadData() {
    flameImages = new ImageArray(texture.flame, 5, 5)

    tileSet.trespasser = new TileSet(new ImageArray(texture.tiles, 13, 1))

    tileMap.level1 = new TileMap(tileSet.trespasser, 11, 11, -1.5, -1.5, 1, 1, [
        0,   2,   5,   0,   0,   0,   0,   0,   5,   0,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   8,   0,   0,   0,   1,   0,   1,   0,   8,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,   1,  -1,  -1,   0,
        0,   1,   0,   1,   0,   8,   0,   1,   0,  -1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   8,   0,   1,   0,   1,   0,   8,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   0,   0,   8,   0,   0,   0,   1,   0,
        0,   1,   4,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.level2 = new TileMap(tileSet.trespasser, 11, 11, 10.5, -1.5, 1, 1, [
        0,   2,   5,   0,   0,   0,   0,   0,   5,   0,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   8,   0,
        0,   8,   0,   1,   0,   0,   0,   1,   0,   0,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,   0,
        0,   0,   0,   1,   0,   8,   0,   0,   1,   8,   0,
        0,  -1,  -1,   1,  -1,  -1,  -1,  -1,   1,  -1,   0,
        0,   1,   0,   1,   0,   0,   0,   1,   0,   0,   0,
        0,   1,  -1,   1,  -1,  -1,  -1,  -1,   8,  -1,   0,
        0,   0,   0,   1,   0,   0,   0,   0,   1,  10,   0,
        0,   4,  -1,   1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.level3 = new TileMap(tileSet.trespasser, 11, 11, 22.5, -1.5, 1, 1, [
        0,   0,   5,   0,   0,   2,   0,   0,   5,   0,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   1,   0,   1,   1,  -1,   0,   1,   0,
        0,   1,  -1,  -1,   8,  -1,   1,  -1,  -1,   1,   0,
        0,   0,   0,  10,   0,  -1,   0,  10,   0,   1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,  -1,   1,  10,  10,  10,   7,  -1,   1,  -1,   0,
        0,   8,   1,  -1,  -1,  -1,   0,  10,   1,   0,   0,
        0,   0,   1,  11,   6,  -1,  -1,  -1,   1,  -1,   0,
        0,   9,   9,   0,   9,   9,   0,   9,   1,   4,   2,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
}

export let settings = {
    player: {
        speed: 1,
        fraction: 1,
    },

    enemy: {
        speed: 1,
        fraction: 2,
    },

    falling: {
        duration: 0.1,
        type: "forward",
    },

    movement: {
        duration: 0.25,
        type: "forward",
    }
}