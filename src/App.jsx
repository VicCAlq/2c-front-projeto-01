import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import styles from './styles/main.js'

import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'
import Menu from './components/Menu.jsx'
import Card from './components/Card.jsx'
import Conteudo from './components/Conteudo.jsx'

import { alunos, equipe } from './data/alunos.js'

// animações
const fadeSlideLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: { duration: 0.35 },
}

const fadeSlideRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.35 },
}

const fadeSlideUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.3 },
}

function App() {
  const [paginaAtual, setPagina] = useState('principal')
  const [alunoSelecionado, setAlunoSelecionado] = useState(null)

  const alunoAtivo = alunos.find((a) => a.nome === alunoSelecionado)

  return (
    <div style={styles.appContainer}>
      <Cabecalho paginaAtual={paginaAtual} setPagina={setPagina} />

      <main style={styles.mainContent}>
        <AnimatePresence mode="wait">

          {paginaAtual === 'principal' && (
            <motion.div key="principal" style={styles.paginaPrincipal} {...fadeSlideLeft}>

              <p style={styles.tituloSecao}>
                Selecione um aluno para ver os códigos
              </p>

              <Menu
                alunos={alunos}
                alunoSelecionado={alunoSelecionado}
                setAlunoSelecionado={setAlunoSelecionado}
              />

              <AnimatePresence>
                {alunoAtivo && (
                  <motion.div style={styles.cardContainer} {...fadeSlideUp}>
                    {alunoAtivo.codigos.map((cod, index) => (
                      <Card
                        key={index}
                        titulo={cod.titulo}
                        categoria={cod.categoria}
                        codigo={cod.codigo}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )}

          {paginaAtual === 'sobre' && (
            <motion.div key="sobre" {...fadeSlideRight}>
              <Conteudo equipe={equipe} />
            </motion.div>
          )}

        </AnimatePresence>
      </main>

      <Rodape />
    </div>
  )
}

export default App