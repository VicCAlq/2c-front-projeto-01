import Botao from "./Botao";

export default function Menu({ alunos, selecionarAluno }) {
  return (
    <div className="menu">
      {alunos.map((aluno, index) => (
        <Botao
          key={index}
          nome={aluno.nome}
          foto={aluno.foto}
          onClick={() => selecionarAluno(aluno)}
        />
      ))}
    </div>
  );
}