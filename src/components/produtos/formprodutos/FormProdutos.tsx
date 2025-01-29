import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produtos';
import { buscar, atualizar, cadastrar } from '../../services/Service';

function FormProdutos() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const { id } = useParams<{ id: string }>();
    const token = "seu-token-aqui"; // Substitua pelo token real

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto, { Authorization: token });
        } catch (error) {
            alert('Erro ao buscar o produto.');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        });
    }

    async function salvarProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const header = { Authorization: token };

        if (id !== undefined) {
            await atualizar(`/produtos`, produto, setProduto, header);
            alert('Produto atualizado com sucesso.');
        } else {
            await cadastrar(`/produtos`, produto, setProduto, header);
            alert('Produto cadastrado com sucesso.');
        }
        navigate('/produtos');
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center my-8'>{id ? 'Editar Produto' : 'Cadastrar Produto'}</h1>
            <form className='flex flex-col gap-4 w-1/2 mx-auto' onSubmit={salvarProduto}>
                <input
                    type="text"
                    name="nome"
                    placeholder="Nome do Produto"
                    value={produto.nome}
                    onChange={atualizarEstado}
                    required
                />
                <input
                    type="number"
                    name="preco"
                    placeholder="Preço"
                    value={produto.preco}
                    onChange={atualizarEstado}
                    required
                />
                <input
                    type="text"
                    name="categoria"
                    placeholder="Categoria"
                    value={produto.categoria}
                    onChange={atualizarEstado}
                    required
                />
                <input
                    type="number"
                    name="entrega"
                    placeholder="Taxa de Entrega"
                    value={produto.entrega}
                    onChange={atualizarEstado}
                    required
                />
                <button type="submit" className='bg-indigo-400 hover:bg-indigo-800 text-white font-bold rounded py-2'>
                    {id ? 'Atualizar' : 'Cadastrar'}
                </button>
            </form>
        </div>
    );
}

export default FormProdutos;
