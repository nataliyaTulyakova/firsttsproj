//Task 1
class CanvasNode {
    constructor(readonly x: number, readonly y: number) {
        this.x = 0;
        this.y = 0;
    }
}

const canvasNode = new CanvasNode(0, 0);
console.log ("------------- Task 1 ---------------");
console.log(`${canvasNode.x} ${canvasNode.y}`);

// @ts-expect-error Property is readonly
canvasNode.x = 10;

// @ts-expect-error Property is readonly
canvasNode.y = 20;

class CanvasNode2 {
    readonly x: number = 0;
    readonly y: number = 0
}
const canvasNode2 = new CanvasNode2();
console.log(`${canvasNode2.x} ${canvasNode2.y}`);
// @ts-expect-error Property is readonly
canvasNode2.x = 10;
// @ts-expect-error Property is readonly
canvasNode2.y = 20;

//Task 2
class CanvasNode3 {
    x = 0;
    y = 0;
    move(newX: number, newY: number) {
        this.x = newX;
        this.y = newY;
    }
}
console.log ("------------- Task 2 ---------------");
const canvasNode3 = new CanvasNode3();
console.log(`${canvasNode3.x} ${canvasNode3.y}`);
canvasNode3.move(10, 20);
console.log(`Move to: ${canvasNode3.x} ${canvasNode3.y}`);

//Task 3
class CanvasNode4 {
    x: number;
    y: number;

    constructor(position?: { x: number; y: number }) {
        this.x = position?.x ?? 0;
        this.y = position?.y ?? 0;
    }

    move(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    get position(): { x: number; y: number } {
        return { x: this.x, y: this.y };
    }
}
const canvasNode4 = new CanvasNode4();
console.log ("------------- Task 3 ---------------");
console.log(`Position: ${canvasNode4.position.x} ${canvasNode4.position.y}`);
console.log(`x: ${canvasNode4.x} y:${canvasNode4.y}`);
canvasNode4.move(10, 20);
console.log(`Move to: x: ${canvasNode4.x} y:${canvasNode4.y}`);
console.log(`Position: ${canvasNode4.position.x} ${canvasNode4.position.y}`);
const canvasNode5 = new CanvasNode4({
    x: 10,
    y: 20,
});
console.log(`Position: ${canvasNode5.position.x} ${canvasNode5.position.y}`);

//Task 4
class CanvasNode5 {
    #x: number;
    #y: number;

    constructor(position?: { x: number; y: number }) {
        this.#x = position?.x ?? 0;
        this.#y = position?.y ?? 0;
    }

    move(x: number, y: number) {
        this.#x = x;
        this.#y = y;
    }
    
    set position(pos: { x: number; y: number }) {
        this.#x = pos.x <= 0 ? 0 : pos.x;
        this.#y = pos.y <= 0 ? 0 : pos.y;
    }

    get position(): { x: number; y: number } {
        return { x: this.#x, y: this.#y };
    }   
}
console.log ("------------- Task 4 ---------------");
const canvasNode6 = new CanvasNode5();
console.log(`Position: ${canvasNode6.position.x} ${canvasNode6.position.y}`);
canvasNode6.position = {x: 10, y: 20 };
console.log(`New position: ${canvasNode6.position.x} ${canvasNode6.position.y}`);
canvasNode6.move(20,30);
console.log(`Move to position: ${canvasNode6.position.x} ${canvasNode6.position.y}`);

