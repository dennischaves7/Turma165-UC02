import { useState, useEffect } from "react"
import PokemonCard from "../../components/PokemonCard/PokemonCard"

export default function Home() {

    const [nomeBusca, setNomeBusca] = useState("salamence")
    const [pokemon, setpokemon] = useState(null)
    const [erro, setErro] = useState("")

    useEffect(() => {
        if (nomeBusca === "") {
            return
        }

        async function buscarPokemon() {
            try {
                const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomeBusca.toLocaleLowerCase()}`)

                if (!resposta.ok) {
                    throw new Error("Pokemon não encontrado!")
                }

                const dados = await resposta.json()
                const info = {
                    nome: dados.name,
                    imagem: dados.sprites.front_default,
                    tipo: dados.types[0].type.name
                }
                console.log(info)
                setpokemon(info)
                setErro("")
            } catch (error) {
                setErro(error.message)
            }
        }

        buscarPokemon()

    }, [nomeBusca])

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    return (
        <>
            <div>
                <h1>Buscar Pokemon</h1>
                <input type="text" placeholder="Digite seu pokemon" onKeyDown={(e) => {
                    if (e.key === "Enter") setNomeBusca(e.target.value)
                }} />
                {erro && <p>{erro}</p>}

                {pokemon &&
                    <PokemonCard nome={capitalizeFirstLetter(pokemon.nome.toLocaleLowerCase())} tipo={pokemon.tipo} imagem={pokemon.imagem} />}
            </div>
        </>
    )
}