import React from 'react';

export default function Cabecalho({ setPagina, paginaAtual }) {
  return (
    <header className="cabecalho">
      <button 
        className="btnCabecalho"
        onClick={() => setPagina('home')}
      >
        Página Principal
      </button>
      
      <button 
        className="btnCabecalho"
        onClick={() => setPagina('sobre')}
      >
        Sobre a Equipe
      </button>
    </header>
  );
}