import styles from '../styles/main.js';
import { motion } from 'framer-motion';
import { Zap, Home, Users } from 'lucide-react';

export default function Cabecalho({ paginaAtual, setPagina }) {
  return (
    <motion.header
      style={styles.cabecalho}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
    >
      <motion.div
        style={styles.cabecalhoLogo}
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Zap size={22} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
        Vitrine de Códigos
      </motion.div>
      <nav style={styles.cabecalhoNav}>
        <motion.button
          style={paginaAtual === 'principal' ? styles.cabecalhoBotaoAtivo : styles.cabecalhoBotao}
          onClick={() => setPagina('principal')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Home size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Página Principal
        </motion.button>
        <motion.button
          style={paginaAtual === 'sobre' ? styles.cabecalhoBotaoAtivo : styles.cabecalhoBotao}
          onClick={() => setPagina('sobre')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Users size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
          Sobre a Equipe
        </motion.button>
      </nav>
    </motion.header>
  );
}
