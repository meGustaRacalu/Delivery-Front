import { useState, useEffect } from 'react';
import { buscar } from '../../components/services/Service';
import Produto from '../../models/Produtos';  

function ProdutosPage() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                await buscar('/produtos', setProdutos);
            } catch (error) {
                console.error('Erro ao carregar produtos', error);
            }
        }

        carregarProdutos();
    }, []);

    return (
        <div className="container mx-auto py-4">
            <h1 className="text-4xl text-center">Nossos Produtos</h1>
            <div className="grid grid-cols-3 gap-4">
                {produtos.map((produto) => (
                    <div key={produto.id} className="card">
                        <img src={produto.imagemUrl} alt={produto.nome} />
                        <h3>{produto.nome}</h3>
                        <p>{produto.preco}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProdutosPage;
