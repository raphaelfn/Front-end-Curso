
# Operadores

## Aritméticos
+ somar
- subtrair
* multiplicar
/ dividir
% resto da divisão

## Comparadores matemáticos: teste lógico, retorno booleano (true/false):
<   menor que
>   maior que
<=  menor ou igual
>=  maior ou igual

## Comparadores Lógicos: teste lógico, retorno booleano (true/false)
==     igualdade entre sentenças  (valor)
!=     diferença entre sentenças  (valor)
===    igualdade entre sentenças  (valor e tipo)
!==   diferenças entre sentenças  (valor e tipo)

## Operadores de lógica e junção lógica
!    NÃO (NOT)
&&   E (AND)
||   OU (OR)


O sinal de exclamação (!) éo operador NOT (não), utilizada para negara sentença que vem
na sequência.

#### Exemplos:
a != b      // o valor de a é diferente de b
x !== y     // o valor e o tipo de x são diferentes de y
!a == b     // o valor de a não é igual ao valor de b


#### As condições lógicas são convertidas em números binários:
true é equivalente a 1 
false é equivalente a 0

#### Operador lógico de tribuição

Tem a capacidade de atribuir valor a uma variável a partir de uma condição lógica,
economiza IFs

Exemplo:

var meuCarro = cor == "preto" ? "preto" : "branco";

## If
if (...) {

}

## Else
Else (...) {

}

## Else if
else if (...) {

}

* Exemplo:

if (cor == "preto") {
    meuCarro = "preto";
} else if (cor == "vermelho"){
    meuCarro = "cinza";
} else if (cor == "amarelo"){
    meuCarro = "branco";
} else {
    meuCarro = "azul";
}

## Switch

switch (cor) {
    case 'branco' :
        meuCarro = 'branco';
        break;
    case 'vermelho' :
        meuCarro = 'vermelho';
        break; 
    case 'amarelo' :
        meuCarro = 'amarelo';
        break;
    default :
        console.log('não temos a cor desejada');
}


## Média

var nota1 = 10;
var nota2 = 8;
var nota3 = 9;
var nota4 = 7;
var media = (nota1 + nota2 + nota3 + nota4) / 4;
if( media > 8) {
    console.log("Aluno aprovado")
} else {
    console.log("Aluno em recuperação")
}