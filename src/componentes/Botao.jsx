import styles from '../styles/main.js';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function Botao({ nome, foto, selecionado, onClick }) {
  return (
    <motion.button
      style={selecionado ? styles.botaoSelecionado : styles.botao}
      onClick={onClick}
      whileHover={{ scale: 1.07, y: -4 }}
      whileTap={{ scale: 0.95 }}
      animate={
        selecionado
          ? {
              boxShadow: [
                '0 0 15px rgba(139, 92, 246, 0.2)',
                '0 0 30px rgba(139, 92, 246, 0.35)',
                '0 0 15px rgba(139, 92, 246, 0.2)',
              ],
            }
          : {}
      }
      transition={
        selecionado
          ? {
              boxShadow: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
              default: { type: 'spring', stiffness: 300, damping: 20 },
            }
          : { type: 'spring', stiffness: 300, damping: 20 }
      }
    >
      <motion.img
        src={foto}
        alt={`Foto de ${nome}`}
        style={
          selecionado
            ? styles.botaoFotoSelecionado
            : styles.botaoFoto
        }
        animate={selecionado ? { rotate: [0, 5, -5, 0] } : {}}
        transition={{ duration: 0.5 }}
      />

      <span style={styles.botaoNome}>
        <User
          size={14}
          style={{ marginRight: '4px', verticalAlign: 'middle' }}
        />
        {nome}
      </span>
    </motion.button>
  );
}