import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className="bg-orange-700 flex justify-center">
                <div className='container grid grid-cols-2 text-white'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                        A rota da felicidade
                        </h2>
                        <p className='text-xl'>
                            Seu pedido na velocidade da luz
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                <Link to="/produtos">Nossos produtos</Link> 
                                
                            </div>

                            <div className='rounded text-white 
                                            border-white border-solid border-2 py-2 px-4'
                                >
                                 <Link to="/produtossaudaveis">Produtos Saudaveis</Link> 
                            </div>
                           
                        </div>
                    </div>




                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/EjdzhSk.jpeg"
                            alt="Imagem Página Home"
                            className='w-2/1'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home