import { useState } from "react"

export default function Contador({numero}){
    const [quantidade, setQuantidade] = useState(0)


    return(
        <>
            <p>sou o que ve {numero}</p>
            <p>Clicado ai in baixo {quantidade} bagulhos</p>
            <button
             on onClick={() => setQuantidade(quantidade + 1)}>
                eu pae
            </button>
        </>
    )
}