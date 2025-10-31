import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { useState } from "react";

export default function Calculadora() {

    const [num1, setNum1] = useState("")
    const [num2, setNum2] = useState("")
    const [resultado, setResultado] = useState("")

    function calcular(op) {
        const n1 = parseFloat(num1)
        const n2 = parseFloat(num2)
        if (isNaN(n1) || isNaN(n2)) {
            setResultado("Digite um valor invalido")
            return;
        }
        switch (op) {
            case "+":
                setResultado(n1 + n2)
                break;
            case "-":
                setResultado(n1 - n2)
                break;
            case "×":
                setResultado(n1 * n2)
                break;
            case "÷":
                setResultado(n2 === 0 ? "Erro" : n1 / n2)
                break;
        }
    }

    return (
        <>
            <div>
                <Input label='x' value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Digite um valor" />
                <Input label='y' value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Digite um valor" />

                <div>
                    <Button label='+' onClick={() => calcular("+")} />
                    <Button label='-' onClick={() => calcular('-')} />
                    <Button label='÷' onClick={() => calcular('×')} type="sucess" />
                    <Button label='×' onClick={() => calcular('÷')} type="danger" />
                </div>

                <p>Resultado: {resultado}</p>
            </div>
        </>
    )
}