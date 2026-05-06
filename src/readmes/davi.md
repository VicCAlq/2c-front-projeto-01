> [!TIP]
> Muito fácil

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
> Muito difícil

```js showLineNumbers {1}
/* Questão 11
Usando a mesma lista de ingredientes dos exercícios anteriores.

Crie um objeto chamado `livroReceitas` que funcione como um livro de receitas com:
- receitas: array vazio
- adicionarReceita: método que recebe um objeto receita e adiciona ao array
- buscarReceitaPorNome: método que recebe um nome e retorna a receita encontrada ou null se não existir
- listarTodasReceitas: método que retorna um array com apenas os nomes de todas as receitas
- filtrarPorIngrediente: método que recebe um ingrediente e retorna todas as receitas que contêm esse ingrediente

Primeiro, crie dois objetos de receita:
- `strogonoff`: nome "Strogonoff de Frango", ingredientes: frango, cebola, alho, manteiga, creme de leite (use apenas ingredientes da lista: frango, cebola, alho, manteiga), tempo: 40 minutos
- `macarrao`: nome "Macarrão com Queijo", ingredientes: macarrão não está na lista, então use: queijo, manteiga, sal, tempo: 20 minutos

Adicione ambas ao livro de receitas usando adicionarReceita().
Armazene na variável resposta11 o resultado de filtrarPorIngrediente("manteiga") (deve retornar as receitas que usam manteiga).
*/
// Escreva o código da solução abaixo:
const livroReceitas = {
  receitas: [],

  adicionarReceita: function(receita) {
    this.receitas.push(receita)
  },

  buscarReceitaPorNome: function(nome) {
    return this.receitas.find(r => r.nome === nome) || null
  },

  listarTodasReceitas: function() {
    return this.receitas.map(r => r.nome)
  },

  filtrarPorIngrediente: function(ingrediente) {
    return this.receitas.filter(r => r.ingredientes.includes(ingrediente))
  }
}

// Receitas
const strogonoff = {
  nome: "Strogonoff de Frango",
  ingredientes: ["frango", "cebola", "alho", "manteiga"],
  tempo: 40
}

const macarrao = {
  nome: "Macarrão com Queijo",
  ingredientes: ["queijo", "manteiga", "sal"],
  tempo: 20
}

// Execução
livroReceitas.adicionarReceita(strogonoff)
livroReceitas.adicionarReceita(macarrao)

export const resposta11 = livroReceitas.filtrarPorIngrediente("manteiga")
```

> [!TIP]
> Ajudou a entender muita coisa

```js showLineNumbers {1}
/* Questão 10 - Lacos While
Crie uma função chamada "buscarPorNumeroAtomico" que recebe dois 
argumentos: a lista "elementos" e um número atômico. A função deve 
retornar o objeto do elemento que possui aquele número atômico, 
ou null se não encontrar. Envie na resposta a função criada, sem 
executá-la (basta enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function buscarPorNumeroAtomico(lista, numeroAtomico) {
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico === numeroAtomico) {
      return lista[i];
    }
    i++;
  }
  return null;
}
export const resposta10 = buscarPorNumeroAtomico;

```

> [!WARNING]
> Não ajudou a entender nada

```js showLineNumbers {1}
/* Questão 1
Crie uma função chamada "saudacao" que não recebe nenhum argumento e retorna 
a string "Bom dia!". Envie na resposta a função criada, sem executá-la (basta 
enviar o nome da função sem os parênteses)
*/
// Escreva o código da solução abaixo:
function saudacao() {
  return "Bom dia!";
}

console.log(saudacao())
export const resposta01 = saudacao;

```