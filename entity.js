import {VectorSprite} from "../Furca/src/vector_sprite.js"
import {ShapeType} from "../Furca/src/shape.js"
import {Sprite} from "../Furca/src/sprite.js"

export class Entity extends Sprite {
    dx = 0
    dy = 0
    row
    column
    xShift = 0
    yShift = 0
    grid

    constructor(grid) {
        super()
        this.grid = grid
    }
}