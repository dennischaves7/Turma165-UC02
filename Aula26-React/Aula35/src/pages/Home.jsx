import { useState, useEffect } from "react";
import CardCep from "../components/CardCep/CardCep";

export default function Home() {
    const [cepBusca, setCepBusca] = useState("")
    const [cep, setCep] = useState(null)
    const [erro, setErro] = useState("")

    useEffect(() => {
        if (cepBusca === "") {
            setCep(null)
            setErro("")
            return
        }

        async function buscarCep() {
            try {
                const resposta = await fetch(`https://viacep.com.br/ws/${cepBusca}/json/`)
                if (!resposta.ok) {
                    throw new Error("Cep não encontrado!")
                }
                const dados = await resposta.json()
                if (dados.erro) {
                    throw new Error("Cep não encontrado!")
                }
                const info = {
                    cep: dados.cep,
                    logradouro: dados.logradouro,
                    bairro: dados.bairro,
                    uf: dados.uf,
                    localidade: dados.localidade,
                };
                setCep(info)
                setErro("")
            } catch (error) {
                setCep(null)
                setErro(error.message)
            }
        }

        buscarCep()
    }, [cepBusca])

    return (
        <>
            <h1>Buscar CEP</h1>
            <input
                type="text"
                placeholder="Digite o CEP"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        setCepBusca(e.target.value);
                    }
                }}
            />
            {erro && <p>{erro}</p>}
            {cep && (
                <CardCep
                    cep={cep.cep}
                    logradouro={cep.logradouro}
                    bairro={cep.bairro}
                    uf={cep.uf}
                    localidade={cep.localidade}
                />
            )}
        </>
    );
}
 