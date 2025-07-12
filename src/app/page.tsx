import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 sm:px-10 md:px-20 pb-20 gap-10 md:gap-16 mt-5">
      <section
        id="hero"
        className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-15 text-center md:text-left w-full max-w-[1200px]"
      >
        <div className="w-full md:w-auto">
          <Image
            src="/hero.svg"
            alt="Bela Mesa Ateliê Logo"
            width={649}
            height={406}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="max-w-[472px] w-full leading-snug">
          <div>
            <div className="text-left">
              <h1 className="text-3xl font-bold leading-tight" id="hero-title">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="flex-shrink-0 -mt-1">
                    <Image
                      src="/icons/home.png"
                      alt="Ícone de casa"
                      id="hero-home-icon"

                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </span>
                  <span id="hero-title-text">Especialistas em tábuas</span>
                </div>
                <div className="mt-1 text-center ml-[2.1rem] md:text-left" id="hero-title-text2">
                  personalizadas e mesa posta
                </div>

              </h1>

            </div>
          </div>

          <div className="flex flex-row items-center justify-center mt-8 gap-5 place-content-around ">
            {[
              {
                imagem: '/icons/tabuadecortar.png',
                p: 'Tábuas',
                p2: 'personalizadas'
              },
              {
                imagem: '/icons/flor.png',
                p: 'Mesas',
                p2: 'Postas'
              },
              {
                imagem: '/icons/mesa.png',
                p: 'Móveis',
                p2: 'Industriais'
              },
            ].map((servico) => (
              <div key={servico.p} className="flex flex-row text-center" id="hero-icons">
                <Image
                  src={servico.imagem}
                  alt={servico.p}
                  id="hero-icons-image"
                  width={50}
                  height={50}
                  className="object-contain border-solid border-3 border-(--border) rounded-full p-1"
                />
                <div className="flex flex-col place-content-around items-start ml-2 text-[1.0rem]">
                  <p className="text-left leading-[1.1rem] font-semibold" id="hero-icons-text">
                    <p>{servico.p}</p>
                    
                    <p>{servico.p2}</p>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr />

          <div className="flex items-center justify-center gap-2 flex-wrap mt-6">
            <span className="flex-shrink-0 -mt-1">
              <Image
                src="/icons/pin.png"
                alt="Ícone de Pino"
                id="hero-pin-icon"

                width={20}
                height={20}
                className="object-contain"
              />              
            </span>
            <span className="font-bold" id="hero-icons-text">Loja on-line em Araguaína-TO</span>
                  
          </div>
        </div>
      </section>
    </div>
  );
}
