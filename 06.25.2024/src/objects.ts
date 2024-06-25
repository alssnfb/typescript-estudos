// Type
type Order = {
    productId: string,
    price: number
};

type User = {
    firstName: string,
    age: number,
    email: string,
    password?: string, // o "?" serve para definir como opcional
    orders: Order[]
    register(): string;
};

const user: User = {
   firstName: 'Miquella',
   age: 24,
   email: 'miquellasaint@gmail.com',
   password: 'maleniabladeofmiquella',
   orders: [{productId: '1', price: 220}],
   register(){
    return 'a';
   } 
};

const printLog = (message: string) => {}

printLog(user.password!)

// Unions
type Author = {
    books: string[]
};

const author: Author & User = {
    age: 40,
    books: ['Memórias Póstumas de Brás Cuba'],
    email: "Machado.Ass@gmail.com",
    firstName: "Machado",
    orders: [],
    register() {
        return 'a'
    }
};

// Interfaces
interface UserInterface {
   readonly firstName: string,
    email: string
};

const emailUser: UserInterface = {
    email: 'fulano@gmail.com',
    firstName: 'fulano',
};

interface AuthorInterface{
    books: string[]
};

const newAuthor: UserInterface & AuthorInterface = {
    books: [],
    email: "ciclano@gmail.com",
    firstName: "ciclano"
};

type Grade = number | string
const grade: Grade = 1;