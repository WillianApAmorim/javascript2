//let maior = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//console.log(maior)

//1 - Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na tela a soma entre A e B é mostre se a soma é menor que C.
// const a = 10;
// const b = 20;
// const c = 15;
// let soma = a + b;

// console.log(`Valor de a: ${a}`);
// console.log(`Valor de b: ${b}`);
// console.log(`Valor de c: ${c}`);
// console.log(`Valor da soma: ${soma}`);

// if (soma > c) {
//     console.log(`A variável soma (${soma}) é maior que a variável c (${c}).`);
// } else {
//     console.log(`A variável c (${c}) é maior que a variável soma (${soma}).`);
// }


//2 transforme em função




// function somaTudo(a, b, c) {
//     let soma = a + b;

//     console.log(`Valor de A: ${a}`);
//     console.log(`Valor de B: ${b}`);
//     console.log(`Valor de C: ${c}`);

//     if (soma > c) {
//         console.log(`A soma de A (${a}) + B (${b}) é maior do que C (${c})`);
//     } else {
//         console.log(`A soma de A (${a}) + B (${b}) não é maior do que C (${c})`);
//     }
// }

// const a = parseFloat(prompt("Digite o valor de a:"));
// const b = parseFloat(prompt("Digite o valor de b:"));
// const c = parseFloat(prompt("Digite o valor de c:"));

// somaTudo(a, b, c);


// 2 - Faça um algoritmo para receber um número qualquer e imprimir na tela se o número é par ou ímpar, positivo ou negativo.



// function descubra(num) {
//     if (num % 2 === 1 || num % 2 === -1) {
//         console.log(`O número ${num} é ímpar`);
//     } else {
//         console.log(`O número ${num} é par`);
//     }

//     if (num >= 0) {
//         console.log(`O número ${num} é positivo`);
//     } else {
//         console.log(`O número ${num} é negativo`);
//     }
// }

// const num = parseFloat(prompt("Digite um número"));

// descubra(num);

//3 - Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B forem iguais, deverá somar os dois valores, caso contrário devera multiplicar A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a uma variável C e imprimir seu valor na tela.

// const a = parseFloat(prompt("Digite o valor de A:"));
// const b = parseFloat(prompt("Digite o valor de B:"));
// 2
// if(a === b) {
//     let c = a + b;
//     console.log(`a variavel A: ${a} é igual a variavel B: ${b} e a soma deles é: ${c}`)
// } else {
//     let c = a * b
//     console.log(`a variavel A: ${a} é diferente da variavel B: ${b} e o resultado da multiplicação deles é: ${c}`)
// }


// em função

// function somaMultiplica (a,b) {
//     if(a === b) {
//         let c = a + b;
//         console.log(`a variavel A: ${a} é igual a variavel B: ${b} e a soma deles é: ${c}`)
//     } else {
//         let c = a * b
//         console.log(`a variavel A: ${a} é diferente da variavel B: ${b} e o resultado da multiplicação deles é: ${c}`)
//     }
// }

// const a = parseFloat(prompt("Digite o valor de A:"));
// const b = parseFloat(prompt("Digite o valor de B:"));

// somaMultiplica(a,b);


// com arrow function

// const somaMultiplica = (a, b) => {
//     if (a === b) {
//         let c = a + b;
//         console.log(`A variável A: ${a} é igual à variável B: ${b} e a soma deles é: ${c}`);
//     } else {
//         let c = a * b;
//         console.log(`A variável A: ${a} é diferente da variável B: ${b} e o resultado da multiplicação deles é: ${c}`);
//     }
// }

// const a = parseFloat(prompt("Digite o valor de A:"));
// const b = parseFloat(prompt("Digite o valor de B:"));

// somaMultiplica(a, b);

//4 - Faça um algoritmo que receba um número inteiro e imprima na tela o seu antecessor e o seu sucessor.

// const a = parseFloat(prompt("Digite um numero:"));

// console.log(a + 1)
// console.log(a - 1)

// 5 - Faça um algoritmo que leia o valor do salário mínimo e o valor do salário de um usuário, calcule quantos salários mínimos esse 

// const salario = parseFloat(prompt("Quanto voce recebe:"));
// const s_minimo = salario / 1412

// console.log(`Se você recebe R$${salario}, você recebe o equivalente a ${s_minimo} salários minimos.`)

// 6 - Faça um algoritmo que leia um valor qualquer e imprima na tela com um reajuste de 5%.


// const reajuste = (a) => {
//     let b = a + (5 % a)
//     console.log(b)
// }

// const a =  100;

// reajuste(a)

// 7 - Faça um algoritmo que leia dois valores booleanos (lógicos) e determine se ambos são VERDADEIRO ou FALSO.

// const a = true
// const b = false

// if(a & b === true) {
//     console.log(true)
// } else {
//     console.log(false)
// }