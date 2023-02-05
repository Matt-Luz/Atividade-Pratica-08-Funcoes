// Atividade 08 - 01

/* 

    Crie uma função que recebe 3 notas de um aluno por parâmetro e
    uma letra. Se a letra for A a função deve calcular a média aritmética,
    se for P, a média ponderada (peso: 5, 3 e 2).

*/

// let nota1 = Number(prompt('Informe a primeira nota:'));
// let nota2 = Number(prompt('Informe a segunda nota:'));
// let nota3 = Number(prompt('Informe a terceira nota:'));
// let letra = prompt('Informe a letra:');

function calcularMedia(nota1, nota2, nota3, letra) {

    let media;
    if(letra === 'A' || letra === 'a') {
        media = (nota1 + nota2 + nota3) / 3;
        console.log(media);
    } else {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
        console.log(media);
    };

};

calcularMedia();



// Atividade 08 - 02

/* 

    Crie uma função que recebe um valor inteiro e retorne verdadeiro se
    for ímpar ou falso se for par.

*/



function valor(inteiro) {
    inteiro = Number (prompt('Informe um número inteiro.'));
    if (inteiro % 2 === 0) {
        console.log('O número é par.');
    } else {
        console.log('O número é impar');
    }
}

valor();



// Atividade 08 - 03

/* 

    Crie uma função que recebe por parâmetro um valor inteiro e
    positivo e retorne verdadeiro se o número for primo ou falso se não
    for.

*/

function primo(valorP) {
    valorP = Number (prompt('Informe um número inteiro positivo.'));
    if (valorP % 5 != 0 && valorP % 3 != 0 && valorP % 2 != 0 && valorP != 1 || valorP === 2 || valorP === 5 || valorP === 3) {
        console.log('O número é primo.');
    } else {
        console.log('O número não é primo.');
    }
}

primo();



// Atividade 08 - 04

/* 

    Crie uma função que recebe por parâmetro o tempo de duração de
    uma fábrica expressa em segundos e retorna esse tempo em horas,
    minutos e segundos.

    Ex:
    Entrada: 3672
    Saída: 1:1:12

*/

function tempoFabrica(horas, min, segundos) {
    const entrada = Number(prompt('Insira o tempo em segundos:'));

    horas = (Math.trunc((entrada / 3600)));
    min = (Math.round((entrada % 3600) / 60));
    segundos = ((entrada % 3600) % 60);
    
    console.log(`Horas: ${horas}, Minutos: ${min}, Segundos: ${segundos}`);
    
}

tempoFabrica()



// Atividade 08 - 05 

/* 

    Crie uma função que recebe um valor inteiro e retorne verdadeiro se
    é um valor perfeito ou falso se não for. Um valor é dito perfeito
    quando ele é igual a soma dos seus divisores excetuando ele
    próprio.

    Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores

*/

function numeroPerfeito(numero) {
    let divisor = 0;

    for (let i = 0; i < numero; i++) {
        if (numero % i === 0) {
            divisor += i;
            console.log(i);
        }
        
    }

    if (numero === divisor) {
        console.log(`O número ${numero} é perfeito!`);
    } else {
        console.log(`O número ${numero} não é perfeito!`);
    }
}

numeroPerfeito(28);




// Atividade 08 - 06

/* 

    Crie uma função chamada acessoAoSite() que não tenha
    parâmetro. Esta função será chamada ao abrir a página e mostrará
    um alerta informando “Bem vindo ao site”.

*/

function acessoAoSite() {
    alert('Bem vindo ao site!');
}

acessoAoSite();



// Atividade 08 - 07

/* 

    Crie uma função chamada mostrarMensagem() que não tenha
    parâmetro. Esta função será chamada ao abrir a página e mostrará
    uma mensagem no console.log() informando “Acesso à aplicação
    NomeAplicação” e um alerta informando “Bem vindo à aplicação
    NomeApliação”. Sendo que o nome da aplicação deve ser salvo em
    uma variável para mostrar nas mensagens.

*/

function mostrarMensagem() {
    let aplicacao = 'Barion Van Stranhaus';
    console.log(`Acesso a aplicação ${aplicacao}`);
    alert(`Bem vindo à aplicação ${aplicacao}`);
}

mostrarMensagem()



// Atividade 08 - 08

/* 

    Crie uma função chamada mostrarDobro(num), que recebe um
    parâmetro sendo um número inteiro. Esta função será chamada ao
    abrir a página e mostrará um alerta com o resultado. Exemplo: “O
    dobro do número 5 é 10.”

*/

function mostrarDobro(num) {
    num = Number(prompt('Informe um número inteiro:'));
    if (num >= 0) {
        dobro = (num * 2);
        alert(`O dobro do número ${num} é ${dobro}`)
    } else {
        alert('O valor digitado é inválido')     
    }
}

mostrarDobro()



// Atividade 08 - 09

/* 

    Crie uma função chamada calcularMedia(nota1, nota2, nota3,
    nome), que recebe 4 parâmetros sendo três inteiros e um texto
    (String). Esta função será chamada ao abrir a página e mostrará um
    alerta com a média. Exemplo: “João, sua média é 70.” A função
    também deve mostrar no console.log() as notas recebidas. Exemplo
    “Nota 1: 60,Nota 2: 70,Nota 3: 80”.

*/

function calcularMedia02(nota01, nota02, nota03, nome) {
    let media = (nota01 + nota02 + nota03) / 3;
    alert(`${nome}, a suma média é de ${media.toFixed(2)}`);
}

let nome = prompt('Informe seu nome:');
let n01 = Number(prompt('Informe sua primeira nota:'));
let n02 = Number(prompt('Informe sua segunda nota:'));
let n03 = Number(prompt('Informe sua terceira nota:'));

console.log(`${nome}, suas notas são:`);
console.log(`Nota 01: ${n01}.`);
console.log(`Nota 02: ${n02}.`);
console.log(`Nota 03: ${n03}.`);

calcularMedia02(n01, n02, n03, nome);