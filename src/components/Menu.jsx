import Botao from "./Botao";

export default function Menu({ alunos, selecionarAluno }) {
  return (
    <div>
      {alunos.map((aluno, index) => (
        <Botao
          key={index}
          nome={aluno.nome}
          imagem={aluno.imagem}
          onClick={() => selecionarAluno(aluno)}
        />
      ))}
    </div>
  );
}