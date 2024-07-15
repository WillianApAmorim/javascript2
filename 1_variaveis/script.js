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



function descubra(num) {
    if (num % 2 === 1 || num % 2 === -1) {
        console.log(`O número ${num} é ímpar`);
    } else {
        console.log(`O número ${num} é par`);
    }

    if (num >= 0) {
        console.log(`O número ${num} é positivo`);
    } else {
        console.log(`O número ${num} é negativo`);
    }
}

const num = parseFloat(prompt("Digite um número"));

descubra(num);