import Perfil from '../public/Perfil.png'
import Curriculo from '../src/Currículo Atualizado 2025.pdf'

function About() {
    return (
        <section className="py-20 bg-black text-white" id="about">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div className="md:w-1/2">
                        <img
                            alt="Imagem de um desenvolvedor web trabalhando em um laptop"
                            className="rounded-full mx-auto border-2 border-amber-500"
                            height="400"
                            src={Perfil} 
                            width="400"
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0 md:pl-12">
                        <h2 className="text-4xl font-semibold mb-4 text-center md:text-start">
                            Sobre Mim
                        </h2>
                        <p className="text-lg mb-4 text-center md:text-justify">
                            Me chamo Thiago, sou um desenvolvedor web com prática na criação de sites e aplicações dinâmicas e responsivas. Tenho conhecimento sólido em HTML, CSS, JavaScript, frameworks e bibliotecas como React e Tailwind. Além disso, utilizo Node.js para o back-end dos meus projetos. Tenho conhecimento também em alguns bancos de dados como: MariaDB e FireBase (SQL)
                        </p>

                        <div></div>

                        <a href="src\Currículo Atualizado 2025.pdf" download={Curriculo} className="flex items-center justify-center md:justify-start"><button className="mt-4 bg-amber-500 cursor-pointer rounded-2xl py-2 px-6 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white font-bold hover:text-amber-500 hover:font-bold items">Download CV</button></a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About