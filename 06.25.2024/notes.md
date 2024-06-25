# Typescript Anotações

## Tipagem Dinâmica e Tipagem Estática

### Tipagem Dinâmica

- Em linguagens com Tipagem Dinâmica:
    > - O tipo de uma variável é associado com o seu valor e não é explicitamente declarado
    > - O tipo de uma variável pode ser alterado livremente durante a execução do código
- Exemplos de linguagem com Tipagem Dinâmcica (JavaScript, Python, Ruby, PHP):

```
    let age;

    age = 21;
    typeof age // number

    age = '21'
    typeof age // string
```
### Tipagem Estática

- Em linguagens com Tipagem Estática
    > - O tipo de uma variável é explicitamente declarado
    > - O tipo de uma variável não pode ser alterado durante a execução do código
    > - Os valores assinalados à uma variável precisam respeitar o seu tipo previamente definido
- Exemplo de linguagem com Tipagem Estática (Java, C#, Rust, Go,TypeScript):

```
    let age: number;

    age = 21;
    typeof age // number

    age = '21' // Error: age must be of type number
```    
## Linguagens Estáticas e Compiladores

- Linguagens estáticas posuem compiladores, que verificam as variáveis presentes no código, seus tipos e seus valores (e apontam eventuais erros)

- O compilador de cada linguagem possui suas próprias características
    > - O TypeScript utiliza o TypeScript Compiler

## O Que é TypeScript?

- É uma linguagem desenvolvida com base no JavaScript

- Adiciona novas funcionalidades e Tipagem Estática ao JavaScript

- Todo código TypeScript é convertido para o seu equivalente em JS pelo TypeScript Compiler
    > - Portanto, podemos usá-lo tanto no back-end quanto no front-end
    > - Isso acontece pois os navegadores não entendem TypeScript

- O TS por ser uma linguagem estática permite evitar situações como esta:

```
    Função com JavaScript sem tipo definido:

    const sum = (num1, num2) => {
        return num1 + num2;
    };

    sum("2", "3"); // 23 (este erro acontece por não ter um tipo definido para os parâmetros da função)

    Função no TypeScript com tipo definido:

    const sum = (num1: number, num2: number) =>{
        return num1 + num2;
    };

    sum("2", "3"); //error (o compilador vai detectar o erro e não vai rodar o código por ele ser do tipo String e não Number como definido na função)
 ```    
