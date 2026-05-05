export const styles = {
  cabecalho: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    background: 'rgba(255, 255, 255, 0.8)',
    borderBottom: '1px solid #ccc',
    gap: '2rem',
  },
  btnCabecalho: {
    background: 'transparent',
    border: '1px solid #333',
    color: '#333',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 1rem',
    borderRadius: '4px'
  },

  rodape: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2rem',
    background: '#f9f9f9',
    color: '#333',
    borderTop: '1px solid #ccc',
    marginTop: 'auto',
    textAlign: 'center'
  },
  linkRodape: {
    color: '#0066cc',
    textDecoration: 'underline',
    marginBottom: '1rem',
    fontSize: '1rem',
  },

  menu: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
    margin: '2rem auto',
    padding: '2rem',
    background: '#ffef00',
    border: '6px solid #000',
    boxShadow: '10px 10px 0 #000',
    maxWidth: '900px'
  },

  botao: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#fff',
    borderRadius: '8px',
    padding: '1rem',
    cursor: 'pointer',
    width: '120px',
    border: '1px solid #ccc',
  },
  botaoFotoContainer: {
    marginBottom: '0.5rem'
  },
  botaoFoto: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '1px solid #ddd',
  },
  botaoNome: {
    fontWeight: 'normal',
    color: '#333',
    textAlign: 'center',
    fontSize: '0.9rem',
  },

  cardContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '0 1rem'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    border: '1px solid #ccc',
  },
  cardSection: {
    background: '#fafafa',
    padding: '1rem',
    border: '1px solid #eee',
    borderRadius: '4px',
  },
  cardTitle: {
    color: '#333',
    marginBottom: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: 'bold'
  },
  cardCode: {
    background: '#eee',
    color: '#333',
    padding: '1rem',
    borderRadius: '4px',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    border: '1px solid #ccc'
  },

  conteudoContainer: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  conteudoItem: {
    background: '#fff',
    padding: '1rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
  },
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }
};