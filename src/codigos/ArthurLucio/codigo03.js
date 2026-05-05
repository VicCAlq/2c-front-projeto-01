const codigo03 = `
let ultimo = numeros[6];
numeros[6] = numeros[5];
numeros[5] = numeros[4];
numeros[4] = numeros[3];
numeros[3] = numeros[2];
numeros[2] = numeros[1];
numeros[1] = numeros[0];
numeros[0] = ultimo;
export const resposta07 = numeros;
`

export default codigo03