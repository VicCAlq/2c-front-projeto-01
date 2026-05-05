import Cabecalho from "../components/Cabecalho";
import Rodape from "../components/Rodape";

function Sobre({ trocarPagina }) {
  return (
    <>
      <Cabecalho />
      <Menu trocarPagina={trocarPagina} />

      <main>
        <h2>Sobre a Equipe</h2>

        <ul>
          <li>
            <strong>Renato Marques</strong> - Organização geral do projeto e integração dos componentes.
          </li>
          <li>
            <strong>Gustavo Alberto</strong> - Implementação das páginas e estrutura de navegação.
          </li>
          <li>
            <strong>Kamylle vitoria</strong> - Criação do conteúdo textual e revisão das questões.
          </li>
          <li>
            <strong>Abner Matias</strong> - Desenvolvimento dos cards e exibição dos códigos.
          </li>
          <li>
            <strong>Yan Novais</strong> - Estilização básica e ajustes visuais do projeto.
          </li>
        </ul>

        <p>
          Este projeto foi desenvolvido em React como uma vitrine de códigos,
          permitindo visualizar e entender diferentes exercícios de programação,
          facilitando o aprendizado e a revisão dos conteúdos estudados.
        </p>
      </main>

      <Rodape />
    </>
  );
}

export default Sobre;