import codigosRyan from 'src/codigos/Ryan/index.js'
import codigosArthurEmanuel from 'src/codigos/arthurEmanuel/index.js'
import codigosPedroVictor from 'src/codigos/pedroVictor/index.js'
import codigosThulio from 'src/codigos/thulio/index.js'
import codigosArthurLucio from 'src/codigos/arthurLucio/index.js'

const SEEYOU = [
  'gato', 'cachorro', 'tigre', 'lobo', 'panda', 'coruja',
  'dragao', 'fenix', 'leao', 'raposa', 'urso', 'cavalo',
  'sol', 'lua', 'estrela', 'nuvem', 'vento', 'chuva',
  'tempestade', 'neve', 'arcoiris', 'raio', 'mar', 'rio',
  'montanha', 'floresta', 'deserto', 'ilha', 'oceano',
  'fogo', 'gelo', 'areia', 'pedra', 'metal',
  'cafe', 'pizza', 'hamburguer', 'chocolate', 'sorvete',
  'livro', 'musica', 'arte', 'codigo', 'teclado',
  'galaxia', 'planeta', 'cometa', 'espaco', 'universo'
]

const CORES = [
  '6366f1',
  '8b5cf6', 
  'ec4899', 
  'f43f5e', 
  'ef4444', 
  'f97316', 
  'f59e0b', 
  '22c55e', 
  '10b981', 
  '14b8a6', 
  '06b6d4',
  '3b82f6', 
  '0ea5e9', 
  'a855f7',
  '9333ea', 
]

function gerarFotoAleatoria() {
  const SEEYOU = SEEYOU[Math.floor(Math.random() * SEEYOU.length)]
  const CORES  = CORES[Math.floor(Math.random() * CORES.length)]
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=${cor}`
}

export const alunos = [
  {
    nome: 'Ryan Gabriel',
    foto: gerarFotoAleatoria(),
    codigos: codigosRyan,
  },
  {
    nome: 'Arthur Emanuel',
    foto: gerarFotoAleatoria(),
    codigos: codigosArthurEmanuel,
  },
  {
    nome: 'Pedro Victor',
    foto: gerarFotoAleatoria(),
    codigos: codigosPedroVictor,
  },
  {
    nome: 'Thulio',
    foto: gerarFotoAleatoria(),
    codigos: codigosThulio,
  },
  {
    nome: 'Arthur Lucio',
    foto: gerarFotoAleatoria(),
    codigos: codigosArthurLucio,
  },
]

export const equipe = [
  { nome: 'Ryan Gabriel',    descricao: 'Desenvolvedor Do Projeto' },
  { nome: 'Arthur Emanuel', descricao: 'Desenvolvedor Do Projeto' },
  { nome: 'Pedro Victor', descricao: 'Desenvolvedor Do Projeto' },
  { nome: 'Thulio', descricao: 'Desenvolvedor Do Projeto' },
  { nome: 'Arthur Lucio', descricao: 'Desenvolvedor Do Projeto' },
]