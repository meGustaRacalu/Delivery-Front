import { Link } from "react-router-dom";

interface CardProdutosProps { id: number, nome: string, imagemUrl: string, preco: number, categoria: string, entrega: number

}
function CardProdutos({ id, nome, imagemUrl, categoria, preco, entrega }: CardProdutosProps) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(value);
    };

    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
            <div>
                <div className="flex w-full bg-indigo-400 py-2 px-4 items-center gap-4">
                    {imagemUrl && (
                        <img
                            src={imagemUrl}
                            className='h-12 rounded-full'
                            alt={nome}
                        />
                    )}
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {nome}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>Informações do Produto</h4>
                    <p>Preço: {formatCurrency(preco)}</p>
                    <p>Categoria: {categoria}</p>
                    <p>Taxa de Entrega: {formatCurrency(entrega)}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarproduto/${id}`} 
                    className='w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarproduto/${id}`} 
                    className='text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardProdutos
