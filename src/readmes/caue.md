> [!TIP]
> Muito fácil

```js showLineNumbers {1}
/* Questão 1
Crie uma lista (com const) chamado "frutas" com os itens: "maçã", "banana", "laranja", 
"uva", "pêra", "manga". Armazene na variável "resposta01" o segundo item dessa lista.
*/
// Array na linha abaixo
const frutas = ["maçã","banana","laranja","uva", "pêra", "manga"] 

// Operações necessárias e resposta a partir da linha abaixo
export const resposta01 = frutas[1]
```

> [!WARNING]
> Muito difícil

```js showLineNumbers {1}
/* Questão 07
Continuando com a lista de nomes, crie um novo array contendo apenas os nomes
que possuem 5 letras ou menos. Armazene o novo array na variável resposta07.
*/
// Escreva o código da solução abaixo:

export const resposta07 = (() => {
  const resposta = []
  let i = 0
  while (i < nomes.length) {
    if (nomes[i].length <= 5) {
      resposta.push(nomes[i])
    }
    i++
  }
  return resposta
})()
```

> [!TIP]
> Ajudou a entender muita coisa

```js showLineNumbers {1}

/* Questão 04
Utilizando um laço de repetição while, faça a soma de todos os múltiplos de 7 
entre 1 e 100 (incluindo 100). Armazene o resultado na variável resposta04.
*/
// Escreva o código da solução abaixo:
let impar1 = 0
let sla2 = 1

while( sla2 <= 100){
  if(sla2 % 7 === 0) {
     impar1 += sla2;
     

  }
   sla2++;
}
export const resposta04 = impar1
```

> [!WARNING]
> Não ajudou a entender nada

```js showLineNumbers {1}
/* Questão 3
Crie um objeto chamado `filme` com as propriedades:
- titulo: "O Poderoso Chefão"
- ano: 1972
- diretor: "Francis Ford Coppola"
- genero: "Drama"
- disponivelStreaming: true
Em seguida, altere o valor da propriedade disponivelStreaming para false e adicione uma nova propriedade chamada `nota` com o valor 9.5.
Armazene na variável resposta3 um array contendo todas as chaves (nomes das propriedades) do objeto filme usando Object.keys().
*/
// Escreva o código da solução abaixo:
let filme = {
  titulo: "O Poderoso Chefão",
  ano: 1972,
  diretor: "Francis Ford Coppola",
  genero: "Drama",
  disponivelStreaming: true,
}
filme.disponivelStreaming = false 
filme.nota = 9.5

export const resposta3 = Object.keys(filme);

```