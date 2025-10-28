// src/components/List.jsx
import Livro from './Livro';

function List({ livros }) {
    return (
        <div>
            {livros.map((livro, idx) => (
                <Livro key={idx} {...livro}>
                    {livro.resenha && <p>{livro.resenha}</p>}
                </Livro>
            ))}
        </div>
    );
}
export default List;
