import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Produto from '../../../models/Produtos';
import { buscar, atualizar, cadastrar } from '../../services/Service';
import Categoria from '../../../models/Categoria';
 
function FormProdutos() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState<Produto>({} as Produto);
    const [categorias, setCategorias] = useState<Categoria[]>();
    const { id } = useParams<{ id: string }>();
    const token = "seu-token-aqui";
 
    async function buscarCategorias() {
        try {
            await buscar(`/categoria`, setCategorias, { Authorization: token });
           
        } catch (error) {
            alert('Erro ao buscar a categoria.');
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
        setProduto({
            ...produto,
            [e.target.name]: e.target.value,
        });
    }
    function atualizarCategoria(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        let cat : Categoria = {
            id: e.target.value,
            descricao: ''
        };
        produto.categoria = cat;
        setProduto({
            ...produto
        });
    }
    async function salvarProduto(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const header = { Authorization: token };
 
        if (id !== undefined) {
            await atualizar(`/produtos/atualizar`, produto, setProduto, header);
            alert('Produto atualizado com sucesso.');
        } else {
            await cadastrar(`/produtos/cadastrar`, produto, setProduto, header);
            alert('Produto cadastrado com sucesso.');
        }
        navigate('/produtos');
    }
 
    return (
        <div
            className='flex flex-col items-center justify-center h-screen'
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2016/12/10/21/26/food-1898194_1280.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className='bg-white shadow-md rounded-lg p-8 w-full max-w-md' style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <h1 className='text-3xl font-bold text-center mb-6' style={{ color: '#D9531E' }}>
                    {id ? 'Editar Produto' : 'Cadastrar Produto'}
                </h1>
                <form className='flex flex-col gap-4' onSubmit={salvarProduto}>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Nome do Produto"
                        value={produto.nome}
                        onChange={atualizarEstado}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <input
                        type="number"
                        name="preco"
                        placeholder="Preço"
                        value={produto.preco || ''}
                        onChange={atualizarEstado}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <select
                        name="categoria"
                        onChange={atualizarCategoria}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    >
                        <option value={produto.id || ''}>
                            {produto.categoria?.descricao || <>Selecione uma Categoria</>}
                        </option>
                        {categorias?.map((cat: Categoria) =>
                           <option key={cat.id} value={cat.id}>
                                {cat.descricao || ''}
                            </option>
                        )}
                    </select>
                    <input
                        type="number"
                        name="entrega"
                        placeholder="Taxa de Entrega"
                        value={produto.entrega || ''}
                        onChange={atualizarEstado}
                        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        required
                    />
                    <button
                        type="submit"
                        className='bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg py-2 transition duration-300'>
                        {id ? 'Atualizar' : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </div>
    );
}
 
export default FormProdutos;