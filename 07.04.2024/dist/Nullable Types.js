function greet(name) {
    if (name)
        console.log(name.toLocaleUpperCase());
    else
        console.log('Olá!');
}
greet(undefined);
