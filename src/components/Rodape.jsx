import styles from "../styles/main.js";

export default function Rodape() {
  return (
    <div style={styles.rodape.container}>
      <a
        href="https://github.com/VicCAlq/2c-front-projeto-01/tree/8-MateusAntonio-Leticia-BrendaVilaca-DaviNeres-CaueFerreira"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.rodape.link}
      >
        📂 Repositório do GitHub
      </a>
      <p style={styles.rodape.texto}>
        Criado por: Mateus Antonio, Leticia Domingos, Brenda Vilaça, Davi Neres e Cauê Calado
      </p>
    </div>
  );
}