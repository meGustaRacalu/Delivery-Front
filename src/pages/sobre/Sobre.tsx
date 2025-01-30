export default function Sobre() {
    return (
        <>
            <main className="min-h-screen bg-gray-100 py-10">
                <section
                    id="about"
                    className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 mb-10"
                >
                    <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
                        Sobre Nós
                    </h2>
                    <div
                        id="conteudo"
                        className="flex flex-col md:flex-row items-center gap-8"
                    >
                        <a
                            href="https://github.com/meGustaRacalu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0"
                        >
                            <img
                                src="https://i.imgur.com/Bu03IQI.png"
                                alt="Foto do time"
                                className="rounded-full shadow-lg w-32 h-32"
                            />
                        </a>
                        <article id="sobre_texto" className="leading-relaxed text-center md:text-left">
                            <h3 className="font-bold text-lg text-orange-600 mb-6">Aplicativo de Delivery:</h3>
                            <ul className="list-disc ml-4">
                                <p>Somos uma empresa de delivery dedicada a levar praticidade e qualidade até você. <br />
                                Com um time ágil e comprometido, garantimos que seu pedido chegue rápido e com a melhor experiência. <br />
                                Seja para sua refeição, compras do dia a dia ou necessidades urgentes, estamos prontos para atender a qualquer momento. <br />
                                Confiança, rapidez e excelência são os pilares que nos movem a oferecer o melhor serviço de entrega para você.</p>
                            </ul>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
}
