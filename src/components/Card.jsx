import React from 'react';

export default function Card({ aluno }) {
  if (!aluno) {
    return (
      <div className="cardContainer">
        <div className="card" style={{ alignItems: 'center', textAlign: 'center' }}>
          <p style={{ color: '#333' }}>
            Selecione um integrante
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="cardContainer">
      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <img src={aluno.foto} alt="" style={{width: '40px', height: '40px', borderRadius: '50%'}} />
          <h2 style={{ margin: 0, color: '#333', fontSize: '1.5rem' }}>
            Códigos de {aluno.nome}
          </h2>
        </div>
        
        <div className="cardSection">
          <h3 className="cardTitle">Questão muito fácil</h3>
          <pre className="cardCode">
            {aluno.codigos?.facil || "// Código"}
          </pre>
        </div>

        <div className="cardSection">
          <h3 className="cardTitle">Questão muito difícil</h3>
          <pre className="cardCode">
            {aluno.codigos?.dificil || "// Código"}
          </pre>
        </div>

        <div className="cardSection">
          <h3 className="cardTitle">Questão que ajudou a entender muito</h3>
          <pre className="cardCode">
            {aluno.codigos?.ajudou || "// Código"}
          </pre>
        </div>

        <div className="cardSection">
          <h3 className="cardTitle">Questão que não ajudou a entender nada</h3>
          <pre className="cardCode">
            {aluno.codigos?.naoAjudou || "// Código"}
          </pre>
        </div>
      </div>
    </div>
  );
}