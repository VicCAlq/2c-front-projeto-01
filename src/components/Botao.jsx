export default function Botao({ nome, imagem, onClick }) {
  return (
    <button onClick={onClick}>
      <img src={imagem} alt={nome} width="50" />
      <p>{nome}</p>
    </button>
  );
}