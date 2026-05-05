const codigo02 = `
function elementosComNumeroPar(elementos){
    let umArray = [];
    for(let elementinhos of elementos){
        if(elementinhos.numeroAtomico % 2 === 0){
            umArray.push(elementinhos);
        }
    }
    return umArray;
}

console.log(elementosComNumeroPar(elementos));
`

export default codigo02