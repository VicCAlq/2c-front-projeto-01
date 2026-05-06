import styles from '../styles/main.js';
import { motion } from 'framer-motion';
import Botao from './Botao.jsx';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.85 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 150, damping: 15 },
  },
};

export default function Menu({ alunos, alunoSelecionado, setAlunoSelecionado }) {
  return (
    <motion.div
      style={styles.menu}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {alunos.map((aluno) => (
        <motion.div key={aluno.nome} variants={itemVariants}>
          <Botao
            nome={aluno.nome}
            foto={aluno.foto}
            selecionado={alunoSelecionado === aluno.nome}
            onClick={() => setAlunoSelecionado(aluno.nome)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
