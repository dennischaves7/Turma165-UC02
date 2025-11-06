import style from './PokemonCard.module.css'

export default function PokemonCard({nome, tipo, imagem}){
    return(
        <div className={style.card}>
            <h2 className={style.title}>{nome}</h2>
            <img src={imagem} alt={nome} className={style.image} />
            <p className={style.type}>Tipo: {tipo.toLocaleUpperCase()}</p>
        </div>
    )
}