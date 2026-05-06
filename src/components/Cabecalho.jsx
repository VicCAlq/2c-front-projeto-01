import styles from "../styles/main.js";

export default function Cabecalho({ paginaAtual, setPaginaAtual }) {
  const handleClick = (pagina) => {
    setPaginaAtual(pagina);
  };

  return (
    <div style={styles.cabecalho.container}>
      <button
        style={paginaAtual === "principal" ? styles.cabecalho.botaoAtivo : styles.cabecalho.botao}
        onClick={() => handleClick("principal")}
      >
        Página Principal
      </button>
      <button
        style={paginaAtual === "sobre" ? styles.cabecalho.botaoAtivo : styles.cabecalho.botao}
        onClick={() => handleClick("sobre")}
      >
        Sobre a Equipe
      </button>
    </div>
  );
}