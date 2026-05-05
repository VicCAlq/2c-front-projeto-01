import { motion } from 'framer-motion'
import Botao from './Botao.jsx'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 16,
    },
  },
}

export default function Menu({
  alunos,
  alunoSelecionado,
  setAlunoSelecionado,
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '14px',
        padding: '10px 0',
      }}
    >
      {alunos.map((aluno) => (
        <motion.div
          key={aluno.nome}
          variants={itemVariants}
          whileHover={{ y: -6, scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <Botao
            nome={aluno.nome}
            foto={aluno.foto}
            selecionado={alunoSelecionado === aluno.nome}
            onClick={() => setAlunoSelecionado(aluno.nome)}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}