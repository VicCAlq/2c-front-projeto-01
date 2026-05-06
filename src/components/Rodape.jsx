import styles from "../styles/main";

export default function Rodape() {
  return (
    <footer style={styles.rodape}>
      <a
        href="https://github.com/VicCAlq/2c-front-projeto-01/tree/3-AmandaVitoria-Jeniffer-EduardoOliveira-PedroArthur-BeatrizVilaca"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.rodapeLink}
      >
        ↗ LINK PARA O GITHUB
      </a>
      <p style={styles.rodapeTexto}>
        Desenvolvido por AMANDA V., BEATRIZ V., EDUARDO, JENIFFER D., PEDRO A.
      </p>
    </footer>
  );
}
