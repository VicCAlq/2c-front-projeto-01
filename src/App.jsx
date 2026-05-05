import { useState } from "react";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      {pagina === "home" && <Home trocarPagina={setPagina} />}
      {pagina === "sobre" && <Sobre trocarPagina={setPagina} />}
    </>
  );
}

export default App;