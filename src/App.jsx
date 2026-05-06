import { useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Menu from "./components/Menu";
import Botao from "./components/Botao";
import Card from "./components/Card";
import Conteudo from "./components/Conteudo";

import greenPhoto from "./assets/green.jpeg";
import redPhoto from "./assets/red.jpeg";
import violetPhoto from "./assets/violet.jpeg";
import yellowPhoto from "./assets/yellow.jpeg";
import whitePhoto from "./assets/white.jpeg";

import readmeMateus from "./readmes/mateus.md?raw";
import readmeCaue from "./readmes/caue.md?raw";
import readmeBrenda from "./readmes/brenda.md?raw";
import readmeDavi from "./readmes/davi.md?raw";
import readmeLeticia from "./readmes/leticia.md?raw";

const alunos = [
  {
    id: 1,
    nome: "Mateus Antonio",
    foto: violetPhoto,
    readme: readmeMateus,
  },
  {
    id: 2,
    nome: "Caue Calado",
    foto: redPhoto,
    readme: readmeCaue,
  },
  {
    id: 3,
    nome: "Brenda Vilaça",
    foto: greenPhoto,
    readme: readmeBrenda,
  },
  {
    id: 4,
    nome: "Davi Neres",
    foto: yellowPhoto,
    readme: readmeDavi,
  },
  {
    id: 5,
    nome: "Leticia Domingos",
    foto: whitePhoto,
    readme: readmeLeticia,
  },
];

const equipe = [
  {
    nome: "Mateus Antonio",
    descricao: "Programou o funcionamento dos componentes 'Cabecalho', 'Menu', Load Readme, além da lógica de navegação entre páginas. (Apoio Moral)",
  },
  {
    nome: "Caue Calado",
    descricao: "Criou e programou o componente 'Botao' com suporte a imagens e estados de hover.",
  },
  {
    nome: "Brenda Vilaça",
    descricao: "Criou e programou o componente 'Card' para exibição dos códigos e o sistema de estilos centralizado.",
  },
  {
    nome: "Davi Neres",
    descricao: "Programou o componente 'Conteudo' e o 'Rodape', além de estruturar os dados dos alunos.",
  },
  {
    nome: "Leticia Domingos",
    descricao: "Programou os estilos do site, selecionou as imagens dos Neons.",
  }
];

function App() {
  const [paginaAtual, setPaginaAtual] = useState("principal");
  const [alunoSelecionado, setAlunoSelecionado] = useState(null);

  const handleSelecionarAluno = (alunoId) => {
    const aluno = alunos.find((a) => a.id === alunoId);
    setAlunoSelecionado(aluno);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#09050f",
        color: "#f5efff",
      }}
    >
      <Cabecalho paginaAtual={paginaAtual} setPaginaAtual={setPaginaAtual} />
      
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {paginaAtual === "principal" ? (
          <>
            <Menu>
              {alunos.map((aluno) => (
                <Botao
                  key={aluno.id}
                  aluno={aluno}
                  aoClicar={handleSelecionarAluno}
                />
              ))}
            </Menu>
            <Card aluno={alunoSelecionado} />
          </>
        ) : (
          <Conteudo equipe={equipe} />
        )}
      </div>
      
      <Rodape />
    </div>
  );
}

export default App;