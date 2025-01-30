import { useState, useEffect } from 'react';
import CardProdutos from '../../components/produtos/cardprodutos/CardProdutos';
import { buscar } from '../../components/services/Service';
import Produto from '../../models/Produtos';


function ProdutosSaudaveis() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        await buscar('/produtos/saudaveis', setProdutos);
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

export default ProdutosSaudaveis;
