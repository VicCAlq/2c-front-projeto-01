import styles from "../styles/main";

export default function Botao({ aluno, ativo, onClick }) {
  return (
    <button
      style={{
        ...styles.botao,
        ...(ativo ? styles.botaoAtivo : {}),
      }}
      onClick={() => onClick(aluno.id)}
    >
      {aluno.foto ? (
        <img src={aluno.foto} alt={aluno.nome} style={styles.botaoFoto} />
      ) : (
        <span style={styles.botaoFotoPlaceholder}>{aluno.emoji || "👤"}</span>
      )}
      <span
        style={{
          ...styles.botaoNome,
          ...(ativo ? styles.botaoNomeAtivo : {}),
        }}
      >
        {aluno.nome}
      </span>
    </button>
  );
}
  