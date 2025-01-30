import { Link } from "react-router-dom";

interface Categoria { id: number, descricao: string

}
function Categoria({ id, descricao}: Categoria) {

    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                  
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {descricao}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>Categoria do produto</h4>
                    <p>Descricao: {descricao}</p>

                    
                    <div className="flex">
                        <Link to={`/formcategoria/${id}`} 
                            className='w-full text-white bg-indigo-400 
                            hover:bg-indigo-800 flex items-center justify-center py-2'>
                            <button>Editar</button>
                        </Link>
                        <Link to={`/deletarcategoria/${id}`} 
                            className='text-white bg-red-400 
                            hover:bg-red-700 w-full flex items-center justify-center'>
                            <button>Deletar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Categoria
