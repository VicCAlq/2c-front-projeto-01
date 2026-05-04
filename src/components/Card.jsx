export default function Card({ conteudo }) {
  return (
    <div>
      <h2>Códigos do aluno</h2>

      <p><strong>Fácil:</strong> {conteudo.facil}</p>
      <p><strong>Difícil:</strong> {conteudo.dificil}</p>
      <p><strong>Aprendi muito:</strong> {conteudo.aprendeu}</p>
      <p><strong>Não ajudou:</strong> {conteudo.naoAjudou}</p>
    </div>
  );
}