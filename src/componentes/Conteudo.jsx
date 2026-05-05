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

export default function Conteudo({ equipe = [] }) {
  return (
    <motion.div
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '20px',
        color: '#fff',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* TÍTULO */}
      <div style={{ marginBottom: '25px' }}>
        <h1 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Users size={26} />
          Sobre a Equipe
        </h1>

        <p style={{ color: '#9ca3af' }}>
          Conheça as pessoas por trás do projeto
        </p>
      </div>

      {/* LISTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {equipe.map((membro, i) => (
          <motion.div
            key={membro.nome}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              borderRadius: '12px',
              background: 'rgba(20,20,30,0.6)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {/* NÚMERO */}
            <span style={{ color: '#6b7280', fontSize: '12px' }}>
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
              }}
            />

            {/* INFO */}
            <div>
              <h2 style={{ fontSize: '14px' }}>
                {membro.nome}

                {i === 0 && (
                  <span style={{
                    marginLeft: 6,
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '999px',
                    background: 'rgba(139,92,246,0.2)',
                    color: '#c4b5fd',
                  }}>
                    Dev
                  </span>
                )}
              </h2>

              <p style={{ fontSize: '12px', color: '#9ca3af' }}>
                {membro.descricao || 'Descrição pendente...'}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}