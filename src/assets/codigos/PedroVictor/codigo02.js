const codigo02 = `
function buscarElementoPorNumeroAtomico(elementos, numeroAtomico){
  for (let elemento of elementos) {
    if (elemento.numeroAtomico === numeroAtomico) {
      return elemento;
    }
  }
  return null;
}

console.log(buscarElementoPorNumeroAtomico(elementos, 6));
`

export default codigo02