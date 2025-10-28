import style from "./Livro.module.css"

export default function Livro({ capa, titulo, autor, ano, genero }) {
    return (
        <>
            <div className={style.livro}>
                <img src={capa} />
                <div className={style.titulo}> 
                    <h2>{titulo}</h2>
                    <h2>{genero}</h2>
                </div>
                <div className={style.autor}>
                    <p>{ano}</p>
                    <p>{autor}</p>
                </div>
            </div>
        </>
    )
}