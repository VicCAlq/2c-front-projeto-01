const styles = {
  botao: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '10px',
    width: '90px',
    height: '110px',
    borderRadius: '14px',
    border: '1px solid rgba(255,255,255,0.06)',
    background: 'linear-gradient(145deg, #1e1e2a, #16161f)',
    cursor: 'pointer',
  },

  botaoSelecionado: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    padding: '10px',
    width: '90px',
    height: '110px',
    borderRadius: '14px',
    border: '1px solid rgba(139, 92, 246, 0.6)',
    background: 'linear-gradient(145deg, #2b1f4f, #1a1233)',
    cursor: 'pointer',
  },

  botaoFoto: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
  },

  botaoFotoSelecionado: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #8b5cf6',
  },

  botaoNome: {
    fontSize: '12px',
    color: '#e4e4e7',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
};

export default styles;