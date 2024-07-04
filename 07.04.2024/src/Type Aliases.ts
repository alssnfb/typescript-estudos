
// Este "Type Employee" vai servir como base para montagem dos outros objetos, como se ele fosse um molde para criar depois objetos do mesmo tipo

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employee: Employee = {
    
    id: 1,
    name: "Alisson",
    retire: (date: Date) => {
        console.log(date);
    }
}

let jorge: Employee = {

    id: 2,
    name: "Jorge",
    retire: (date: Date) => {
        console.log(date)
    }
}