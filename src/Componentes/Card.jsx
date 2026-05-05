export default function Contador({ titulo, descricao, codigo }) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <pre>{codigo}</pre>
    </div>
  );
}

export default Card;