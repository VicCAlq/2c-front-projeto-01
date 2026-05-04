export default function Cabecalho({ mudarPagina }) {
  return (
    <div>
      <button onClick={() => mudarPagina("principal")}>
        Página Principal
      </button>

      <button onClick={() => mudarPagina("sobre")}>
        Sobre a equipe
      </button>
    </div>
  );
}