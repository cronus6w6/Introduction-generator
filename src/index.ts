class Card{
    blockA: HTMLDivElement;
    blockB: HTMLDivElement;
    status: Boolean;
    degree: number;
    constructor(front: HTMLDivElement, back: HTMLDivElement) {
        this.blockA = front;
        this.blockB = back;
        this.status = false;
        this.degree = 0;
        this.blockRotateDeg = 0;
    }

    set blockRotateSpeed(speed: number) {
        this.blockA.style.transition = `transform ${1 / speed}s`;
        this.blockB.style.transition = `transform ${1 / speed}s`;
    }

    set blockRotateDeg(degree: number) {
        this.blockA.style.transform = `rotateX(${degree}deg)`;
        this.blockB.style.transform = `rotateX(${degree + 180}deg)`;
        this.status = ((degree + 90) % 180) >= 180;
        this.degree = degree;
    }
    get blockRotateDeg(): number {
        return this.degree;
    }

    get frontBlock(): HTMLDivElement {
        return this.status ? this.blockB : this.blockA;
    }

    get backBlock(): HTMLDivElement {
        return this.status ? this.blockA : this.blockB;
    }

    set frontBlockText(text: string) {
        (this.status ? this.blockB : this.blockA).innerHTML = text;
    }

    set backBlockText(text: string) {
        (this.status ? this.blockA : this.blockB).innerHTML = text;
    }
}

window.onload = () => {
    var container = document.getElementById("block-container") as HTMLDivElement;
    var block1 = document.createElement("div");
    var block2 = document.createElement("div");
    container.append(block1);
    container.append(block2);
    var card = new Card(block1, block2);
    card.blockRotateSpeed = 2;
    card.frontBlockText = "test";
    card.backBlockText = "AAA";
    // card.blockRotateDeg += 180;
    // setInterval(() => {card.blockRotateDeg += 180}, 500);
}