> [!TIP]
> Muito fácil

```js showLineNumbers {1}
/* Questão 01
Crie um laço de repetição while que armazene em uma variável a soma dos números
de 1 a 32. Envie o valor resultante na variável resposta01.
*/
// Escreva o código da solução abaixo:
let soma1 = 0
let i1 = 1

while (i1 <= 32) {
  soma1 += i1
  i1++
}

export const resposta01 = soma1
```

> [!WARNING]
> Muito difícil

```js showLineNumbers {1}
/* Questão 6
Crie uma função chamada "obterTravaLingua" que recebe um número como 
argumento (representando um índice) e retorna o trava-língua correspondente 
àquele índice na lista "travaLinguas". Considere que o primeiro item 
está no índice 0. Envie na resposta a função criada, sem executá-la 
(basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function obterTravaLingua(i) {
    if (i > travaLinguas.length - 1) {
        return "Ta acessando o vazio pai?"
    }
    return travaLinguas[i]
}

export const resposta06 = obterTravaLingua
```

> [!TIP]
> Ajudou a entender muita coisa

```js showLineNumbers {1}
/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
// Array na linha abaixo
const frutas = ["maçã", "banana", "laranja", "uva", "pêra", "manga"]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = frutas[1]

```

> [!WARNING]
> Não ajudou a entender nada

```js showLineNumbers {1}
/* Questão 03
Crie um laço de repetição while que conte quantos números negativos existem no
array abaixo. Armazene a quantidade encontrada na variável resposta03.

const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
*/
// Escreva o código da solução abaixo:
const numeros = [15, -3, 8, -12, 0, -7, 22, -1, 9, -5, 18, -2]
let contadorNegativos = 0
let i3 = 0

while (i3 < numeros.length) {
  if (numeros[i3] < 0) {
    contadorNegativos++
  }
  i3++
}

export const resposta03 = contadorNegativos

```