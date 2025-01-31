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
        <main className='flex-grow'>
            <h1 className="text-2xl font-bold text-orange-800">Produtos Saudáveis</h1>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {produtos.map(produto => (
                    <CardProdutos key={produto.id} produto={produto} />
                ))}
            </div>
        </main>
    );
}

export default ProdutosSaudaveis;
