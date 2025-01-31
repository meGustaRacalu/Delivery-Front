import { useState, useEffect } from 'react';
import { buscar } from '../../services/Service';
import Produto from '../../../models/Produtos';
import CardProdutos from '../cardprodutos/CardProdutos';

function ListaProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        await buscar('/produtos', setProdutos);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {produtos.map(produto => (
                <CardProdutos key={produto.id} produto={produto} />
            ))}
        </div>
    );
}

export default ListaProdutos;
