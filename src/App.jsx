import "./App.css";
import { useState } from "react";

import Cabecalho from "./components/Cabecalho";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Rodape from "./components/Rodape";

import deboraImg from "./assets/debora.jpg";
import thalesImg from "./assets/thales.jpg";

export default function App() {

  const alunos = [{
      nome:"Débora Vitória",
      foto: deboraImg,
      facil:`let i = 1;
        let soma = 0;

        while (i <= 32) {
          soma += i;
          i++;
        }

        export const resposta01 = soma;`,
      dificil:`function elementosComNumeroPar(lista) {
        let pares = [];
        let i = 0;
        while (i < lista.length) {
          if (lista[i].numeroAtomico % 2 === 0) {
            pares.push(lista[i]);
          }
          i++;
        }
        return pares;
      }
      export const resposta12 = elementosComNumeroPar;`,
      ajudou:`let profissoes = []
      profissoes.push("programador(a)", "designer",
      "engenheiro(a)", "veterinário(a)", "administrador(a)")
      export const resposta01 = profissoes`,
      naoAjudou:`const carrinho = {
        itens: [],
        adicionarItem: function(nome, preco) {
          this.itens.push({
            nome: nome, 
            preco: preco
          });
        },
          calcularTotal: function() {
          let total = 0;
            for(let i = 0; i < this.itens.length; i++){
              total = total + this.itens[i].preco
        }
          return total
        },
          quantidadeItens: function(){
            return this.itens.length
          }
        }
        carrinho.adicionarItem("Camiseta", 50)
        carrinho.adicionarItem("Calça", 120)

        export const resposta7 = {total: carrinho.calcularTotal(), quantidade: carrinho.quantidadeItens()}`
},
{
      nome: "Thales Henry",
      foto: thalesImg,
      facil:`export const trintaENove = 44 - 10 + 5`,
      dificil:`function buscarTravaLinguasComPalavra(palavra) {
  let resultado = [];
  let i = 0;
  while (i < travaLinguas.length) {
    if (travaLinguas[i].includes(palavra)) {
      resultado.push(travaLinguas[i]);
    }
    i++;
  }
  return resultado;
}
`,
      ajudou:`const produto = {
  nome: "Notebook",
  preco: 3500,
  quantidadeEstoque: 15,
  categoria: "Eletrônicos",
  valorTotalEstoque: function () {
    return this.preco * this.quantidadeEstoque
  }
}
`,
      naoAjudou:`
function elementosComNumeroPar(lista) {
  let pares = [];
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico % 2 === 0) {
      pares.push(lista[i]);
    }
    i++;
  }
  return pares;
}
`
},
{
      nome: "Marcus Vinícios",
      facil:`variável fim = 20
variável começo = 0
enquanto (começo for menor que fim) {
  começo = começo + 1
}`,
      dificil:`function buscarPorNumeroAtomico(lista, numero) {
  let i = 0;

  while (i < lista.length) {
    if (lista[i].numeroAtomico === numero) {
      return lista[i];
    }
    i++;
  }

  return null;
}`,
      ajudou:`let resultadossss = []

for (let i = 0; i < itensDomesticos.length; i++) {
  if (itensDomesticos[i].length > 6) {
    resultadossss.push(itensDomesticos[i])
  }
}`,
      naoAjudou:`export const quarentaETres = 86 / (12 - 5)`
},

{
      nome: "Gabriel Fernando",
      facil:`const aluno = {
  nome: "Thales",
  idade: 15,
  cidade: "Recife",
  curso: "Programção",
}
`,
      dificil:`function buscarPorNumeroAtomico(lista, numeroAtomico) {
  let i = 0
  while (i < lista.length) {
    if (lista[i].numeroAtomico === numeroAtomico) {
      return lista[i]
    }
    i++
  }
  return null
}
`,
      ajudou:`const filme = {
  titulo: "O Poderoso Chefão",
  ano: 1972,
  diretor: "Francis Ford Coppola",
  genero: "Drama",
  disponivelStreaming: true
}
filme.disponivelStreaming = false
`,
      naoAjudou:`const jogador = {
  nome: "Herói",
  vida: 100,
  nivel: 1,
  experiencia: 0,
  atacar: function(dano) {
    this.vida = this.vida - dano
    if (this.vida < 0) {
      this.vida = 0
    }
  },
  ganharExperiencia: function(xp) {
    this.experiencia = this.experiencia + xp
    if (this.experiencia >= 100) {
      this.experiencia = 0
      this.nivel = this.nivel + 1
    }
  },
  status: function() {
  return this.nome + " - Nível " + this.nivel + " - Vida: " + this.vida + " - XP: " + this.experiencia
  }
}
jogador.atacar(30)
jogador.ganharExperiencia(50)
jogador.ganharExperiencia(60)
export const resposta8 = jogador.status()

export const ingredientes = [
  "farinha", "ovos", "leite", "açúcar", "manteiga", "chocolate",
  "fermento", "sal", "queijo", "presunto", "tomate", "cebola",
  "alho", "óleo", "frango"
]
`
},
{
      nome: "Brennda Rykelly",
      facil:`let frutaTemporaria = frutas[2]
frutas[2] = frutas[5]
frutas[5] = frutaTemporaria
export const resposta05 = frutas
`,
      dificil:`function elementosComNumeroPar(lista) {
  let pares = [];
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico % 2 === 0) {
      pares.push(lista[i]);
    }
    i++;
  }
  return pares;
}
`,
      ajudou:`let vertebrados = []
let invertebrados = []
let animais = []
vertebrados.push("elefante", "leopardo", "porco-espinho")
invertebrados.push("polvo", "formiga", "caranguejo")
animais.concat(vertebrados, invertebrados)
export const resposta07 = animais
`,
      naoAjudou:`function buscarPorNumeroAtomico(lista, numeroAtomico) {
  let i = 0;
  while (i < lista.length) {
    if (lista[i].numeroAtomico === numeroAtomico) {
      return lista[i];
    }
    i++;
  }
  return null;
}
`
}]
  const [alunoSelecionado, setAlunoSelecionado] = useState(alunos[0]);

  const paginaInicial = (
    <>
      <h1 className="tituloVitrine">Vitrine de códigos!</h1>
      <Menu
        alunos={alunos}
        selecionarAluno={setAlunoSelecionado}
      />

      {alunoSelecionado && (
        <Card aluno={alunoSelecionado} />
      )}
    </>
  );

  const paginaEquipe = (
    <>
      <h2 className="tituloEquipe">Sobre a equipe</h2>

      <p>Débora Vitória - criou a lista de alunos e o Card</p>
      <p>Thales Henry - organizou a estrutura dos componentes e o Rodapé</p>
      <p>Marcus Vinícios - organizou a estrutura dos componentes dentro do App</p>
      <p>Gabriel Fernando - fez a estrutura dos botões e do Menu</p>
      <p>Brennda Rykelly - organizou o App.css (parte visual E design)</p>
    </>
  );

  const [conteudo, setConteudo] = useState(paginaInicial);

  return (
    <>
      <Cabecalho
        paginaInicial={paginaInicial}
        paginaEquipe={paginaEquipe}
        mudarPagina={setConteudo}
      />

      {conteudo}

      <Rodape />
    </>
  );
}