import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "../../components/produtos/modalprodutos/ModalProdutos.css";
import FormCategoria from '../../components/categoria/formcategoria/FormCategoria';
import ListaCategoria from '../../components/categoria/listarcategoria/ListarCategoria';

function ModalCategoria() {
    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-orange-800">Categorias</h1>
                <Popup
                    trigger={
                        <button 
                            className='border rounded px-4 py-2 bg-orange-600 text-white hover:bg-white hover:text-orange-800'>
                            Nova categoria
                        </button>
                    }
                    modal
                >
                    <FormCategoria />
                </Popup>
            </div>
            <ListaCategoria />
        </div>
    );
}

export default ModalCategoria;
