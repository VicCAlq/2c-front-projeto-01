import styles from "../styles/main.js";

export default function Conteudo({ equipe }) {
  return (
    <div style={styles.conteudo.container}>
      <h2 style={styles.conteudo.titulo}>Sobre a Equipe</h2>
      <ul style={styles.conteudo.listaAlunos}>
        {equipe.map((membro, index) => (
          <li key={index} style={styles.conteudo.alunoItem}>
            <h3 style={styles.conteudo.alunoNome}>{membro.nome}</h3>
            <p style={styles.conteudo.alunoDescricao}>{membro.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}