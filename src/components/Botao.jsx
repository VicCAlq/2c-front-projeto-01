import { useState } from "react";
import styles from "../styles/main.js";

export default function Botao({ aluno, aoClicar }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      onClick={() => aoClicar(aluno.id)}
      style={
        isHover
          ? { ...styles.botao.container, ...styles.botao.containerHover }
          : styles.botao.container
      }
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img src={aluno.foto} alt={aluno.nome} style={styles.botao.imagem} />
      <span style={styles.botao.nome}>{aluno.nome}</span>
    </button>
  );
}