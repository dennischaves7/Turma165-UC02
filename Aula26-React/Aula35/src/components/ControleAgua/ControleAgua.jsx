import { useState } from "react";

export default function ControleAgua({ user = "Dennis" }) {
    const [agua, setAgua] = useState(0);

    return (
        <>
            <h1>Controle de água</h1>
            <button onClick={() => setAgua(agua + 1)}> Adicionar Copo </button>
            <p>{user} bebeu {agua} copos de água</p>
        </>
    );
}
 