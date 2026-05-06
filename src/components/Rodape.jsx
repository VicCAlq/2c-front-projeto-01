import styles from "../styles/main.js";
import { ExternalLink } from "lucide-react";

export default function Rodape() {
  return (
    <footer style={styles.rodape} className="animate-slideUp">
      <a
        href="https://github.com/VicCAlq/2c-front-projeto-01"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.rodapeLink}
      >
        <ExternalLink
          size={16}
          style={{ marginRight: "6px", verticalAlign: "middle" }}
        />
        Repositório no GitHub
      </a>
      <p style={styles.rodapeTexto}>
        copyright &copy; 2024 - Desenvolvido por Gabriel Primo , João Guilherme,
        Bruno Gustavo, Bernardo Pedro, Caique Alburqueque
      </p>
    </footer>
  );
}
