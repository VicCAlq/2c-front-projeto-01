

const codigo4 = `
function buscarPorNumeroAtomico(elementos, numeroAtomico) {
  for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].numeroAtomico === numeroAtomico) {
      return elementos[i];
    }
  }
  return null;
}

`

export default codigo4
