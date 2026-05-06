const cabecalho = {
  container: {
    backgroundColor: "#0f081c",
    padding: "1rem 2rem",
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    borderBottom: "3px solid #b457ff",
    boxShadow: "0 0 30px rgba(180, 87, 255, 0.16)",
  },
  botao: {
    backgroundColor: "transparent",
    color: "#f5f0ff",
    border: "2px solid #b457ff",
    padding: "0.5rem 1.5rem",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.25s ease",
  },
  botaoAtivo: {
    backgroundColor: "#b457ff",
    color: "#100912",
    border: "2px solid #b457ff",
    padding: "0.5rem 1.5rem",
    borderRadius: "12px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "all 0.25s ease",
    boxShadow: "0 0 20px rgba(180, 87, 255, 0.45)",
  },
};

export default cabecalho;