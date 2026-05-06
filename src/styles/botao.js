const botao = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#160a26",
    border: "2px solid rgba(180, 87, 255, 0.3)",
    borderRadius: "18px",
    padding: "1rem",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s",
    width: "120px",
    gap: "0.5rem",
  },
  containerHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 0 24px rgba(180, 87, 255, 0.35)",
    borderColor: "#b457ff",
  },
  imagem: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "2px solid rgba(255,255,255,0.12)",
  },
  nome: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#f5f0ff",
  },
};

export default botao;