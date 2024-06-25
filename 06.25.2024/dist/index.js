"use strict";
// Tipos Básicos
let age = 5;
const firstName = "Alisson";
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ["Alisson", "Henrique", "Felipe", "Douglas"];
// Tupla
const person = [1, "Vyke"];
// Lista de Tuplas
const people = [
    [1, "Gideon"],
    [2, "Tarnished"],
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
console.log(direction);
