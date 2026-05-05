import React from 'react';

export default function Conteudo({ equipe }) {
  return (
    <div className="conteudoContainer">
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#333' }}>
            Sobre a Equipe
          </h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>
            Conheça as pessoas que ajudaram a construir este projeto.
          </p>
      </div>

      {equipe.map((membro, index) => (
        <div key={index} className="conteudoItem">
          <img 
            src={membro.foto} 
            alt={`Foto de ${membro.nome}`} 
            style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} 
          />
          <div>
            <h2 style={{ margin: '0 0 0.5rem 0', color: '#333', fontSize: '1.2rem' }}>
              {membro.nome}
            </h2>
            <p style={{ margin: 0, color: '#666', fontSize: '1rem' }}>
              <strong>O que fez:</strong> {membro.descricao}
            </p>
          </div>
        </div>
      ))}    </div>
  );
}