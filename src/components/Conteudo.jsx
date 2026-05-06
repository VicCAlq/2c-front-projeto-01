import styles from '../styles/main.js';
import { motion } from 'framer-motion';
import { Users, UserCheck } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 14 },
  },
};

export default function Conteudo({ equipe }) {
  return (
    <motion.div
      style={styles.conteudo}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h1
        style={styles.conteudoTitulo}
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      >
        <Users size={28} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
        Sobre a Equipe
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {equipe.map((membro) => (
          <motion.div
            key={membro.nome}
            style={styles.conteudoItem}
            variants={itemVariants}
            whileHover={{
              y: -4,
              boxShadow: '0 12px 40px rgba(139, 92, 246, 0.2)',
              borderColor: 'rgba(139, 92, 246, 0.45)',
            }}
          >
            <h2 style={styles.conteudoNome}>
              <UserCheck size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
              {membro.nome}
            </h2>
            <p style={styles.conteudoDescricao}>{membro.descricao || 'Descrição pendente'}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
