import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../../components/produtos/modalprodutos/ModalProdutos.css";
import FormProdutos from '../../components/produtos/formprodutos/FormProdutos';
import ListaProdutos from '../../components/produtos/listarprodutos/ListarProdutos';

function ModalProdutos() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-indigo-800">Produtos</h1>
                <Popup
                    trigger={
                        <button 
                            className='border rounded px-4 py-2 bg-indigo-600 text-white hover:bg-white hover:text-indigo-800'>
                            Novo Produto
                        </button>
                    }
                    modal
                >
                    <FormProdutos />
                </Popup>
            </div>
            <ListaProdutos />
        </div>
    );
}

export default ModalProdutos;
