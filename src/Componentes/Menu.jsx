export default function Menu({ trocarPagina }) {
  return (
    <nav>
      <button onClick={() => trocarPagina("home")}>Home</button>
      <button onClick={() => trocarPagina("sobre")}>Sobre a Equipe</button>
    </nav>
  );
}

export default Menu;