import styles from '../styles/main.js';
import { motion } from 'framer-motion';
import { Code2, Tag } from 'lucide-react';

export default function Card({ titulo, categoria, codigo, index }) {
  return (
    <motion.div
      style={styles.card}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 16,
        delay: index * 0.1,
      }}
      whileHover={{
        y: -6,
        boxShadow: '0 16px 48px rgba(139, 92, 246, 0.25)',
        borderColor: 'rgba(139, 92, 246, 0.5)',
      }}
    >
      <h3 style={styles.cardTitulo}>
        <Code2 size={16} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
        {titulo || 'Sem título'}
      </h3>
      <p style={styles.cardCategoria}>
        <Tag size={12} style={{ marginRight: '4px', verticalAlign: 'middle' }} />
        {categoria}
      </p>
      <pre style={styles.cardCodigo}>
        <code>{codigo || '// Adicione seu código aqui'}</code>
      </pre>
    </motion.div>
  );
}
