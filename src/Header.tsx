import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-black shadow fixed w-full top-0 left-0 z-50">
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <div className="text-3xl text-white"><a href="#">Portfolio<span className="text-amber-500 font-semibold">Dev</span></a></div>
        <div className="md:hidden">
          <a
            className="text-white cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={faBars} size="xl"/>
          </a>
        </div>

        <nav className="hidden md:flex space-x-10" id="menu">
          <a className="text-white hover:text-amber-500" href="#">
            Home
          </a>
          <a className="text-white hover:text-amber-500" href="#about">
            Sobre
          </a>
          <a className="text-white hover:text-amber-500" href="#skills">
            Skills
          </a>
          <a className="text-white hover:text-amber-500" href="#projects">
            Projetos
          </a>
          <a className="text-white hover:text-amber-500"href="#contact">
            Contatos
          </a>
        </nav>
      </div>

      {/* NavBar Mobile */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-black shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
        id="mobile-menu"
      >
        <nav className="container mx-auto px-6 py-4 space-y-2">
          <a className="block text-white hover:text-amber-500" href="#">
            Home
          </a>
          <a className="block text-white hover:text-amber-500" href="#about">
            Sobre
          </a>
          <a className="block text-white hover:text-amber-500" href="#projects">
            Projetos
          </a>
          <a className="block text-white hover:text-amber-500" href="#contact">
            Contatos
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
