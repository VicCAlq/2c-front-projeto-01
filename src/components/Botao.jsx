import React from 'react';

export default function Botao({ aluno, onClick, isSelected }) {
  return (
    <button className={`botao ${isSelected ? 'botao-selected' : ''}`} onClick={onClick}>
      <div className="botaoFotoContainer">
        <img 
          src={aluno.foto} 
          alt={`Foto de ${aluno.nome}`} 
          className="botaoFoto" 
        />
      </div>
      <span className="botaoNome">
        {aluno.nome}
      </span>
    </button>
  );
}