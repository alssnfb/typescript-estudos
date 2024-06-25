// Tipos Básicos
let age: number = 5;
const firstName: string = "Alisson"
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ["Alisson", "Henrique", "Felipe", "Douglas"]

// Tupla
const person: [number, string] = [1, "Vyke"]

// Lista de Tuplas
const people: [number, string][] = [
    [1, "Gideon"],
    [2, "Tarnished"],
]

// Intersections
const productId: string | number | boolean = false

// Enum
enum Direction{
    Up = 1,
    Down = 2,
    Left = 'Esquerda',
}

const direction = Direction.Left;

// Type Assertions
const productName: any = 'Boné'

// let itemId = productName as string;
let itemId = <string>productName

console.log(direction);