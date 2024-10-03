import {TimedEffect} from "./timed_effect.js"

export class MoveToPoint extends TimedEffect {
    x
    y
    dx
    dy
    constructor(layer, spriteLayer, sprite, parameters, x2, y2) {
        super(layer, spriteLayer, sprite, parameters)
        this.x = sprite.x
        this.y = sprite.y
        this.dx = x2 - this.x
        this.dy = y2 - this.y
    }

    apply(sprite, k) {
        sprite.setPosition(this.x + this.dx * k, this.y + this.dy * k)
    }
}