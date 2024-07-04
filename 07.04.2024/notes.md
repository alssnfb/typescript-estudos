# Tipos Avançados

## Type Aliases

- o Type Aliases funciona como uma base para um objeto para simplificar e evitar repetição desnecessária de código

- Ex de como funciona:

```
    
    // Este "Type Employee" vai servir como base para montagem dos outros objetos

    type Employee = {
        readonly id: number,
        name: string,
        retire: (date: Date) => void
    }

    // Objeto criado usando a base criada acima

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

```    
## Union Types

- Como o nome sugere é um tipo que serve para união de dois tipos diferentes, funcionando basicamente como um "ou" para uma função

- Ex:

```

    function kgToLbs(weight: number | string) {
        if (typeof weight === 'number')
            return weight * 2.2;
        else
            return parseInt(weight) * 2.2;
    }

    kgToLbs(10);
    kgToLbs('10Kg');

```
## Intersection Types

- Funciona de maneira que combina mais de um type em um type só, para criar um type de interseção que tenha mais de uma função

- Ex:

```

// Criação dos dois types que vão ser utilizados no intersection

    type Draggable = {
        drag: () => void
    }

    type Resizable = {
        resize: () => void
    }

// Type criado combinando os dois types acima em um type só

    type UIWidget = Draggable & Resizable

// Utilizando o Type criado com Intersection 
    let textbox: UIWidget = {
        drag: () => {},
        resize: () => {}   
    }
```

## Literal Types

- Os literal types servem para dar um valor exato e especifico para alguma variavel ao invés de apenas dizer se ela é um number, string, boolean etc...

- Ex:

```
    // Literal (valor exato, específico)

    // É possível tbm criar um Type Aliases pra facilitar mais

    type Quantity = 50 | 100;

    let quantity: Quantity = 100;
```

## Nullable Types

- O Typescript por padrão impede a possibilidade de valores nulos ou indefinidos de existirem (a não ser que seja alterado no TS Config)

- Entretanto não é recomendado ativar essa opção já que é contrária justamente ao propósito da tipagem estática do TypeScript

- Ainda sim é possível setar valores nulos ou indefinidos da forma abaixo:

- Ex:

```
   
   // Ao utilizar um Union Type para criar um valor nulo ou indefinido é possível passar esses valores

    function greet(name: string | null | undefined){
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Olá!');
    }

    greet(undefined)
```    