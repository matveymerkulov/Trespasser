import {TimedEffect} from "./timed_effect.js"
import {settings} from "./data.js"
import {entities, fx} from "./main.js"

export let entries = []

export class Entry {
    sprite
    x0
    y0
    dx
    dy
    constructor(entity, dx, dy) {
        this.entity = entity
        this.x0 = entity.x
        this.y0 = entity.y
        this.dx = dx
        this.dy = dy
        entries.push(this)
    }
}


export class MoveToPoint extends TimedEffect {
    constructor() {
        super(fx, undefined, undefined, settings.movement)
    }

    apply(sprite, k) {
        for(let entry of entries) {
            const entity = entry.entity
            entity.setPosition(entry.x0 + entry.dx / entity.grid * k, entry.y0 + entry.dy / entity.grid * k)
        }
    }

    end() {
        for(let entry of entries) {
            let entity = entry.entity

            entity.xShift += entry.dx
            while(entity.xShift >= entity.grid) {
                entity.xShift -= entity.grid
                entity.column++
            }
            while(entity.xShift < 0) {
                entity.xShift += entity.grid
                entity.column--
            }

            entity.yShift += entry.dy
            while(entity.yShift >= entity.grid) {
                entity.yShift -= entity.grid
                entity.row++
            }
            while(entity.yShift < 0) {
                entity.yShift += entity.grid
                entity.row--
            }


        }
        entries.length = 0
        super.end()
    }
}