import style from "./Livro.module.css"

export default function Livro({ capa, titulo, autor, ano, genero, disponivel, badge, children = "Nehuma informação disponivel"}) {
    return (
        <>
            <div className={style.livro}>
                <img src={capa} alt={titulo} />
                <div className={style.titulo}> 
                    <h2>{titulo}</h2>
                    <h3>{disponivel ? <p>Disponivel</p> : <p>Indisponivel</p>}</h3>
                </div>
                <div className={style.autor}>
                    <p>Autor: {autor}</p>
                    <p>Ano: {ano}</p>
                    <p>Gênero: {genero}</p>
                </div>
                <p>{badge}</p>
                {children}
            </div>
        </>
    )
}