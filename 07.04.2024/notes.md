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
