import "../App.css";

export default function Botao({nome, foto, onClick}) {
  return (
    <div className="botao-aluno" onClick={onClick}>
      <img src={foto} className="foto-aluno" />
      <p className="nome-aluno">{nome}</p>
    </div>
  );
}

