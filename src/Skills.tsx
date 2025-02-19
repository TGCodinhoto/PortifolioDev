import { faCss3Alt,faGitAlt, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Skills() {
    return (
        <section className="bg-gray-200 py-20" id="skills">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">
                    Skills
                </h2>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="container mx-auto flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faHtml5} className="text-9xl text-black"/>
                        <h3 className="text-2xl font-bold mb-2">
                            HTML 5
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faCss3Alt} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                        CSS 3
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center">
                    <FontAwesomeIcon icon={faJs} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                            JavaScript
                        </h3>
                    </div>
                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faSass} className="text-9xl text-black"/>
                        <h3 className="text-2xl font-bold mb-2">
                            Sass
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faReact} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                        React
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faGitAlt} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                            Git
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faPython} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                            Python
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faGithub} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                            GitHub
                        </h3>
                    </div>

                    <div className="container mx-auto flex flex-col justify-center items-center px-6">
                    <FontAwesomeIcon icon={faNodeJs} className="text-9xl text-black"/>
                        <h3 className="text-center text-2xl font-bold mb-2 ">
                            Node
                        </h3>
                    </div>
                    
                </div>
            </div>
        </section>

    )
}

export default Skills