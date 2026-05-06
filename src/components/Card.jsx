import styles from "../styles/main.js";
import ReadmeView from "./ReadmeView";

export default function Card({ aluno }) {
  if (!aluno) {
    return (
      <div style={styles.card.container}>
        <h3 style={styles.card.titulo}>Nenhum Neon selecionado</h3>
        <p>Clique em um Neon para ver suas questões</p>
      </div>
    );
  }

  return (
    <div style={styles.card.container}>
      <h3 style={styles.card.titulo}>Questões de {aluno.nome}</h3>
      {aluno.readme ? (
        <ReadmeView id={`readme-${aluno.id}`} readme={aluno.readme} />
      ) : (
        <p>O readme deste Neon não está disponível.</p>
      )}
    </div>
  );
}