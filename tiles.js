import {tiles} from "./level.js"

export const wallTile = 0
export const ladderTile = 1
export const closedDoorTile = 2
export const openedDoorTile = 3
export const crateTile = 4
export const plankTile = 5

export const playerTile = 0
export const monsterTile = 1
export const ammoTile = 2
export const coinTile = 3
export const flameTile = 4
export const leftCircleTile = 5
export const rightCircleTile = 6

export const blocks = [wallTile, crateTile, closedDoorTile]

export function blockedTile(x, y) {
    return blocks.includes(tiles.tileByPos(x, y))
}