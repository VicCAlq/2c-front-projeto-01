import React from "react";
import "../App.css"

export default function Card({titulo, codigo, aluno}) {
  return (
    <div className="card">
      <h3 className="card-titulo">{titulo}</h3>
      <p className="card-codigo">
        <code>{codigo}</code>
      </p>
      <h2 className="card h2">{aluno?.nome}</h2>

      <h3>Fácil</h3>
      <p>{aluno?.facil}</p>

      <h3>Difícil</h3>
      <p>{aluno?.dificil}</p>

      <h3>Ajudou</h3>
      <p>{aluno?.ajudou}</p>

      <h3>Não ajudou</h3>
      <p>{aluno?.naoAjudou}</p>
    </div>
  );
}