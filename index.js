"use strict";
var Card = /** @class */ (function () {
    function Card(front, back) {
        this.blockA = front;
        this.blockB = back;
        this.status = false;
        this.degree = 0;
        this.blockRotateDeg = 0;
    }
    Object.defineProperty(Card.prototype, "blockRotateSpeed", {
        set: function (speed) {
            this.blockA.style.transition = "transform " + 1 / speed + "s";
            this.blockB.style.transition = "transform " + 1 / speed + "s";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "blockRotateDeg", {
        get: function () {
            return this.degree;
        },
        set: function (degree) {
            this.blockA.style.transform = "rotateX(" + degree + "deg)";
            this.blockB.style.transform = "rotateX(" + (degree + 180) + "deg)";
            this.status = ((degree + 90) % 180) >= 180;
            this.degree = degree;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "frontBlock", {
        get: function () {
            return this.status ? this.blockB : this.blockA;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "backBlock", {
        get: function () {
            return this.status ? this.blockA : this.blockB;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "frontBlockText", {
        set: function (text) {
            (this.status ? this.blockB : this.blockA).innerHTML = text;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "backBlockText", {
        set: function (text) {
            (this.status ? this.blockA : this.blockB).innerHTML = text;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
}());
window.onload = function () {
    var container = document.getElementById("block-container");
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
};
