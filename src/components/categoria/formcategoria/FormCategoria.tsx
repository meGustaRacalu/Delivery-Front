import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { buscar, atualizar, cadastrar } from '../../services/Service';
import Categoria from '../../../models/Categoria';

function FormCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();
    const token = "seu-token-aqui";

    async function buscarCategoriaPorId(id: string) {
        try {
            await buscar(`/categoria/${id}`, setCategoria, { Authorization: token });
        } catch (error) {
            alert('Erro ao buscar a categoria.');
        }
    }
    
    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setCategoria({
                ...categoria,
                descricao: e.target.value
            });
        }
    
  
    async function salvarCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        const header = { Authorization: token };

        try {
            if (id !== undefined) {
                await atualizar(`/categoria/atualizar`, categoria, setCategoria, header);
                alert('Categoria atualizada com sucesso.');
            } else {
                await cadastrar(`/categoria/cadastrar`, categoria, setCategoria, header);
                alert('Categoria cadastrada com sucesso.');
            }
            navigate('/categoria');
        } catch (error) {
            alert('Erro ao salvar a categoria.');
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="border-slate-900 border rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-2xl">
                <div className="flex items-center justify-between bg-orange-400 py-4 px-6">
                    <h3 className="text-xl font-bold text-white uppercase">
                        {id ? 'Editar Categoria' : 'Cadastrar Categoria'}
                    </h3>
                </div>
                <form className="p-6 flex flex-col gap-4" onSubmit={salvarCategoria}>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2">Descrição da Categoria</label>
                        <input
                            type="text"
                            name="nome"
                            placeholder="Digite a descrição da categoria"
                            value={categoria.descricao}
                            onChange={atualizarEstado}
                            className="border rounded w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                            required
                        />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <button
                            type="button"
                            onClick={() => navigate('/categoria')}
                            className="w-1/2 bg-red-500 hover:bg-red-700 text-white py-2 rounded font-bold transition duration-300"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-1/2 bg-orange-500 hover:bg-orange-700 text-white py-2 rounded font-bold transition duration-300"
                        >
                            {id ? 'Atualizar' : 'Cadastrar'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormCategoria;
