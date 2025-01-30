interface Categoria { id: number, descricao: string

}
function Categoria({ id, descricao}: Categoria) {
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
                  
                    <h3 className='text-lg font-bold text-center uppercase'>
                        {descricao}
                    </h3>
                </div>
                <div className='p-4'>
                    <h4 className='text-lg font-semibold uppercase'>Categoria do produto</h4>
                    <p>Descricao: {descricao}</p>
                </div>
            </div>
        </div>
    );
}

export default Categoria
