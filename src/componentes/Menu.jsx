import styles from '../styles/main.js'
import { motion } from 'framer-motion'
import Botao from './Botao.jsx'

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 120, damping: 18 },
  },
}

export default function Menu({ alunos, alunoSelecionado, setAlunoSelecionado }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        ...styles.menu,
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        justifyContent: 'center',
      }}
    >
      {alunos.map((aluno) => (
        <motion.div
          key={aluno.nome}
          variants={itemVariants}
          whileHover={{ y: -4 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <Botao
            nome={aluno.nome}
            foto={aluno.foto}
            totalCodigos={aluno.codigos?.length ?? 0}
            selecionado={alunoSelecionado === aluno.nome}
            onClick={() => setAlunoSelecionado(aluno.nome)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}