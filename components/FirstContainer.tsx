import { motion } from "framer-motion";

const FirstContainer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 bg-gradient-to-r from-colorBaseOne to-colorBaseTwo transition-300 shadow-2xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-10/12 my-10"
      >
        <h2 className="font-titleFont font-normal tracking-wide text-center xs:text-lg sm:text-lg md:text-4xl lg:text-4xl xs:pt-5 sm:pt-5">
          <span className="font-bold">Contiene</span> una mezcla única de peces
          de agua fría:{" "}
          <span className="font-bold"> Sardinas, Caballa y Anchoas</span>.
        </h2>
        <h2 className="text-4xl font-titleSecondFont tracking-wide text-center mt-4 xs:text-lg sm:text-lg md:text-4xl lg:text-4xl xs:pb-5 sm:pb-5">
          Los ácidos grasos omega 3 colaboran con la salud del sistema
          cardiovascular. <br />{" "}
          <span className="bg-black">
            Contiene vitamina E, un potente antioxidante que ayuda mantener la
            calidad de los ácidos grasos omega 3.
          </span>
        </h2>
      </motion.div>
    </section>
  );
};

export default FirstContainer;
