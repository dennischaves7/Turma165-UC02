import { useState } from "react";

export default function Exemplo(){
    const [valor, setValor] = useState(0)

    return(
        <>
            <p> O Valor atual é: { valor }</p>
            <button onClick={ () => setValor( valor +1 )}> Aumentar </button>
            <button onClick={ () => setValor( valor > 0 ? valor - 1 : valor - 0 ) }> Diminuir </button>
            <button onClick={ () => setValor(0) }> Zerar </button>
        </>
    )

} 