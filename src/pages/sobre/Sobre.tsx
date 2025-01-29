export default function Sobre(){

    return(
        <>
        <main>
            <section id="about" className="flex_start">
            <h2>Sobre Nós</h2>
            <div id="conteudo" className="flex">
                <a href="https://github.com/meGustaRacalu">
                    <img
                    src="
                    https://avatars.githubusercontent.com/u/191371012?v=4&size=64
                    "
                        alt="Foto do criador desse conteudo"
                        className="profile_icon"
                        />
                    </a>
                    <article id="sobre_texto">
                        <p>
                            Empresa de Desenvolvimento de SoftWare
                        </p>
                            Sobre:
                        <ul>
                            <li>
                               Desde 2005 ativos na área da saude, em 2007 abrimos nossa primeira
                               filial em filipinas nomeada Jemaitis Correria seguida pela Fitness Doiszaga
                               e a Morabytes Bodybuilding Center.
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <section id="video" className="flex_start">
                <h2>Video que Representa Nossa Empresa: </h2>

                <div id="youtube" className="flex">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/d5GkgVhFeZY?si=hCDpG3zbFLh5hzEc" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </section>
        </main>
        </>
    )
    
    
}