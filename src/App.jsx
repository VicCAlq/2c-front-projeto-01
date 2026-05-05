import { useState, useEffect } from 'react';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import Menu from './components/Menu';
import Botao from './components/Botao';
import Card from './components/Card';
import Conteudo from './components/Conteudo';

const equipe = [
  {
    id: 1,
    nome: "Davi Barbosa",
    foto: "https://ui-avatars.com/api/?name=Davi+Barbosa&background=3498db&color=fff",
    corTema: "#3498db",
    descricao: "Implementou o componente Menu e Card",
    codigos: { facil: ``, dificil: ``, ajudou: ``, naoAjudou: `` }
  },
  {
    id: 2,
    nome: "Gabriel Vitor",
    foto: "https://ui-avatars.com/api/?name=Gabriel+Vitor&background=9b59b6&color=fff",
    corTema: "#9b59b6",
    descricao: "Criou a base do projeto e dos comonentes, e estilizou o fundo",
    codigos: { facil: ``, dificil: ``, ajudou: ``, naoAjudou: `` }
  },
  {
    id: 3,
    nome: "Samuel Erivaldo",
    foto: "https://ui-avatars.com/api/?name=Samuel+Erivaldo&background=2ecc71&color=fff",
    corTema: "#2ecc71",
    descricao: "Desenvolveu o roteamento condicional entre as páginas",
    codigos: { facil: ``, dificil: ``, ajudou: ``, naoAjudou: `` }
  },
  {
    id: 4,
    nome: "Saulo Bizerril",
    foto: "https://ui-avatars.com/api/?name=Saulo+Bizerril&background=e67e22&color=fff",
    corTema: "#e67e22",
    descricao: "Estruturou os estilos CSS in JS no objeto styles",
    codigos: { facil: ``, dificil: ``, ajudou: ``, naoAjudou: `` }
  },
  {
    id: 5,
    nome: "Walleysson Ferreira",
    foto: "https://ui-avatars.com/api/?name=Walleysson+Ferreira&background=e74c3c&color=fff",
    corTema: "#e74c3c",
    descricao: "Desenvolveu o componente Conteúdo e lista de equipe",
    codigos: { facil: ``, dificil: ``, ajudou: ``, naoAjudou: `` }
  }
];

function App() {
  const [pagina, setPagina] = useState('home');
  const [alunoSelecionadoId, setAlunoSelecionadoId] = useState(null);

  const [mousePos, setMousePos] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const alunoSelecionado = equipe.find(a => a.id === alunoSelecionadoId);

  return (
    <div className="appContainer" style={{ position: 'relative', overflow: 'hidden' }}>

      <div className="fluid-bg">
        <div
          className="fluid-blob"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background: alunoSelecionado ? alunoSelecionado.corTema : '#8b5cf6'
          }}
        ></div>
        <div className="fluid-glass"></div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Cabecalho setPagina={setPagina} paginaAtual={pagina} />

        <main style={{ flex: 1, padding: '2rem 1rem' }}>
          {pagina === 'home' ? (
            <div className="fade-in">
              <h1 style={{ textAlign: 'center', color: '#111', fontWeight: 900, fontSize: '3.5rem', margin: '1rem 0', textShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                Vitrine de Códigos
              </h1>
              <p style={{ textAlign: 'center', color: '#333', fontSize: '1.3rem', marginBottom: '3rem', fontWeight: 'bold' }}>
                Conheça os desafios superados pelos integrantes!
              </p>

              <Menu>
                {equipe.map((aluno, idx) => (
                  <div key={aluno.id} style={{ animationDelay: `${idx * 0.1}s` }} className="slide-up">
                    <Botao
                      aluno={aluno}
                      isSelected={alunoSelecionadoId === aluno.id}
                      onClick={() => setAlunoSelecionadoId(aluno.id)}
                    />
                  </div>
                ))}
              </Menu>

              <div style={{ marginTop: '3rem' }}>
                <Card aluno={alunoSelecionado} />
              </div>
            </div>
          ) : (
            <div className="fade-in">
              <Conteudo equipe={equipe} />
            </div>
          )}
        </main>

        <Rodape />
      </div>
    </div>
  );
}

export default App;
