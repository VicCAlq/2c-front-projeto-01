import React from 'react';

export default function Rodape() {
  return (
    <footer className="rodape">
      <a 
        href="https://github.com/usuario/repositorio" 
        target="_blank" 
        rel="noreferrer" 
        className="linkRodape"
      >
        Link do Repositório
      </a>
      <p style={{ margin: 0, fontSize: '0.9rem' }}>
        Criado por: Davi Barbosa, Gabriel Vitor, Samuel Erivaldo, Saulo Bizerril, Walleysson Ferreira
      </p>
    </footer>
  );
}
