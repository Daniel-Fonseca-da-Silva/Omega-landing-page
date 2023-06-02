import { glister1 } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const FourthContainer = () => {
  return (
    <section className="w-full mx-auto mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <Image
                  className="w-full rounded-lg"
                  src={glister1}
                  alt="Muchos beneficios"
                />
              </div>
            </motion.div>
          </div>
          <div className="xs:pl-0 sm:pl-0 md:pl-10 lg:pl-32 xs:py-10 sm:py-10 md:py-0 sm:text-center">
            <p className="lg:text-4xl xs:text-base sm:text-xl font-bodyFont tracking-wide leading-normal text-textDark">
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text font-bold">
                La pasta dental Glister
              </span>{" "}
              es una elección excepcional para cuidar la salud bucal de tus
              hijos. Con una fórmula segura, protección contra las caries, un
              agradable sabor y el respaldo de una marca confiable.
            </p>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default FourthContainer;
