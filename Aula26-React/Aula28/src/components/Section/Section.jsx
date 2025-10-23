import style from "./Section.module.css";

export default function Section ({conteudo}){
    return (
        <>
          <section className={style.container}>
            <p>{conteudo}</p>
          </section>
        </>
    )
}