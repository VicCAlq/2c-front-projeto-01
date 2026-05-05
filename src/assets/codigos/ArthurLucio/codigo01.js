const codigo01 = `
const petsExoticos = [
  "lagarto", "tarântula", "hamster", "cacatua", "iguana",
  "escorpião", "sagui", "jacaré", "serpente", "camaleão"
]
  
let meuDeusMaisUmArray = [];
let letras = "r";
for(let bicho of petsExoticos){
        if(bicho.includes(letras)){
                meuDeusMaisUmArray.push(bicho);
        }
}

console.log(meuDeusMaisUmArray);

export const resposta10 = meuDeusMaisUmArray;
`

export default codigo01