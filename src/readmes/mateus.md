> [!NOTE]  
> OI VITINHO!!
> Nenhuma questão foi difícil, então escolhi as mais divertidas :)

> [!TIP]
> Muito fácil

```js showLineNumbers {1}
/* Questão 6 - Listas 1
Crie um array (também com const ao invés de let) chamado "numeros" com os valores
7, 2, 4, 9, 8, 6, 1 nesta ordem. Armazene na variável "resposta06" o resultado do
número no índice zero multiplicado pelo item no penúltimo índice.
*/
// Array na linha abaixo
const numeros = [7, 2, 4, 9, 8, 6, 1]
// Operações necessárias e resposta a partir da linha abaixo
export const resposta06 = numeros[0] * numeros[numeros.length - 2]

```

> [!WARNING]
> Muito difícil

```js showLineNumbers {1}
/* Questão 7 - POO
Crie um objeto chamado `carrinho` que represente um carrinho de compras com:
- itens: array vazio
- adicionarItem: método que recebe nome e preço, cria um objeto {nome, preco} e adiciona ao array itens
- calcularTotal: método que soma todos os preços dos itens e retorna o total
- quantidadeItens: método que retorna quantos itens existem no carrinho
Execute:
1. Adicione os itens: {nome: "Camiseta", preco: 50} e {nome: "Calça", preco: 120}
2. Armazene na variável resposta7 um objeto com: { total: resultado de calcularTotal(), quantidade: resultado de quantidadeItens() }
*/
// Escreva o código da solução abaixo:
const carrinho = {
  itens: [],

  adicionarItem: function(nome, preco) {
    this.itens.push({nome: nome, preco: preco})
  },

  calcularTotal: function() {
    let i = 0

    for(it of this.itens) {
      i += it.preco
    }

    return i
  },

  quantidadeItens: function() {
    return this.itens.length
  },
}
export const resposta7 = { total: carrinho.calcularTotal(), quantidade: carrinho.quantidadeItens() }

```

> [!TIP]
> Ajudou a entender muita coisa

```js showLineNumbers {1}
/* Questão 8 - POO
Crie um objeto chamado `jogador` que represente um personagem de jogo com:
- nome: "Herói"
- vida: 100
- nivel: 1
- experiencia: 0
- atacar: método que recebe dano e diminui a vida (não deixe a vida ficar negativa, mínimo é 0)
- ganharExperiencia: método que recebe xp e adiciona à experiência. Se experiência >= 100, aumenta nivel em 1 e zera experiencia
- status: método que retorna uma string: "[nome] - Nível [nivel] - Vida: [vida] - XP: [experiencia]"
Execute:
1. Chame atacar(30)
2. Chame ganharExperiencia(50)
3. Chame ganharExperiencia(60) (isso deve fazer subir de nível)
4. Armazene na variável resposta8 o resultado de status()
*/
// Escreva o código da solução abaixo:
const jogador = {
  nome: "Herói",
  vida: 100,
  nivel: 1,
  experiencia: 0,

  atacar: function(dano) {
    this.vida -= dano
    if (this.vida < 0) {
      this.vida = 0
    }
  },

  ganharExperiencia: function(xp) {
    this.experiencia += xp

    if (this.experiencia >= 100) {
      this.nivel += 1
      this.experiencia = 0
    }
  },

  status: function() {
    return `${this.nome} - Nível ${this.nivel} - Vida: ${this.vida} - XP: ${this.experiencia}`
  }
}

jogador.atacar(30)
jogador.ganharExperiencia(50)
jogador.ganharExperiencia(60)

export const resposta8 = jogador.status()

```

> [!WARNING]
> Não ajudou a entender nada

```js showLineNumbers {1}
/* Questão 01 - Lacos For   
Utilizando um laço de repetição for, calcule a soma de todos os números de 1 a 100
(incluindo 100). Armazene o resultado na variável resposta01.
*/
// Escreva o código da solução abaixo:
let somaDe1a100 = 0

for (let i = 1; i <= 100; i++) {
  somaDe1a100 += i
}

export const resposta01 = somaDe1a100

```