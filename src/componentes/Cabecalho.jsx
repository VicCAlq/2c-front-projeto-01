import { motion } from 'framer-motion'
import { Braces, Home, Users } from 'lucide-react'

export default function Cabecalho({ paginaAtual, setPagina }) {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '14px 20px',

        background: 'rgba(20,20,30,0.7)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',

        color: '#e5e7eb',
      }}
    >
      {/* LOGO */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <Braces size={18} style={{ color: '#8b5cf6' }} />
        <strong>Vitrine de Códigos</strong>
      </div>

      {/* MENU */}
      <nav style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setPagina('principal')}
          style={{
            padding: '6px 10px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            background: paginaAtual === 'principal'
              ? 'rgba(139,92,246,0.3)'
              : 'transparent',
            color: '#fff',
          }}
        >
          <Home size={14} /> Início
        </button>

        <button
          onClick={() => setPagina('sobre')}
          style={{
            padding: '6px 10px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            background: paginaAtual === 'sobre'
              ? 'rgba(139,92,246,0.3)'
              : 'transparent',
            color: '#fff',
          }}
        >
          <Users size={14} /> Sobre
        </button>
      </nav>
    </motion.header>
  )
}