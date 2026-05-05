import styles from '../styles/main.js';
import {motion} from 'framer-motion';
import {user} from 'lucide-react';

export default function Botao({ nome, foto, selecionado, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 12px',
        borderRadius: '999px',
        border: '1px solid rgba(255,255,255,0.06)',
        cursor: 'pointer',

        backdropFilter: 'blur(10px)',
        background: selecionado
          ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)'
          : 'rgba(255,255,255,0.05)',

        color: selecionado ? '#fff' : '#ccc',

        boxShadow: selecionado
          ? '0 0 18px rgba(139,92,246,0.4)'
          : 'none',

        transition: 'all 0.3s ease',
      }}
    >
      {/* FOTO */}
      <motion.img
        src={foto}
        alt={`Foto de ${nome}`}
        style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: selecionado
            ? '2px solid rgba(255,255,255,0.3)'
            : '2px solid rgba(255,255,255,0.08)',
        }}
        animate={selecionado ? { scale: 1.05 } : { scale: 1 }}
      />

      {/* NOME */}
      <span
        style={{
          display: 'flex',
          alignItems: 'center',
          fontSize: '13px',
          fontWeight: '500',
        }}
      >
        <User size={13} style={{ marginRight: '4px' }} />
        {nome}
      </span>
    </motion.button>
  )
}