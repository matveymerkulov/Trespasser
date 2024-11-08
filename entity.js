import {abs} from "../Furca/src/functions.js"
import {VectorSprite} from "../Furca/src/vector_sprite.js"
import {tiles} from "./level.js"
import {ctx, distToScreen, xToScreen, yToScreen} from "../Furca/src/canvas.js"

export const EntityType = {
    player: Symbol("player"),
    monster: Symbol("monster"),
    leftCircle: Symbol("leftCircle"),
    rightCircle: Symbol("rightCircle"),
}

export class Entity extends VectorSprite {
    dx = 0
    dy = 0
    x0
    y0
    row
    column
    xShift = 0
    yShift = 0
    grid
    type
    homeColumn
    homeRow
    respawnDelay = 0

    constructor(grid, column, row, layer, type) {
        super()
        this.column = this.homeColumn = column
        this.row = this.homeRow = row
        this.grid = grid
        this.type = type
        if(layer !== undefined) layer.add(this)
    }

    get staticXPos() {
        return this.column * 2 + this.xShift
    }

    get staticYPos() {
        return this.row * 2 + this.yShift
    }

    get xPos() {
        return this.staticXPos + this.dx * 2 / this.grid
    }

    get yPos() {
        return this.staticYPos + this.dy * 2 / this.grid
    }

    collidesWith(entity) {
        return abs(this.xPos - entity.xPos) < 2 && abs(this.yPos - entity.yPos) < 2
    }

    collidesWithStaticEntity(entity) {
        return abs(this.xPos - entity.staticXPos) < 2 && abs(this.yPos - entity.staticYPos) < 2
    }

    staticallyCollidesWith(entity) {
        return abs(this.staticXPos - entity.staticXPos) < 2 && abs(this.staticYPos - entity.staticYPos) < 2
    }

    draw() {
        super.draw()
        /*const size = distToScreen(1)
        const x = xToScreen(tiles.tileXByColumn(this.column) + this.xShift / this.grid - 0.5)
        const y = yToScreen(tiles.tileYByRow(this.row) + this.yShift / this.grid - 0.5)
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