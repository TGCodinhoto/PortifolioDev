
function Hero() {
  return (
    <section className="h-dvh bg-cover bg-center bg-[url(paralax.jpg)] py-20 text-white parallax flex justify-center items-center">

      <div className="container mx-auto px-6 text-center flex flex-col justify-center items-center tracking-wide z-20">
        <h1 className="text-5xl md:text-6xl">
          Bem-vindo ao Meu Portfolio<span className="font-semibold text-amber-500">Dev</span><br /></h1>
        <p className="mt-4 text-gray-200">
          Desenvolvedor Web FullStack & Designer
        </p>
        <a href="#about"><button className="mt-4 bg-amber-500 cursor-pointer rounded-2xl py-2 px-6 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white font-bold hover:text-amber-500 hover:font-bold">Sobre mim</button></a>
      </div>
    </section>
  )
}

export default Hero