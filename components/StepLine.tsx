import { motion } from "framer-motion";

const StepLine = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12">
        <h2 className="lg:text-4xl md:text-4xl xm:pt-5 sm:pt-5 font-titleFont font-bold tracking-wide text-center uppercase xs:mt-5 text-textDark pb-10">
          Quiero obtener todos esos resultados ahora:
        </h2>

        <ol className="relative border-l px-10 py-10 border-btnColor1 shadow-md shadow-btnColor1 PX bg-gray-100 ">
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                {" "}
                1ª BENEFICIO:
              </span>{" "}
              75% MÁS EFICACIA PARA PULIR SUSTRATO DEL ESMALTE.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Pulir el sustrato del esmalte utilizando nuestra pasta dental
              puede proporcionar beneficios estéticos y de salud bucal. Desde la
              eliminación de manchas hasta la prevención de problemas dentales,
              esta práctica puede contribuir a mantener una sonrisa hermosa y
              una boca saludable.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                2ª BENEFICIO:
              </span>{" "}
              22% MÁS DE EFICACIA EN LA LIMPIEZA DE LA PELÍCULA MANCHADA DE
              TABACO, CAFÉ, TÉ Y VINO.
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              ¿Estás cansado de gastar dinero en tratamientos mensuales de
              blanqueamiento dental en el dentista? ¿Sabías que, en la mayoría
              de los casos, la causa de que los dientes vuelvan a amarillearse
              se debe al uso de una pasta de dientes de mala calidad?
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                3ª BENEFICIO:
              </span>{" "}
              PREVENCIÓN DE LA CARIES DENTAL.
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              La caries dental es una de las enfermedades bucales{" "}
              <span className="underline">más comunes</span>. Nuestro
              dentífrico, especialmente hecho con{" "}
              <span className="underline">fluoruro</span>, ayuda a{" "}
              <span className="underline">prevenir</span> la formación de caries
              al <span className="underline">reducir</span> la actividad
              bacteriana y{" "}
              <span className="underline">fortalecer los dientes</span>.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                4ª BENEFICIO:
              </span>{" "}
              AUMENTO DEL 42% EN LA LUMINOSIDAD DEL ESMALTE DENTAL.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Nuestras{" "}
              <span className="underline">pastas dentales de calidad </span>
              contienen ingredientes activos como el peróxido de hidrógeno o
              bicarbonato de sodio, que tienen{" "}
              <span className="underline">propiedades blanqueadoras</span>. El
              uso regular de estas pastas de dientes puede resultar en un{" "}
              <span className="underline">aclaramiento</span> gradual y sutil
              del esmalte dental, proporcionando un aspecto{" "}
              <span className="underline">más luminoso a los dientes.</span>
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                5ª BENEFICIO:
              </span>{" "}
              FÓRMULA SIN INGREDIENTES DERIVADOS DE ANIMALES.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Para aquellos que adoptan una{" "}
              <span className="underline">dieta vegana</span> o tienen un{" "}
              <span className="underline">estilo de vida vegano</span>, elegir
              nuestra pasta dental{" "}
              <span className="underline">
                libre de ingredientes de origen animal
              </span>{" "}
              es fundamental para mantener la coherencia con sus{" "}
              <span className="underline">principios y valores</span>. Esto les
              proporciona una opción alineada con un estilo de vida{" "}
              <span className="underline">
                vegano completo, libre de cualquier explotación animal.
              </span>
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                6ª BENEFICIO:
              </span>{" "}
              HASTA 198 USOS POR TUBO DE 200G.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Nuestra pasta dental es{" "}
              <span className="underline">altamente eficiente y económica</span>
              , ya que{" "}
              <span className="underline">
                permite hasta 198 usos con un tubo de 200 gramos
              </span>
              , ofreciendo una serie de ventajas convincentes. Con ella,{" "}
              <span className="underline">
                ahorrarás dinero, obtendrás una higiene bucal eficiente,
              </span>{" "}
              disfrutarás de los beneficios para la salud, aprovecharás la
              practicidad y contribuirás a la sostenibilidad ambiental. Haz la
              elección inteligente e invierte en una pasta que ofrece el máximo
              en economía y rendimiento.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-btnColor2 font-medium">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                7ª BENEFICIO:
              </span>{" "}
              ACCIÓN DE PULUDO SUAVE.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Las pastas dentales de calidad contienen partículas finas o
              ingredientes ligeramente abrasivos que ayudan a{" "}
              <span className="underline">pulir suavemente</span> el esmalte
              dental. Esto puede contribuir a la{" "}
              <span className="underline">eliminación de manchas</span> más
              persistentes y{" "}
              <span className="underline">mejorar el brillo </span>natural de
              los dientes.
            </p>
          </li>
          <li className="mb-10 border border-btnColor1 shadow-md shadow-btnColor1 px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-btnColor1 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-btnColor2">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                8ª BENEFICIO:
              </span>{" "}
              EQUILIBRIO DE TU MICROBIOMA ORAL.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Mantener un equilibrio oral saludable utilizando una{" "}
              <span className="underline">pasta dental de calidad</span> es
              esencial para una buena salud bucal. No solo te{" "}
              <span className="underline">
                proporciona una limpieza eficaz y protección contra enfermedades
                dentales
              </span>
              , sino que también te brinda un{" "}
              <span className="underline">
                aliento fresco y una sonrisa radiante.
              </span>
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default StepLine;
