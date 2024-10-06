import {TimedEffect} from "./timed_effect.js"
import {settings} from "./data.js"
import {fx} from "./main.js"

export let entries = []

export class Entry {
    entity
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
            entity.setPosition(entry.x0 + entry.dx / entity.grid, entry.y0 + entry.dy / entity.grid)
            entity.move(entry.dx, entry.dy)
        }
        entries.length = 0
        super.end()
    }
}