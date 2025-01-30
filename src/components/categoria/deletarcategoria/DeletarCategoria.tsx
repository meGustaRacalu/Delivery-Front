import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { buscar, deletar } from "../../services/Service";
import Categoria from '../cardcategoria/CardCategoria';

function DeletarCategoria() {
    const navigate = useNavigate();
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const { id } = useParams<{ id: string }>();

    async function buscarCategoria(id: string) {
        try {
            await buscar(`/categoria`, setCategoria, {});
        } catch (error) {
            alert('Erro ao buscar categoria.');
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoria(id);
        }
    }, [id]);

    async function deletarCategoria() {
        try {
            await deletar(`/categoria`, {});
            alert('Categoria deletada com sucesso.');
            navigate('/categoria');
        } catch (error) {
            alert('Erro ao deletar categoria.');
        }
    }

    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar essa categoria?
            </p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                Categoria
                </header>
                <div className='p-4'>
                    <p className='text-xl h-full'>{categoria.descricao}</p>
                    <p>Categoria {categoria.descricao}</p>
                </div>
                <div className="flex">
                    <button className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2' onClick={() => navigate('/categoria')}>
                        Não
                    </button>
                    <button className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-600' onClick={deletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeletarCategoria;
