import styles from "./Catalogo.module.css";
import List from "../componentes/List/List";
import { bancoLivros } from "../data/banco";

export default function Catalogo() {
  return (
    <>
      <div className={styles.container}>
      <h1 className={styles.title}>Catálogo de Livros</h1>
      <div className={styles.list}>
        <List livros={bancoLivros} />
      </div>
    </div>
    </>
  );
}
