import {SpriteEffect} from "./sprite_effect.js"
import {project} from "../Furca/src/project.js"
import {Sprite} from "../Furca/src/sprite.js"
import {grenadeImage} from "./data.js"
import {crateTile, fx, grenades, player, tiles, wallTile} from "./main.js"
import {VectorSprite} from "../Furca/src/vector_sprite.js"
import {ShapeType} from "../Furca/src/shape.js"
import {apsk} from "../Furca/src/system.js"
import {emptyTile} from "../Furca/src/tile_map.js"
import {rad} from "../Furca/src/functions.js"

export class MoveSprite extends SpriteEffect {
    direction
    constructor(direction) {
        let sprite = new Sprite(grenadeImage, player.x, player.y
            , 0.8, 0.8 * 22 / 128, ShapeType.box)
        sprite.imageAngle = direction === 1 ? 0 : rad(180)
        super(fx, grenades, sprite)
        this.direction = direction
        this.addSprite()
    }

    update() {
        this.sprite.shift(this.direction * apsk * 10, 0)
        const column = tiles.tileColumnByPoint(this.sprite)
        const row = tiles.tileRowByPoint(this.sprite)
        const tile = tiles.tileByPos(column, row)
        if(tile === crateTile) {
            tiles.setTileByPos(column, row, emptyTile)
        }
        if(tile === wallTile || tile === crateTile) {
            this.end()
            this.removeSprite()
        }
    }
}