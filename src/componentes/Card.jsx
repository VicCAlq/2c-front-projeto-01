import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Tag, Copy, Check, ChevronDown, ChevronUp } from 'lucide-react'

const MAX_LINES = 14

export default function Card({ titulo, categoria, codigo, index = 0 }) {
  const [copiado, setCopiado] = useState(false)
  const [expandido, setExpandido] = useState(false)

  const linhas = (codigo || '').split('\n')
  const muitasLinhas = linhas.length > MAX_LINES

  const codigoExibido =
    muitasLinhas && !expandido
      ? linhas.slice(0, MAX_LINES).join('\n') +
        '\n\n// ... clique em "Ver mais"'
      : codigo

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(codigo || '')
      setCopiado(true)
      setTimeout(() => setCopiado(false), 2000)
    } catch (error) {
        console.log('Erro ao copiar:', error)
      }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 18,
        delay: index * 0.05,
      }}
      whileHover={{ y: -6 }}
      style={{
        borderRadius: '18px',
        padding: '18px',
        background: 'rgba(20,20,30,0.72)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 12px 35px rgba(0,0,0,0.28)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* glow mais suave */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(circle at top left, rgba(139,92,246,0.12), transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* HEADER */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '10px',
          }}
        >
          <h3
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '15px',
              color: '#e5e7eb',
              fontWeight: '500',
            }}
          >
            <Code2 size={15} style={{ opacity: 0.7 }} />
            {titulo || 'Sem título'}
          </h3>

          <motion.button
            onClick={copiar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '12px',
              padding: '6px 10px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)',
              cursor: 'pointer',
              background: copiado
                ? 'rgba(52,211,153,0.12)'
                : 'rgba(255,255,255,0.05)',
              color: copiado ? '#34d399' : '#cfcfcf',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <AnimatePresence mode="wait">
              {copiado ? (
                <motion.span
                  key="ok"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Check size={13} /> Copiado
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <Copy size={13} /> Copiar
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* BADGE */}
        {categoria && (
          <span
            style={{
              fontSize: '11px',
              padding: '4px 8px',
              borderRadius: '999px',
              background: 'rgba(139,92,246,0.12)',
              color: '#c4b5fd',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              marginBottom: '10px',
            }}
          >
            <Tag size={10} />
            {categoria}
          </span>
        )}

        {/* CÓDIGO */}
        <pre
          style={{
            fontSize: '13px',
            padding: '14px',
            borderRadius: '12px',
            background: '#0b0b12',
            color: '#e5e7eb',
            overflowX: 'auto',
            lineHeight: '1.5',
            border: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <code>{codigoExibido || '// Adicione seu código aqui'}</code>
        </pre>

        {/* EXPANDIR */}
        {muitasLinhas && (
          <motion.button
            onClick={() => setExpandido(!expandido)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              marginTop: '10px',
              fontSize: '12px',
              background: 'none',
              border: 'none',
              color: '#a78bfa',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <AnimatePresence mode="wait">
              {expandido ? (
                <motion.span key="up">
                  <ChevronUp size={13} /> Recolher
                </motion.span>
              ) : (
                <motion.span key="down">
                  <ChevronDown size={13} />
                  Ver mais ({linhas.length - MAX_LINES})
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        )}
      </div>
    </motion.div>
  )
}