import React from 'react';

export default function Card({ aluno }) {
  if (!aluno) {
    return (
      <div className="cardContainer">
        <div className="card card-vazio">
          <span className="card-vazio-icon">👆</span>
          <p className="card-vazio-texto">Selecione um integrante no menu acima</p>
        </div>
      </div>
    );
  }

  const secoes = [
    { chave: 'facil',     label: ' Muito Fácil',                  cor: '#2ecc71' },
    { chave: 'dificil',   label: ' Muito Difícil',                 cor: '#e74c3c' },
    { chave: 'ajudou',    label: ' Ajudou a Entender Muita Coisa', cor: '#3498db' },
    { chave: 'naoAjudou', label: ' Não Ajudou a Entender Nada',    cor: '#e67e22' },
  ];

  return (
    <div className="cardContainer">
      <div className="card">

        {/* Cabeçalho do card com cor do aluno */}
        <div className="card-header" style={{ borderLeft: `6px solid ${aluno.corTema}` }}>
          <img
            src={aluno.foto}
            alt={`Foto de ${aluno.nome}`}
            className="card-header-foto"
          />
          <div>
            <h2 className="card-header-nome">{aluno.nome}</h2>
            <p className="card-header-sub">Códigos selecionados</p>
          </div>
        </div>

        {/* Seções de código */}
        {secoes.map(({ chave, label, cor }) => (
          <div key={chave} className="cardSection" style={{ borderLeft: `4px solid ${cor}` }}>
            <h3 className="cardTitle" style={{ color: cor }}>{label}</h3>
            <pre className="cardCode">
              {aluno.codigos?.[chave] || '// Nenhum código adicionado ainda'}
            </pre>
          </div>
        ))}

      </div>
    </div>
  );
}