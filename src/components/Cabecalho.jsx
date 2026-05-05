import React from 'react';

export default function Cabecalho({ setPagina, paginaAtual }) {
  return (
    <header className="cabecalho">
      <div className="cabecalho-logo">
        <span className="cabecalho-logo-icon">{'</>'}</span>
        <span className="cabecalho-logo-texto">Vitrine  Time 6</span>
      </div>  

      <nav className="cabecalho-nav">
        <button
          className={`btnCabecalho ${paginaAtual === 'home' ? 'btnCabecalho-ativo' : ''}`}
          onClick={() => setPagina('home')}
        >
          🏠 Página Principal
        </button>

        <button
          className={`btnCabecalho ${paginaAtual === 'sobre' ? 'btnCabecalho-ativo' : ''}`}
          onClick={() => setPagina('sobre')}
        >
          👥 Sobre a Equipe
        </button>
      </nav>
    </header>
  );
}
