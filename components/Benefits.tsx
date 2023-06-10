import { coupleFitness, fitnessGirlTwo } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Benefits = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-titleFont tracking-wide text-center text-textDark uppercase">
          <span className="underline">Dos cápsulas diarias </span>te aportan los
          ácidos grasos{" "}
          <span className="underline">
            fundamentales que tu cuerpo necesita.{" "}
          </span>
          Su fórmula balanceada contiene{" "}
          <span className="underline">vitamina E y aporta 450mg EPA y DHA</span>
          .
        </h2>
        <div className="flex drop-shadow-2x">
          <div className="w-1/2 flex py-5 flex-col items-center mr-2">
            <div>
              <Image
                className="rounded-t-lg"
                src={coupleFitness}
                alt="Pareja haciendo ejercicio gracias al omega 3"
              />
            </div>
          </div>
          <div className="w-1/2 flex py-5 flex-col items-center ml-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="rounded-t-lg"
                src={fitnessGirlTwo}
                alt="Mujer haciendo ejercicio gracias al omega 3"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md shadow-colorBaseTwo">
          <p className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center text-black py-5 px-5">
            Al incorporar{" "}
            <span className="font-bodyFont underline font-semibold text-colorshadow-colorBaseTwo">
              Omega 3 Plus de Nutrilite en tu rutina diaria,
            </span>{" "}
            estarás proporcionando a tu cuerpo los nutrientes esenciales que a
            menudo pueden ser escasos en la alimentación convencional.{" "}
            <span className="font-bodyFont underline font-semibold text-colorshadow-colorBaseTwo">
              Es especialmente recomendado para personas que no consumen
              regularmente pescados{" "}
            </span>
            ricos en omega-3, vegetarianos o personas que buscan un refuerzo
            adicional para la salud del corazón y del cerebro.
          </p>
        </div>
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center text-textDark pt-10">
          <span className="underline">Todo esto es solo el comienzo</span> de
          todo lo que lograrás a través de este producto.
        </h2>
      </div>
      <Link href="https://wa.me/5491156177549" target="_blank">
        <button className="w-full text-sm rounded-md text-textGreen tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 xs:px-5 sm:px-5 md:px-8 lg:px-40 animate-bounce border shadow-md shadow-colorBaseTwo xs:h-20 uppercase font-titleSecondFont">
          Quiero incorporar ya!
        </button>
      </Link>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default Benefits;
