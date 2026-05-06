> [!TIP]
> Muito fácil

```js showLineNumbers {1}
/* Questão 2
Continuando com a lista de profissões da questão 1, use o método pop para remover
o último item da lista e armazená-lo em uma variável. Envie esta variável na
resposta02.
*/
// Operações necessárias e resposta a partir da linha abaixo
const removidoPop = profissoes.pop()
export const resposta02 = removidoPop

```

> [!WARNING]
> Muito difícil

```js showLineNumbers {1}
/* Questão 11
Crie uma função chamada "listarNomesElementos" que recebe a lista 
"elementos" como argumento e retorna uma nova lista contendo 
apenas os nomes (strings) dos elementos, na mesma ordem. Envie na 
resposta a função criada, sem executá-la (basta enviar o 
nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function listarNomesElementos(lista) {
  let nomes = [];
  let i = 0;
  while (i < lista.length) {
    nomes.push(lista[i].nome);
    i++;
  }
  return nomes;
}
export const resposta11 = listarNomesElementos;
```

> [!TIP]
> Ajudou a entender muita coisa

```js showLineNumbers {1}
/* Questão 02
Utilizando um laço de repetição while, calcule a soma de todos os números ímpares
de 1 até 50 (incluindo 50). Armazene o resultado da soma na variável resposta02.
*/
// Escreva o código da solução abaixo:
let soma2 = 0
let i2 = 1

while (i2 <= 50) {
  if (i2 % 2 !== 0) {
    soma2 += i2
  }
  i2++
}

export const resposta02 = soma2

```

> [!WARNING]
> Não ajudou a entender nada

```js showLineNumbers {1}
/* Questão 1
Usando const ao invés de let, crie uma lista vazia chamada profissoes. Usando o
método push, adicione nesta lista as profissões "programador(a)", "designer",
"engenheiro(a)", "veterinário(a)" e "administrador(a)". Após adicionar os itens,
envie a lista com as profissões adicionadas na resposta01.
*/
// Array na linha abaixo
const profissoes = []
// Operações necessárias e resposta a partir da linha abaixo
profissoes.push("programador(a)", "designer", "engenheiro(a)", "veterinário(a)", "administrador(a)")
export const resposta01 = profissoes

```
