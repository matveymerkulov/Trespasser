import {TimedEffect} from "./timed_effect.js"
import {entities, fx} from "./level.js"
import {checkPlayer} from "./player.js"

export class MoveToPoint extends TimedEffect {
    constructor(parameters) {
        super(fx, undefined, undefined, parameters)
        entities.processSprites((entity) => {
            entity.x0 = entity.x
            entity.y0 = entity.y
        })
    }

    apply(sprite, k) {
        entities.processSprites((entity) => {
            entity.setPosition(entity.x0 + entity.dx / entity.grid * k, entity.y0 + entity.dy / entity.grid * k)
        })

    }

    end() {
        entities.processSprites((entity) => {
            entity.setPosition(entity.x0 + entity.dx / entity.grid, entity.y0 + entity.dy / entity.grid)
            entity.move(entity.dx, entity.dy)
        })
        super.end()
        checkPlayer()
    }
}