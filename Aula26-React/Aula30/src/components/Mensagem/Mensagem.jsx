import { useState } from "react";

export default function Mensagem() {
    const [mensagem, setMensagem] = useState("Olá")

    return(
        <>
            <h2> {mensagem} </h2>

            <input type="text" placeholder="Digite uma mensagem" onChange={(e) => mensagem.length > 1 ?  setMensagem(e.target.value) : setMensagem("Olá")}/>
        </>
    )
}