import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

export default function Rodape() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        marginTop: '40px',
        padding: '20px',
        textAlign: 'center',

        background: 'rgba(20,20,30,0.6)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255,255,255,0.06)',

        color: '#9ca3af',
        fontSize: '13px',
      }}
    >
      {/* Ícone + texto */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px' }}>
        <Code2 size={14} style={{ opacity: 0.8 }} />
        <span>Vitrine de Códigos • Feito com React + Framer Motion</span>
      </div>

      {/* Linha secundária */}
      <p style={{ marginTop: '6px', fontSize: '11px', color: '#6b7280' }}>
        © {new Date().getFullYear()} - Todos os direitos reservados
      </p>
    </motion.footer>
  )
}