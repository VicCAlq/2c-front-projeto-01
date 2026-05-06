

const codigo2 = `
/* Questão 7
Crie um objeto chamado carrinho que represente um carrinho de compras com:
- itens: array vazio
- adicionarItem: método que recebe nome e preço, cria um objeto {nome, preco} e adiciona ao array itens
- calcularTotal: método que soma todos os preços dos itens e retorna o total
- quantidadeItens: método que retorna quantos itens existem no carrinho
Execute:
1. Adicione os itens: {nome: "Camiseta", preco: 50} e {nome: "Calça", preco: 120}
2. Armazene na variável resposta7 um objeto com: { total: resultado de calcularTotal(), quantidade: resultado de quantidadeItens() }
*/
// Escreva o código da solução abaixo:
let carrinho = {
  itens: [],
  adicionarItem: function(nome, preco) {
    this.itens.push({ nome, preco })
  },
  calcularTotal: function() {
  let somaValor = 0
  this.itens.forEach(item => {
    somaValor += item.preco
  })
  return somaValor
},
  quantidadeItens: function() {
    return this.itens.length
  }
}
carrinho.adicionarItem("Camiseta", 50)
carrinho.adicionarItem("Calça", 120)
let compras = {
  total: carrinho.calcularTotal(),
  quantidade: carrinho.quantidadeItens()
}
`

export default codigo2
