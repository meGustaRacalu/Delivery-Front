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
                                src="https://avatars.githubusercontent.com/u/191371012?v=4&size=128"
                                alt="Foto do criador desse conteúdo"
                                className="rounded-full shadow-lg w-32 h-32"
                            />
                        </a>
                        <article id="sobre_texto" className="leading-relaxed text-center md:text-left">
                            <p className="mb-4 font-semibold text-lg">
                                Empresa de Desenvolvimento de SoftWare
                            </p>
                            <h3 className="font-bold text-lg mb-2">Sobre:</h3>
                            <ul className="list-disc ml-4">
                                <li>
                                    Desde 2005 ativos na área da saúde, em 2007 abrimos nossa
                                    primeira filial em Filipinas, nomeada Jemaitis Correria,
                                    seguida pela Fitness Doiszaga e a Morabytes Bodybuilding Center.
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>

                <section
                    id="video"
                    className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
                >
                    <h2 className="text-4xl font-bold text-center text-orange-600 mb-6">
                        Vídeo que Representa Nossa Empresa
                    </h2>
                    <div id="youtube" className="flex justify-center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/d5GkgVhFeZY?si=hCDpG3zbFLh5hzEc"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                            className="rounded-lg shadow-md"
                        ></iframe>
                    </div>
                </section>
            </main>
        </>
    );
}
