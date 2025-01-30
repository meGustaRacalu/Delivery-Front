import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Categoria from '../../components/categoria/listarcategoria/ListarCategoria';


function ModalCategoria() {
    return (
        <>
       
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-white hover:text-indigo-800'>
                        Categorias
                    </button>
                }
                modal
            >
                <FormCategoria />
            </Popup>
        </>
    );
}

export default ModalCategoria;