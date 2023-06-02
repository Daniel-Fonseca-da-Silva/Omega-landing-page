import { comocepillo, ninapequena } from "@/public/assets";
import Image from "next/image";

const Benefits = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center text-textDark">
          Otro detalle que hace que esta pasta de dientes sea diferente es el{" "}
          <span className="underline">hecho de ser concentrada</span>. Solo se
          necesita la cantidad de un{" "}
          <span className="underline">pequeño guisante en el cepillo</span> de
          dientes para un lavado completo.
        </h2>
        <div className="flex drop-shadow-2x">
          <div className="w-1/2 flex py-5 flex-col items-center mr-2">
            <div>
              <Image
                className="rounded-t-lg"
                src={comocepillo}
                alt="Una pequeña cantidad del tamaño de un guisante"
              />
            </div>
          </div>
          <div className="w-1/2 flex py-5 flex-col items-center ml-2">
            <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <Image
                className="rounded-t-lg"
                src={ninapequena}
                alt="Chica pequeña cepillando sus dientes feliz"
              />
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-lg shadow-md shadow-btnColor1">
          <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center text-black">
            Sí, esa{" "}
            <span className="font-bodyFont underline font-semibold text-btnColor1">
              cantidad es suficiente para un lavado
            </span>{" "}
            con la espuma necesaria para distribuir el producto de manera
            uniforme. Este beneficio también es posible gracias a la{" "}
            <span className="font-bodyFont underline font-semibold text-btnColor1">
              presencia de Xilitol
            </span>
            , un ingrediente que aumenta ligeramente la salivación natural.
          </h2>
        </div>
        <h2 className="lg:text-4xl xs:text-sm sm:text-sm md:text-2xl font-bodyFont tracking-wide text-center mt-10">
          <span className="underline">Tudo isso é apenas uma amostra</span> de
          tudo o que você pode conquistar através desse mercado.
        </h2>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default Benefits;
