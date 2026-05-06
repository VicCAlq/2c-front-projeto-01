
import codigosBruno   from '../codigos/bruno/index.js'
import codigosBernardo   from '../codigos/bernardo/index.js'
import codigosCaique  from '../codigos/caique/index.js'
import codigosJoao  from '../codigos/joão/index.js'
import codigosPrimo  from '../codigos/primo/index.js'







const SEEDS = [
  'gato', 'sol', 'livro', 'azul', 'vento', 'pedra', 'rio',
  'montanha', 'cafe', 'flor', 'estrela', 'mar', 'arvore',
  'nuvem', 'fogo', 'lua', 'areia', 'neve', 'musica', 'chuva',
  'tigre', 'lobo', 'coruja', 'fenix', 'dragao', 'panda',
]

const CORES = [
  '6366f1', 'ec4899', '22c55e', 'f59e0b', '3b82f6',
  'ef4444', '8b5cf6', '14b8a6', 'f97316', '06b6d4',
]

function gerarFotoAleatoria() {
  const seed = SEEDS[Math.floor(Math.random() * SEEDS.length)]
  const cor  = CORES[Math.floor(Math.random() * CORES.length)]
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=${cor}`
}


export const alunos = [
  {
    nome:    'Bruno Gustavo',
    foto:    gerarFotoAleatoria(),
    codigos: codigosBruno,
  },
    {
    nome:    'Bernardo Pedro',
    foto:    gerarFotoAleatoria(),
    codigos: codigosBernardo,
  },
   {
    nome:    'Caique Alburqueque',
    foto:    gerarFotoAleatoria(),
    codigos: codigosCaique,
  },
   {
    nome:    'Gabriel Primo',
    foto:    gerarFotoAleatoria(),
    codigos: codigosPrimo,
  },
   {
    nome:    'João Guilherme',
    foto:    gerarFotoAleatoria(),
    codigos: codigosJoao,
  },
  
]



export const equipe = [
  { nome: 'Bruno',    descricao: 'Desenvolveu Conteudo.jsx e implemetou as blibliotecas' },
  { nome: 'Bernardo', descricao: 'Fez os cards' },
  { nome: 'Gabriel Primo', descricao: 'Página sobre equipe' },
  { nome: 'João Guilherme', descricao: 'Fez o rodapé' },
  { nome: 'Caique Alburqueque', descricao: 'Fez o cabecalho' },
]
