import {tileMap, tileSet} from "../Furca/src/project.js"
import {TileSet} from "../Furca/src/tile_set.js"
import {ImageArray} from "../Furca/src/image_array.js"
import {texture} from "../Furca/src/system.js"
import {TileMap} from "../Furca/src/tile_map.js"
import {Img} from "../Furca/src/image.js"

export function loadData() {
    tileSet.tiles = new TileSet(new ImageArray(texture.tiles, 6, 1, 0.5, 0.5, 1, 1), [
        0, 0, 0, 0, 0, 0,
    ], [], [], -1, [])
    tileSet.objects = new TileSet(new ImageArray(texture.objects, 7, 1, 0.5, 0.5, 1, 1), [
        0, 0, 0, 0, 0, 0, 0,
    ], [], [], -1, [])
    tileMap.window_tiles = new TileMap(tileSet.tiles, 11, 11, -11.5, 18.5, 1, 1, [
        0,   2,  -1,   0,   0,   0,   0,   0,  -1,   0,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   0,   0,   1,   0,   1,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,   1,  -1,  -1,   0,
        0,   1,   0,   1,   0,  -1,   0,   1,   0,  -1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,   0,   1,   0,  -1,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   0,   0,  -1,   0,   0,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   0,   2,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.window_objects = new TileMap(tileSet.objects, 11, 11, -11.5, 18.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
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
    tileMap.cellar_tiles = new TileMap(tileSet.tiles, 11, 11, 0.5, 6.5, 1, 1, [
        0,   2,  -1,   0,   0,   0,   0,   0,  -1,   0,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,   0,   0,   0,   1,   0,   0,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,   0,
        0,   0,   0,   1,   0,  -1,   0,   0,   1,  -1,   0,
        0,  -1,  -1,   1,  -1,  -1,  -1,  -1,   1,  -1,   0,
        0,   1,   0,   1,   0,   5,   0,   1,   0,  -1,   0,
        0,   1,  -1,   1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   0,   0,   1,   0,   0,   0,   0,   1,   5,   0,
        2,  -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.cellar_objects = new TileMap(tileSet.objects, 11, 11, 0.5, 6.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.vase_tiles = new TileMap(tileSet.tiles, 11, 11, 0.5, 18.5, 1, 1, [
        0,   0,   0,   2,   0,   0,   0,   0,  -1,   0,   0,
        0,   0,  -1,   1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   0,   0,   1,  -1,  -1,   1,   5,   1,   5,   0,
        0,  -1,  -1,   1,  -1,  -1,  -1,  -1,   1,  -1,   0,
        0,  -1,   0,   0,   5,   5,   5,   0,   1,  -1,   0,
        0,  -1,  -1,   0,  -1,  -1,  -1,   0,   1,  -1,   0,
        0,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,   0,
        0,  -1,   1,   0,   5,   1,   5,   1,   0,  -1,   0,
        0,   5,  -1,   0,  -1,   1,  -1,   1,   0,   5,   0,
        0,  -1,  -1,   4,  -1,   1,  -1,   1,   4,  -1,   0,
        0,   0,   0,   0,   0,   0,   2,   0,   0,   0,   0,
    ])
    tileMap.house_tiles = new TileMap(tileSet.tiles, 11, 11, 12.5, 18.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   0,  -1,   2,   0,
        0,  -1,  -1,  -1,  -1,   0,  -1,  -1,  -1,   1,   0,
        0,  -1,  -1,  -1,   1,   0,   1,  -1,  -1,   1,   0,
        0,  -1,   0,   0,   1,  -1,   1,   0,   0,  -1,   0,
        0,  -1,   1,   4,   5,   1,   5,   4,   1,  -1,   0,
        0,  -1,   1,   4,   5,   1,   5,   4,   1,  -1,   0,
        0,  -1,   1,   4,   5,   1,   5,   4,  -1,  -1,   0,
        0,  -1,   1,   4,   5,   4,   5,   4,   1,   5,   0,
        0,  -1,   1,   4,   5,   4,   5,   4,   1,  -1,   0,
        0,  -1,   1,   0,   5,   0,   5,   0,   1,  -1,   0,
        0,   0,   2,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.clock_tiles = new TileMap(tileSet.tiles, 11, 11, 24.5, 18.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   0,  -1,   2,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   0,   0,   0,   1,   0,   0,   0,   1,   0,
        0,  -1,   0,  -1,  -1,  -1,  -1,  -1,   0,   1,   0,
        0,  -1,   0,  -1,   5,   1,  -1,  -1,   0,   1,   0,
        0,  -1,   0,  -1,  -1,  -1,  -1,  -1,   0,   1,   0,
        0,  -1,   0,   5,   5,   1,   5,  -1,   0,   1,   0,
        0,  -1,   0,  -1,  -1,  -1,  -1,  -1,   0,   1,   0,
        0,  -1,   4,  -1,  -1,   4,  -1,  -1,   1,   1,   0,
        2,  -1,   5,   1,   5,   5,   5,   5,   5,   1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.twists_tiles = new TileMap(tileSet.tiles, 11, 11, 36.5, 18.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   0,  -1,   2,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,  -1,   0,   5,   0,   1,   0,   5,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,   0,   1,   0,   1,  -1,   0,   0,
        0,  -1,   0,   1,   0,  -1,   0,   1,  -1,  -1,   0,
        0,  -1,   0,   1,   0,  -1,   4,  -1,   5,   1,   0,
        0,  -1,   0,   1,   0,   0,   0,   5,  -1,   1,   0,
        0,  -1,   0,   1,   0,  -1,   0,   1,   5,   0,   0,
        2,  -1,  -1,   1,  -1,   1,  -1,   1,  -1,  -1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.pron_tiles = new TileMap(tileSet.tiles, 11, 11, -11.5, 30.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   0,   0,   2,   0,
        0,  -1,  -1,  -1,  -1,  -1,   4,  -1,  -1,   1,   0,
        0,  -1,   0,   1,  -1,  -1,   0,   1,  -1,   1,   0,
        0,  -1,  -1,   1,  -1,  -1,  -1,   1,  -1,   1,   0,
        0,  -1,  -1,   1,  -1,  -1,  -1,   1,  -1,   1,   0,
        0,  -1,   1,   0,   5,   5,   5,   0,   1,   0,   0,
        0,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,   0,
        0,  -1,   1,  -1,   5,   1,   5,  -1,   1,  -1,   0,
        0,  -1,   1,   0,  -1,   1,  -1,   0,   1,  -1,   0,
        0,   1,  -1,   4,  -1,   1,  -1,   4,  -1,   1,   0,
        0,   0,   2,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.corridors_tiles = new TileMap(tileSet.tiles, 11, 11, 0.5, 30.5, 1, 1, [
        0,   0,   0,   0,   0,   2,   0,   0,  -1,   0,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   0,   0,   0,   0,   0,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,  -1,   0,   5,   0,   5,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   5,   0,  -1,   0,   5,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   5,   0,   5,   0,  -1,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   0,   2,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.snake_tiles = new TileMap(tileSet.tiles, 11, 11, 12.5, 30.5, 1, 1, [
        0,   2,  -1,   0,   0,   0,   0,   0,  -1,   0,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   1,   0,   1,   0,   1,   0,   1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   0,   5,   0,   5,   0,   5,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   0,   5,   0,   5,   0,   5,   0,   1,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   0,   5,   0,   5,   0,   5,   0,   1,   0,
        2,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.nn_tiles = new TileMap(tileSet.tiles, 11, 11, 24.5, 30.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   2,   0,  -1,   0,   0,
        0,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,   0,
        0,   1,   0,   5,   0,  -1,   1,   5,   0,   1,   0,
        0,   1,   0,  -1,   0,  -1,   1,  -1,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,   1,  -1,  -1,   1,   0,
        0,   1,   0,  -1,   0,   5,   0,  -1,   0,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   0,   5,   0,   5,   0,   5,   0,   1,   0,
        0,   0,   0,  -1,   0,  -1,   0,  -1,   0,   1,   0,
        0,   1,   1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   2,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.koi_centuries_tiles = new TileMap(tileSet.tiles, 11, 11, 36.5, 30.5, 1, 1, [
        0,   0,   0,   0,   0,   0,   0,   0,  -1,   2,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   0,   5,   1,  -1,   1,  -1,   1,  -1,   0,
        0,   1,  -1,  -1,  -1,   5,  -1,   5,  -1,   5,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,  -1,   1,  -1,   1,  -1,   1,  -1,  -1,   0,
        0,   1,   1,  -1,   1,  -1,   1,  -1,   1,  -1,   0,
        2,   1,  -1,   1,  -1,   1,  -1,   1,  -1,  -1,   0,
        0,   0,   1,  -1,   1,  -1,   1,  -1,   1,   0,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.vase_objects = new TileMap(tileSet.objects, 11, 11, 0.5, 18.5, 1, 1, [
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,   3,   3,  -1,  -1,  -1,  -1,
        -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   2,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   2,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   4,   4,  -1,   5,  -1,   0,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.house_objects = new TileMap(tileSet.objects, 11, 11, 12.5, 18.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,   4,   0,  -1,   4,  -1,   4,  -1,  -1,   4,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.clock_objects = new TileMap(tileSet.objects, 11, 11, 24.5, 18.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   3,  -1,   3,   3,  -1,   3,   3,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,   5,   5,  -1,   5,  -1,  -1,  -1,  -1,
        -1,   0,   2,  -1,  -1,   3,  -1,  -1,   2,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.twists_objects = new TileMap(tileSet.objects, 11, 11, 36.5, 18.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   6,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,   2,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.pron_objects = new TileMap(tileSet.objects, 11, 11, -11.5, 30.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   2,  -1,   2,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   2,  -1,
        -1,  -1,   0,  -1,   5,  -1,   6,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.corridors_objects = new TileMap(tileSet.objects, 11, 11, 0.5, 30.5, 1, 1, [
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,
        -1,  -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.snake_objects = new TileMap(tileSet.objects, 11, 11, 12.5, 30.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,   3,  -1,   3,  -1,   3,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.nn_objects = new TileMap(tileSet.objects, 11, 11, 24.5, 30.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,   3,  -1,   3,  -1,   3,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.square_tiles = new TileMap(tileSet.tiles, 11, 11, -11.5, 42.5, 1, 1, [
        0,   0,   0,   0,   0,   2,   0,   0,  -1,   0,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,   0,   1,   0,   1,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,  -1,   1,  -1,   1,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,  -1,   0,   1,  -1,   1,  -1,   1,   0,  -1,   0,
        0,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   5,   0,   1,   0,   1,   0,   1,   0,   5,   0,
        2,  -1,  -1,  -1,  -1,   1,  -1,  -1,  -1,  -1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.dont_jump_tiles = new TileMap(tileSet.tiles, 11, 11, 0.5, 42.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   0,  -1,   2,   0,
        0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,   0,
        0,   1,   5,   1,   5,   1,   5,   1,   5,   1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,  -1,   4,  -1,  -1,   5,   0,   5,   5,   0,
        0,   1,   5,   0,   5,   5,   5,  -1,  -1,  -1,   0,
        0,   1,  -1,  -1,  -1,  -1,   5,   5,   0,   5,   0,
        0,   1,  -1,  -1,   0,   5,   5,  -1,  -1,  -1,   0,
        2,   1,  -1,  -1,  -1,  -1,   5,   5,   0,   0,   0,
        0,  -1,   5,   0,   5,   0,  -1,  -1,   0,   0,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,
    ])
    tileMap.two_areas_tiles = new TileMap(tileSet.tiles, 11, 11, 12.5, 42.5, 1, 1, [
        0,   0,  -1,   0,   0,   0,   0,   2,  -1,   0,   0,
        0,  -1,  -1,  -1,  -1,  -1,   0,   1,  -1,  -1,   0,
        0,   0,   0,   1,   0,   1,   0,   1,   0,  -1,   0,
        0,  -1,   0,   1,   0,   1,   0,   1,   0,  -1,   0,
        0,  -1,  -1,   1,   0,   1,  -1,   1,   0,  -1,   0,
        0,   1,   0,   0,   0,   0,   0,   0,   0,  -1,   0,
        0,   1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   0,
        0,   1,   5,   1,   5,   1,   5,   1,   5,   1,   0,
        0,   1,   5,   1,   5,   1,   5,   1,   5,   1,   0,
        0,   1,   5,   1,   5,   1,   5,   1,   5,   1,   0,
        0,   0,   0,   0,   0,   0,   0,   0,   0,   2,   0,
    ])
    tileMap.tiles14 = new TileMap(tileSet.tiles, 11, 11, 24.5, 42.5, 1, 1, [
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
    tileMap.tiles15 = new TileMap(tileSet.tiles, 11, 11, 36.5, 42.5, 1, 1, [
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
    tileMap.koi_centuries_objects = new TileMap(tileSet.objects, 11, 11, 36.5, 30.5, 1, 1, [
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,   3,   3,   3,   3,   3,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.square_objects = new TileMap(tileSet.objects, 11, 11, -11.5, 42.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,   3,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,   3,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.dont_jump_objects = new TileMap(tileSet.objects, 11, 11, 0.5, 42.5, 1, 1, [
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,  -1,   2,  -1,
        -1,   0,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,   4,   4,  -1,   4,  -1,   4,   4,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.two_areas_objects = new TileMap(tileSet.objects, 11, 11, 12.5, 42.5, 1, 1, [
        -1,  -1,   1,  -1,  -1,  -1,  -1,  -1,   1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,   3,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
        -1,  -1,   3,  -1,   3,  -1,   3,  -1,   3,  -1,  -1,
        -1,  -1,   3,  -1,   3,  -1,   3,  -1,   3,  -1,  -1,
        -1,  -1,   3,  -1,   3,  -1,   3,  -1,   3,  -1,  -1,
        -1,  -1,   3,  -1,   3,  -1,   3,  -1,   3,   0,  -1,
        -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,  -1,
    ])
    tileMap.objects14 = new TileMap(tileSet.objects, 11, 11, 24.5, 42.5, 1, 1, [
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
    tileMap.objects15 = new TileMap(tileSet.objects, 11, 11, 36.5, 42.5, 1, 1, [
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
    tileMap.tiles16 = new TileMap(tileSet.tiles, 11, 11, -11.5, 54.5, 1, 1, [
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
    tileMap.objects16 = new TileMap(tileSet.objects, 11, 11, -11.5, 54.5, 1, 1, [
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
    tileMap.tiles17 = new TileMap(tileSet.tiles, 11, 11, 0.5, 54.5, 1, 1, [
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
    tileMap.tiles18 = new TileMap(tileSet.tiles, 11, 11, 12.5, 54.5, 1, 1, [
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
    tileMap.tiles19 = new TileMap(tileSet.tiles, 11, 11, 24.5, 54.5, 1, 1, [
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
    tileMap.tiles20 = new TileMap(tileSet.tiles, 11, 11, 36.5, 54.5, 1, 1, [
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
    tileMap.objects17 = new TileMap(tileSet.objects, 11, 11, 0.5, 54.5, 1, 1, [
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
    tileMap.objects18 = new TileMap(tileSet.objects, 11, 11, 12.5, 54.5, 1, 1, [
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
    tileMap.objects19 = new TileMap(tileSet.objects, 11, 11, 24.5, 54.5, 1, 1, [
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
    tileMap.objects20 = new TileMap(tileSet.objects, 11, 11, 36.5, 54.5, 1, 1, [
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

}

export let settings = {
    startingLevel: 0,

    player: {
        speed: 1,
        fraction: 1,
    },

    monster: {
        speed: 1,
        fraction: 2,
    },

    circle: {
        speed: 1,
        fraction: 1,
    },

    falling: {
        duration: 0.05,
    },

    movement: {
        duration: 0.25,
    },

    level: [{
            name: "corridors",
        }, {
            name: "window",
        }, {
            name: "cellar",
        }, {
            name: "lamp",
        }, {
            name: "vase",
        }, {
            name: "house",
            ammo: 12,
        }, {
            name: "clock",
        }, {
            name: "twists",
        }, {
            name: "pron",
        }, {
            name: "snake",
        }, {
            name: "nn",
        }, {
            name: "koi_centuries",
        }, {
            name: "square",
        }, {
            name: "dont_jump",
        }, {
            name: "two_areas",
        },
    ]
}