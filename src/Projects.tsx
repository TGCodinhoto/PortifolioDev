import PetDev from '../public/PetDev.png'
import Hamb from '../public/Hamburgueria.png'
import Barber from '../public/Mr-Barber.png'


function Projects() {

    return (
        <section className="bg-black py-20 text-white parallax flex justify-center items-center" id="projects">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-white">Projetos</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Projeto 1 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border-2 border-gray-200">
                        <img
                            alt="Projeto Cardápio Online"
                            className="w-full h-48 object-cover"
                            height="400"
                            src={Hamb}
                            width="600"
                        />
                        <div className="p-6 bg-black">
                            <h3 className="text-xl font-semibold text-amber-500 text-center">Projeto Cardápio Online</h3>
                            <p className="mt-2 text-gray-200 text-center">Projeto de uma hamburgueria com o cardápio online, onde é possível selecionar os itens que deseja e colocá-los no carrinho!</p>
                        </div>
                    </div>

                    {/* Projeto 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border-2 border-gray-200">
                        <img
                            alt="Projeto Barbearia"
                            className="w-full h-48 object-cover"
                            height="400"
                            src={Barber}
                            width="600"
                        />
                        <div className="p-6 bg-black">
                            <h3 className="text-xl font-semibold text-amber-500 text-center">Projeto Barbearia</h3>
                            <p className="mt-2 text-gray-200 text-center">Projeto de uma hamburgueria com o cardápio online, onde é possível selecionar os itens que deseja e colocá-los no carrinho!</p>
                        </div>
                    </div>

                    {/* Projeto 3*/}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border-2 border-gray-200">
                        <img
                            alt="Projeto PetDev"
                            className="w-full h-48 object-cover"
                            height="400"
                            src={PetDev}
                            width="600"
                        />
                        <div className="p-6 bg-black">
                            <h3 className="text-xl font-semibold text-amber-500 text-center">Projeto Petshop</h3>
                            <p className="mt-2 text-gray-200 text-center">Projeto de um petshop online, onde é possível selecionar os serviços desejados e marcar horário diretamente no WhatsApp!</p>
                        </div>
                    </div>



                </div>
            </div>
        </section>

    )
}

export default Projects