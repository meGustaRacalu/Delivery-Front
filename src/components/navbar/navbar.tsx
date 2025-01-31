import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4 bg-orange-700 text-white'>
                <div className="container flex justify-between text-lg">
                    <Link to="/" className="text-white">Rota 77</Link>

                    <div className='flex gap-4'>
                        <Link to="/produtos" className="text-white">Produtos</Link>
                        <Link to="/categoria" className="text-white">Categoria</Link>
                        <Link to="/sobre" className="text-white">Sobre nós</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
