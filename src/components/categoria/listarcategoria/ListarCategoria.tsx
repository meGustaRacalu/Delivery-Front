import { useState, useEffect } from 'react';
import { buscar } from '../../services/Service';
import Categoria from '../cardcategoria/CardCategoria';
import CardCategoria from '../cardcategoria/CardCategoria';

function ListaCategoria() {
    const [categoria, setCategoria] = useState<Categoria[]>([]);

    async function buscarCategoria() {
        await buscar('/categoria', setCategoria);
    }

    useEffect(() => {
        buscarCategoria();
    }, []);

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {categoria.map(categoria => (
                <CardCategoria key={categoria.id} id={categoria.id}  descricao= {categoria.descricao}/>
            ))}
        </div>
    );
}

export default ListaCategoria;
