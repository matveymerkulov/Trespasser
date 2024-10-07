import {tileMap, tileSet} from "../Furca/src/project.js"
import {TileSet} from "../Furca/src/tile_set.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {texture} from "../Furca/src/system.js"
import {TileMap} from "../Furca/src/tile_map.js"

export function loadData() {
    tileSet.trespasser = new TileSet(new ImageArray(texture.tiles, 9, 1))

    tileMap.level1 = new TileMap(tileSet.trespasser, 11, 11, -2, -2, 1, 1, [
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