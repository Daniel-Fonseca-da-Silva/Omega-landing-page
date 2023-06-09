import { motion } from "framer-motion";
import Link from "next/link";

const StepLine = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <motion.div
        className="w-10/12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <h2 className="lg:text-4xl md:text-4xl xm:pt-5 sm:pt-5 font-titleFont font-bold tracking-wide text-center uppercase xs:mt-5 text-textDark pb-10">
          Quiero obtener todos esos resultados ahora:
        </h2>

        <ol className="relative border-l px-10 py-10 border-colorBaseOne shadow-md shadow-colorBaseOne PX bg-gray-100">
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                {" "}
                1ª Beneficio:
              </span>{" "}
              Función cerebral.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              El DHA, un componente clave del omega-3, desempeña un papel
              fundamental en la estructura y función del cerebro. Es
              especialmente importante para el desarrollo cerebral en niños y
              puede ayudar a mejorar la función cognitiva en adultos, incluyendo
              la memoria, el aprendizaje y la atención.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                2ª Beneficio:
              </span>{" "}
              Salud ocular.
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              El DHA también se encuentra en altas concentraciones en la retina
              de los ojos. Estudios sugieren que el consumo adecuado de omega-3
              puede ayudar a prevenir la degeneración ocular relacionada con la
              edad y el desarrollo del ojo seco.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                3ª Beneficio:
              </span>{" "}
              Reducción de la inflamación.
            </h3>
            <p className="mb-10 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              La inflamación crónica está asociada con una serie de condiciones
              de salud, como enfermedades cardíacas, artritis y ciertos tipos de
              cáncer. El omega-3 tiene propiedades antiinflamatorias y puede
              ayudar a reducir la inflamación en el cuerpo.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                4ª Beneficio:
              </span>{" "}
              Salud mental.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Existen evidencias de que el consumo adecuado de omega-3 puede
              tener efectos positivos en la salud mental. Puede ayudar a reducir
              los síntomas de la depresión y la ansiedad, además de mejorar el
              estado de ánimo y la calidad del sueño.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                5ª Beneficio:
              </span>{" "}
              Salud ósea.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Estudios han demostrado que el omega-3 juega un papel en la salud
              ósea, ayudando a aumentar la densidad mineral ósea y reducir la
              pérdida ósea en ciertas condiciones, como la osteoporosis.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                7ª Beneficio:
              </span>{" "}
              Salud de la piel.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              El omega-3 puede ayudar a mantener la salud de la piel,
              promoviendo una mejor hidratación, reduciendo la inflamación de la
              piel y ayudando a tratar condiciones como el acné, la dermatitis y
              la psoriasis.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none text-colorBaseTwo font-medium uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                8ª Beneficio:
              </span>{" "}
              Evita la formación de coágulos.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              El omega 3, especialmente el DHA y el EPA, tiene propiedades
              anticoagulantes, reduciendo la formación de coágulos sanguíneos al
              evitar que las plaquetas de la sangre se agrupen. Por esta razón,
              esta grasa puede ayudar en la prevención de complicaciones graves,
              como la trombosis venosa profunda o la embolia pulmonar, por
              ejemplo.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                9ª Beneficio:
              </span>{" "}
              Ayuda a combatir la depresión.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              El omega 3 protege las células del cerebro, mejorando su actividad
              y llevando a un aumento de sustancias responsables de las
              emociones, el estado de ánimo y el bienestar, como la serotonina,
              la dopamina y la noradrenalina.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                10ª Beneficio:
              </span>{" "}
              Previene enfermedades autoinmunes.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Estudios muestran que el omega 3 puede ayudar a reducir el riesgo
              de desarrollo de enfermedades autoinmunes, que ocurren cuando el
              sistema inmunológico no reconoce las células sanas del cuerpo y
              las ataca, destruyéndolas, como en el caso de la diabetes tipo 1 o
              la esclerosis múltiple, por ejemplo. Además, esta grasa puede
              ayudar en el tratamiento del lupus, la artritis reumatoide, la
              colitis ulcerosa, la enfermedad de Crohn y la psoriasis.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                11ª Beneficio:
              </span>{" "}
              Ayuda a controlar la glucemia.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Estudios muestran que el omega 3 puede ayudar a reducir los
              niveles de azúcar en la sangre al mejorar la resistencia de la
              hormona insulina, pudiendo ser un aliado importante en el
              tratamiento de la diabetes tipo 2.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                12ª Beneficio:
              </span>{" "}
              Previene el Alzheimer.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Estudios muestran que el consumo de omega 3 puede reducir la
              pérdida de memoria, la falta de atención y la dificultad para el
              razonamiento lógico, lo cual puede disminuir el riesgo de
              desarrollar Alzheimer al mejorar el funcionamiento de las neuronas
              cerebrales. Sin embargo, se requieren más estudios que confirmen
              este beneficio.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                13ª Beneficio:
              </span>{" "}
              Controla el déficit de atención y la hiperactividad.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              Varios estudios demuestran que la deficiencia de omega 3 está
              asociada al trastorno de déficit de atención y hiperactividad
              (TDAH) en niños, y que aumentar el consumo de omega 3,
              especialmente EPA, puede reducir los síntomas de este trastorno,
              ayudando a mejorar la atención, la finalización de tareas y
              reducir la hiperactividad, la impulsividad, la agitación y la
              agresividad.
            </p>
          </li>
          <li className="mb-10 border border-colorBaseOne shadow-md shadow-colorBaseOne px-2 py-2 rounded-md">
            <div className="absolute w-3 h-3 bg-colorBaseOne rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <h3 className="mb-1 xs:text-base sm:text-base md:text-lg lg:text-xl text-sm leading-none font-medium text-colorBaseTwo uppercase font-titleSecondFont">
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                14ª Beneficio:
              </span>{" "}
              Mejora el rendimiento muscular.
            </h3>
            <p className="mb-4 xs:text-sm sm:text-sm md:text-base lg:text-lg text-base font-normal text-textDark">
              La suplementación con omega 3 puede ayudar a reducir la
              inflamación muscular causada por el ejercicio físico, acelerando
              la recuperación de los músculos y disminuyendo el dolor después
              del entrenamiento. El omega 3 también ayuda a mejorar el estado de
              ánimo y potenciar el rendimiento en los entrenamientos, además de
              ser importante para facilitar el inicio de actividades físicas o
              para personas en tratamientos médicos, como fisioterapia o
              rehabilitación cardíaca.
            </p>
          </li>
        </ol>
      </motion.div>
      <Link href="https://wa.me/5524981579339" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.9 }}
          className="w-full my-10 text-sm rounded-md text-textGreen tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 xs:px-5 sm:px-5 md:px-8 lg:px-40 animate-bounce border shadow-md shadow-colorBaseTwo xs:h-20 uppercase font-titleSecondFont hover:animate-none"
        >
          Pónlo a prueba
        </motion.button>
      </Link>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default StepLine;
