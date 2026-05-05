import styles from '../styles/main.js'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const SEEDS = [
  'gato','sol','livro','azul','vento','pedra','rio',
  'montanha','cafe','flor','estrela','mar','arvore',
  'nuvem','fogo','lua','areia','neve','musica','chuva',
]

const CORES = ['6366f1','ec4899','22c55e','f59e0b','3b82f6','ef4444','8b5cf6']

function getAvatar(index) {
  const seed = SEEDS[index % SEEDS.length]
  const cor  = CORES[index % CORES.length]
  return `https://api.dicebear.com/9.x/pixel-art/svg?seed=${seed}&backgroundColor=${cor}`
}

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 110, damping: 18 },
  },
}

export default function Conteudo({ equipe }) {
  return (
    <motion.div
      style={{
        ...styles.conteudo,
        maxWidth: '900px',
        margin: '0 auto',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* TÍTULO */}
      <div style={{ marginBottom: '24px' }}>
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontSize: '26px',
            color: '#e5e7eb',
          }}
        >
          <Users size={26} style={{ opacity: 0.85 }} />
          Sobre a Equipe
        </h1>

        <p style={{ color: '#9ca3af', marginTop: '6px' }}>
          Conheça as pessoas por trás deste projeto
        </p>
      </div>

      {/* LISTA */}
      <motion.div variants={containerVariants} initial="hidden" animate="show">
        {equipe.map((membro, i) => (
          <motion.div
            key={membro.nome}
            variants={itemVariants}
            whileHover={{ y: -4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              padding: '14px',
              marginBottom: '12px',
              borderRadius: '16px',

              backdropFilter: 'blur(12px)',
              background: 'rgba(20,20,30,0.65)',
              border: '1px solid rgba(255,255,255,0.06)',

              transition: '0.3s',
              position: 'relative',
            }}
          >
            {/* NÚMERO */}
            <span
              style={{
                fontSize: '11px',
                color: '#6b7280',
                minWidth: '26px',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>

            {/* AVATAR */}
            <motion.img
              src={getAvatar(i)}
              alt={membro.nome}
              whileHover={{ scale: 1.08 }}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.08)',
              }}
            />

            {/* INFO */}
            <div style={{ flex: 1 }}>
              <h2
                style={{
                  fontSize: '15px',
                  color: '#e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {membro.nome}

                {i === 0 && (
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '2px 6px',
                      borderRadius: '999px',
                      background: 'rgba(139,92,246,0.2)',
                      color: '#c4b5fd',
                    }}
                  >
                    Dev
                  </span>
                )}
              </h2>

              <p style={{ fontSize: '13px', color: '#9ca3af' }}>
                {membro.descricao || 'Descrição pendente...'}
              </p>
            </div>

            {/* glow leve (bem mais sutil agora) */}
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '60px',
                height: '60px',
                background:
                  'radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%)',
                pointerEvents: 'none',
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}