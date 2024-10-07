import {Sprite} from "../Furca/src/sprite.js"
import {level} from "./main.js"
import {ctx, distToScreen, xToScreen, yToScreen} from "../Furca/src/canvas.js"
import {abs} from "../Furca/src/functions.js"

export class Entity extends Sprite {
    dx = 0
    dy = 0
    x0
    y0
    row
    column
    xShift = 0
    yShift = 0
    grid

    constructor(grid, column, row) {
        super()
        this.column = column
        this.row = row
        this.grid = grid
    }

    get xPos() {
        return this.column * 2 + this.xShift + this.dx
    }

    get yPos() {
        return this.row * 2 + this.yShift + this.dy
    }

    collidesWith(entity) {
        return abs(this.xPos - entity.xPos) < this.grid && abs(this.yPos - entity.yPos) < this.grid
    }

    draw() {
        super.draw()
        /*const size = distToScreen(1)
        const x = xToScreen(level.tileXByColumn(this.column) + this.xShift / this.grid - 0.5)
        const y = yToScreen(level.tileYByRow(this.row) + this.yShift / this.grid - 0.5)
        ctx.strokeRect(x, y, size, size)*/
    }

    move(dx, dy) {
        this.xShift += dx
        while(this.xShift >= this.grid) {
            this.xShift -= this.grid
            this.column++
        }
        while(this.xShift < 0) {
            this.xShift += this.grid
            this.column--
        }

        this.yShift += dy
        while(this.yShift >= this.grid) {
            this.yShift -= this.grid
            this.row++
        }
        while(this.yShift < 0) {
            this.yShift += this.grid
            this.row--
        }
    }
}