type employee = {
    id: number,
    name: string,
    position: string,
    salary: number
}

const employee: employee = {
    id: 10,
    name: "John",
    position: "9",
    salary: 1000
}

const printLog = (message: string) => {}

printLog(employee.name)