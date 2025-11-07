export default function CardCep ({cep, lougradouro, bairro, uf, localidade}){
    return(
        <>
        <div>
            <ul>
                <li>{lougradouro}</li>
                <li>{bairro}</li>
                <li>{uf}</li>
                <li>{localidade}</li>
                <li>{cep}</li>
            </ul>
        </div>
        </>
    )
} 