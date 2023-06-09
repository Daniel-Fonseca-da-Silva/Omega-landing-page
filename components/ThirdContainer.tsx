import { chicaConSonrisa } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";

const ThirdContainerr = () => {
  return (
    <section className="w-full mx-auto mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 my-10">
        <div className="mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <Image
                className="w-full rounded-lg"
                src={chicaConSonrisa}
                alt="Chica Argentina con una sonrisa guapa"
              />
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col md:flex-row justify-center pt-2">
          <div className="xs:pl-0 sm:pl-0 md:pl-10 lg:pl-0 xs:py-10 sm:py-10 md:py-0 sm:text-center ">
            <div className="border-colorBaseOne shadow-md shadow-colorBaseOne PX bg-gray-100 hover:shadow-colorBaseTwo py-5 px-5">
              <p className="lg:text-4xl xs:text-base sm:text-xl font-bodyFont tracking-wide leading-normal text-textDark">
                <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text font-bold uppercase">
                  Evitar la oxidación:
                </span>{" "}
                Los ácidos grasos, Nutrilite cuenta con un proceso de alta
                tecnología y calidad, con el cual los nutrientes extraídos son
                rápidamente encapsulados al vacío, agregando vitamina E para
                preservarlos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default ThirdContainerr;
