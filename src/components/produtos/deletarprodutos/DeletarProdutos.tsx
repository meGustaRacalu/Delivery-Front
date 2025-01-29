import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Produto from '../../../models/Produtos';
import { buscar, deletar } from "../../services/Service";

function DeletarProduto() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const { id } = useParams<{ id: string }>();

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, {});
        } catch (error) {
            alert('Erro ao buscar o produto.');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    async function deletarProduto() {
        try {
            await deletar(`/produtos/${id}`, {});
            alert('Produto deletado com sucesso.');
            navigate('/produtos');
        } catch (error) {
            alert('Erro ao deletar o produto.');
        }
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Produto</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o produto a seguir?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Produto
                </header>
                <div className='p-4'>
                    <p className='text-xl h-full'>{produto.nome}</p>
                    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={() => navigate('/produtos')}>
                        Não
                    </button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600' onClick={deletarProduto}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarProduto;
