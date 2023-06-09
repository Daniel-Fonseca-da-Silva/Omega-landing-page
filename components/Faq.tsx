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
          <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
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
                  ¿Por qué Nutrilite Omega 3 Plus es único en el mercado?
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
                  Nuestra pesca proviene del Océano Pacífico. Además, tenemos un{" "}
                  <span className="underline">método propio y exclusivo</span>{" "}
                  para extraer omega 3 del aceite de pescado y refinarlo. Es un
                  proceso{" "}
                  <span className="underline">patentado de alta calidad</span>{" "}
                  que tiene una sustentabilidad de suministro a largo plazo.
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
                  ¿Si el pescado es parte de mi dieta debo consumir un
                  suplemento de omega 3?
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
                  Siempre es recomendable comer alimentos naturales ricos en
                  ácidos grasos omega 3, de los cuales, el pescado de mar de
                  aguas frías y profundas son una de las mejores fuentes, pero
                  si no comes pescado de mar{" "}
                  <span className="underline">
                    al menos dos veces por semana
                  </span>
                  , los suplementos{" "}
                  <span className="underline">
                    Nutrilite Omega 3 Plus pueden ayudarte a{" "}
                  </span>
                  obtener EPA y DHA que quizás falten en tu dieta.
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
                  ¿Cuales con las instrucciones de uso?
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
                  1 cápsula blanda{" "}
                  <span className="underline">3 veces al día</span> con las
                  comidas
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
                  ¿Cuál es el mejor momento para tomar omega 3 y vitaminas?
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
                  El mejor momento para tomar omega 3 es durante las principales
                  comidas, como{" "}
                  <span className="underline">
                    el desayuno, el almuerzo o la cena
                  </span>
                  . Esto se debe a que, como se explicó,{" "}
                  <span className="underline">
                    los ácidos grasos se absorben mejor en presencia de grasas
                  </span>
                  .
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
                  ¿Cuál es la mejor edad para tomar omega 3?
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
                  La ingesta de omega 3 es segura y{" "}
                  <span className="underline">
                    se puede suplementar a cualquier edad
                  </span>
                  , no hay contradicciones. Sin embargo, para cada etapa de la
                  vida, la suplementación debe ser supervisada por un médico o
                  nutricionista.
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
