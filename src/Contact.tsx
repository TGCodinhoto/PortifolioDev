
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Contact() {
    return (
        <section className="py-20 bg-black" id="contact">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-semibold text-center text-white">Contatos</h2>
                <p className="mt-4 text-center text-white">
                    Entre em contato comigo através das redes sociais ou envie um e-mail. <br />
                    <a href="#" className="text-amber-500">thiagogravonski@homtail.com</a>
                </p>
                
                <div className="mt-8 flex justify-center space-x-4">
                    <a className="text-white hover:text-amber-500" href="https://github.com/TGCodinhoto" target="_blank">
                        <FontAwesomeIcon icon={faGithub} size="2xl" />
                    </a>
                    <a className="text-white hover:text-amber-500" href="https://www.linkedin.com/in/thiago-gravonski/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                    </a>
                    <a className="text-white hover:text-amber-500" href="https://www.instagram.com/thiago_gravonski/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} size="2xl" />
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Contact

