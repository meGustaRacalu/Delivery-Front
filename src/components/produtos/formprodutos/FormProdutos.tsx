import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produtos';
import { buscar, atualizar, cadastrar } from '../../services/Service';
import Categoria from '../../../models/Categoria';

function FormProdutos() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const { id } = useParams<{ id: string }>();
    const token = "seu-token-aqui";

    async function buscarCategorias() {
        try {
            await buscar(`/categoria`, setCategorias, { Authorization: token });
        } catch (error) {
            alert('Erro ao buscar categorias.');
        }
    }

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
        buscarCategorias();
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.target;

        if (name === 'categoria') {
            setProduto({
                ...produto,
                categoria: { id: parseInt(value), descricao: '' },
            });
        } else {
            setProduto({
                ...produto,
                [name]: value,
            });
        }
    }

    async function salvarProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const header = { Authorization: token };

        try {
            if (id !== undefined) {
                await atualizar(`/produtos/atualizar`, produto, setProduto, header);
                alert('Produto atualizado com sucesso.');
            } else {
                await cadastrar(`/produtos/cadastrar`, produto, setProduto, header);
                alert('Produto cadastrado com sucesso.');
            }
            navigate('/produtos');
        } catch (error) {
            alert('Erro ao salvar o produto.');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="border-slate-900 border rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-2xl">
                <div className="flex items-center justify-between bg-indigo-400 py-4 px-6">
                    <h3 className="text-xl font-bold text-white uppercase">
                        {id ? 'Editar Produto' : 'Cadastrar Produto'}
                    </h3>
                </div>
                <form className="p-6 flex flex-col gap-4" onSubmit={salvarProduto}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Nome do Produto</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite o nome do produto"
                            value={produto.nome || ''}
                            onChange={atualizarEstado}
                            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Preço</label>
                        <input
                            type="number"
                            name="preco"
                            placeholder="Digite o preço"
                            value={produto.preco || ''}
                            onChange={(e) =>
                                setProduto({ ...produto, preco: parseFloat(e.target.value) })
                            }
                            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Categoria</label>
                        <select
                            name="categoria"
                            value={produto.categoria?.id.toString() || ''}
                            onChange={atualizarEstado}
                            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        >
                            <option value="" disabled>Selecione uma Categoria</option>
                            {categorias.map((cat) => (
                                <option key={cat.id} value={cat.id.toString()}>
                                    {cat.descricao}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Taxa de Entrega</label>
                        <input
                            type="number"
                            name="entrega"
                            placeholder="Digite a taxa de entrega"
                            value={produto.entrega || ''}
                            onChange={(e) =>
                                setProduto({ ...produto, entrega: parseFloat(e.target.value) })
                            }
                            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/produtos')}
                            className="w-1/2 bg-red-500 hover:bg-red-700 text-white py-2 rounded font-bold transition duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-indigo-500 hover:bg-indigo-700 text-white py-2 rounded font-bold transition duration-300"
                        >
                            {id ? 'Atualizar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormProdutos;
