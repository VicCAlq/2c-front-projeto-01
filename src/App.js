import { useState } from "react";
import Menu from "./components/Menu";
import Card from "./components/Card";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Conteudo from "./components/Conteudo";

export default function App() {
  const [pagina, setPagina] = useState("principal");
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const alunos = [
    {
      nome: "João",
      imagem: "foto1.png",
      codigos: {
        facil: "let x = 1;",
        dificil: "função complexa...",
        aprendeu: "uso de loops",
        naoAjudou: "exercício confuso"
      }
    }
  ];

  return (
    <div>
      <Cabecalho mudarPagina={setPagina} />

      {pagina === "principal" && (
        <>
          <Menu alunos={alunos} selecionarAluno={setAlunoSelecionado} />
          {alunoSelecionado && (
            <Card conteudo={alunoSelecionado.codigos} />
          )}
        </>
      )}

      {pagina === "sobre" && <Conteudo />}

      <Rodape />
    </div>
  );
}