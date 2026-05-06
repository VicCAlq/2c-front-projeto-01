import { useState } from "react";

export default function Cabecalho({paginaInicial, paginaEquipe, mudarPagina}) {
  const [selecionado, setSelecionado] = useState("inicial")
  
  return(<>
    <div className="cabecalho">
      <button className="botao1" onClick={() => {setSelecionado("inicial") 
      mudarPagina(paginaInicial)}}>Página inicial</button>

      <button className="botao2" onClick={() => {setSelecionado("equipe")
        mudarPagina(paginaEquipe)}}>Sobre a equipe</button>
    </div>
  </>)
}