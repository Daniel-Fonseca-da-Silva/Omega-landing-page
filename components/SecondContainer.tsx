import { motion } from "framer-motion";
import Link from "next/link";

const SecondContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 -mb-10 -mt-10">
        <h2 className="lg:text-4xl md:text-4xl xm:pt-5 sm:pt-5 font-titleFont font-bold tracking-wide text-center uppercase xs:mt-5 text-textDark">
          Los principales beneficios que va tener:
        </h2>
        <div className="flex">
          <div className="w-1/2 flex py-5 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block max-w-sm px-20 p-4 bg-btnColor1 border border-btnColor2 rounded-lg shadow bg-gradient-to-r from-btnColor1 to-btnColor2 text-textLight xs:px-0 xs:mr-1 md:py-8"
            >
              <p className="text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl my-10">
                Disminuir las manchas por consumo de café, té y tabaco.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block max-w-sm px-20 p-4 mt-5 bg-btnColor1 border border-btnColor2 rounded-lg shadow bg-gradient-to-r from-btnColor1 to-btnColor2 xs:px-0 xs:mr-1"
            >
              <p className="text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl my-10 pb-6">
                Ayuda a eliminar la placa limpiando eficazmente.
              </p>
            </motion.div>
          </div>
          <div className="w-1/2 flex py-5 flex-col items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block max-w-sm px-20 p-4 bg-btnColor1 border border-btnColor2 rounded-lg shadow bg-gradient-to-r from-btnColor1 to-btnColor2 xs:px-0 xs:ml-1 mdl:px-5"
            >
              <p className="text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl my-10">
                Sin peróxido, sin azúcar y libre de ingredientes derivados de
                animales.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="block max-w-sm px-20 p-4 mt-5 bg-btnColor1 border border-btnColor2 rounded-lg shadow bg-gradient-to-r from-btnColor1 to-btnColor2 xs:px-0 xs:ml-1 lg:py-7 mdl:px-5"
            >
              <p className="text-2xl xs:text-base sm:text-base xs:px-2 font-semibold font-bodyFont tracking-tight text-center md:text-lg md:px-14 lg:text-2xl my-10">
                Fortalecer los dientes y hacerlos más resistentes a las caries.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <Link href="https://wa.me/5524981579339" target="_blank">
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full my-10 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 xs:px-5 sm:px-5 md:px-8 lg:px-40 animate-bounce border shadow-md shadow-btnColor1 xs:h-20 uppercase"
        >
          Pónlo a prueba
        </motion.button>
      </Link>
    </section>
  );
};

export default SecondContainer;
