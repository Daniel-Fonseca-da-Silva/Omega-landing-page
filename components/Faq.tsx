import { motion } from "framer-motion";

const Faq = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="w-10/12 -mb-10 -mt-10"
      >
        <h2 className="xs:text-base sm:text-base md:text-lg lg:text-4xl font-titleFont font-bold tracking-wide text-center uppercase pb-5 text-textDark">
          PREGUNTAS FRECUENTES{" "}
          <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
            (FAQ)
          </span>
          :
        </h2>
        <div className="px-10 xs:pb-5 sm:pb-5 md:pb-0 lg:pb-0">
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ¿Por qué debo usar la Pasta de dientes multiacción con
                  fluoruro de Glister?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 rotate-180 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  La Pasta de dientes multiacción con fluoruro de Glister
                  contiene una fórmula bien balanceada para toda la familia.
                  Contiene un agente pulidor suave y de origen natural (sílice),
                  que limpia y ayuda a eliminar las manchas para blanquear los
                  dientes. Está completamente probado para garantizar la
                  eficacia en la reducción de las caries y el suministro de
                  flúor a los dientes.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-2"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-2"
              >
                <span className="font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ¿Qué es la acción reparadora de dientes Reminact?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  Incluso con el cuidado bucal adecuado, los ácidos de la placa
                  pueden eliminar los minerales clave del esmalte dental,
                  debilitando su capacidad protectora y provocando caries. Este
                  proceso se conoce como desmineralización. El flúor en la pasta
                  dental ayuda a restaurar el esmalte dental, un proceso al que
                  nos referimos como Reminact Acción reparadora dental. Este
                  proceso ayuda a depositar minerales nuevamente en el esmalte
                  para fortalecer los dientes y hacerlos más resistentes a las
                  caries.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-3"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-3"
              >
                <span className="font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ¿La Pasta de dientes multiacción con fluoruro de Glister
                  contiene lejía?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  No, la Pasta de dientes multiacción con fluoruro de Glister no
                  contiene blanqueadores químicos.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-4">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-4"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-4"
              >
                <span className="font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ¿La Pasta de dientes multiacción con fluoruro de Glister es
                  concentrada?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-4"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-4"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  No, la Pasta de dientes multiacción con fluoruro de Glister es
                  un producto{" "}
                  <span className="underline"> listo para usarse</span>.
                </p>
              </div>
            </div>

            <h2 id="accordion-collapse-heading-5">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-btnColor1 dark:hover:bg-gray-800"
                data-accordion-target="#accordion-collapse-body-5"
                aria-expanded="false"
                aria-controls="accordion-collapse-body-5"
              >
                <span className="font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  ¿La Pasta de dientes multiacción con fluoruro de Glister es
                  apta para dientes sensibles?
                </span>
                <svg
                  data-accordion-icon
                  className="w-6 h-6 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </h2>
            <div
              id="accordion-collapse-body-5"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-5"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 font-bodyFont text-textDark xs:text-sm sm:text-sm md:text-base lg:text-xl">
                  La Pasta de dientes multiacción con fluoruro de Glister
                  limpiará eficazmente todos los dientes y ayudará a proteger
                  contra las caries dentales. Sin embargo, no está especialmente
                  formulada para personas con dientes sensibles. Si tienes
                  dientes sensibles, debes acudir a un dentista para recibir el
                  tratamiento adecuado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Faq;
