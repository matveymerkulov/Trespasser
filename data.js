import {tileMap, tileSet} from "../Furca/src/project.js"
import {TileSet} from "../Furca/src/tile_set.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {texture} from "../Furca/src/system.js"
import {TileMap} from "../Furca/src/tile_map.js"
import {Img} from "../Furca/src/image.js"

export let flameImages, coinImages, grenadeImage

export function loadData() {
    flameImages = new ImageArray(texture.flame, 5, 5)
    coinImages = new ImageArray(texture.coins, 6, 1)
    grenadeImage = new Img(texture.grenade)

    tileSet.tiles = new TileSet(new ImageArray(texture.tiles, 6, 1, 0.5, 0.5, 1, 1), [
        0, 0, 0, 0, 0, 0,
    ], [], [], -1, [])
    tileSet.objects = new TileSet(new ImageArray(texture.objects, 7, 1, 0.5, 0.5, 1, 1), [
        0, 0, 0, 0, 0, 0, 0,
    ], [], [], -1, [])
    tileMap.tiles = new TileMap(tileSet.tiles, 11, 11, -11.5, -6.5, 1, 1, [
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.objects = new TileMap(tileSet.objects, 11, 11, 0.5, -6.5, 1, 1, [
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.lamp_tiles = new TileMap(tileSet.tiles, 11, 11, -11.5, 6.5, 1, 1, [
        0,   0,  -1,   0,   0,   2,   0,   0,  -1,   0,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   1,   0,   1,   1,  -1,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,   1,  -1,  -1,   1,   0,
        0,   0,   0,   5,   0,   5,   0,   5,   0,   1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,  -1,   1,   5,   5,   5,  -1,  -1,   1,  -1,   0,
        0,  -1,   1,  -1,  -1,  -1,   0,   5,   1,   0,   0,
        0,   0,   1,  -1,   4,  -1,  -1,  -1,   1,  -1,   0,
        0,  -1,  -1,   0,  -1,  -1,   0,  -1,   1,  -1,   2,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.lamp_objects = new TileMap(tileSet.objects, 11, 11, -11.5, 6.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   2,  -1,  -1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,   6,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   4,   4,  -1,   4,   4,  -1,   4,  -1,   0,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
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
        duration: 0.05,
    },

    movement: {
        duration: 0.25,
    },

    level: [
        {
            name: "window",
        }, {
            name: "under_castle",
        }, {
            name: "lamp",
        }, {
            name: "vase",
        },
    ]
}