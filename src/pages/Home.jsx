import Cabecalho from "../components/Cabecalho";
import Menu from "../components/Menu";
import Conteudo from "../components/Conteudo";
import Card from "../components/Card";
import Rodape from "../components/Rodape";

function Home({ trocarPagina }) {
  return (
    <>
      <Cabecalho />
      <Menu trocarPagina={trocarPagina} />

      <Conteudo>
        <Card
          titulo="Questão Fácil"
          descricao="Uma questão simples para iniciar."
          codigo="console.log('Olá mundo');"
        />

        <Card
          titulo="Questão Difícil"
          descricao="Questão mais complexa."
          codigo="for(let i=0;i<10;i++){ console.log(i); }"
        />
      </Conteudo>

      <Rodape />
    </>
  );
}

export default Home;