import styles from '../styles/main.js'
import { motion } from 'framer-motion'
import { Braces, Home, Users } from 'lucide-react'

const LOGO_TEXT = 'Vitrine de Códigos'

const letterVariants = {
  hidden: { opacity: 0, y: -12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 200, damping: 18 },
  },
}

const containerLetters = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
}

export default function Cabecalho({ paginaAtual, setPagina }) {
  const navItems = [
    { id: 'principal', label: 'Início', icon: <Home size={16} /> },
    { id: 'sobre', label: 'Sobre', icon: <Users size={16} /> },
  ]

  return (
    <motion.header
      style={{
        ...styles.cabecalho,
        backdropFilter: 'blur(12px)',
        background: 'rgba(15, 15, 20, 0.6)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      {/* LOGO */}
      <motion.div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontWeight: '600',
          letterSpacing: '0.5px',
        }}
        variants={containerLetters}
        initial="hidden"
        animate="show"
      >
        <motion.div
          initial={{ rotate: -15, scale: 0.6, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 260 }}
          style={{
            color: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Braces size={22} />
        </motion.div>

        <span style={{ display: 'flex', overflow: 'hidden' }}>
          {LOGO_TEXT.split('').map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </span>
      </motion.div>

      {/* NAV */}
      <nav style={{ display: 'flex', gap: '10px' }}>
        {navItems.map(({ id, label, icon }) => {
          const ativo = paginaAtual === id

          return (
            <motion.button
              key={id}
              onClick={() => setPagina(id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.3s ease',

                background: ativo
                  ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)'
                  : 'rgba(255,255,255,0.05)',

                color: ativo ? '#fff' : '#ccc',

                boxShadow: ativo
                  ? '0 0 15px rgba(139,92,246,0.4)'
                  : 'none',
              }}
            >
              {icon}
              {label}
            </motion.button>
          )
        })}
      </nav>
    </motion.header>
  )
}
