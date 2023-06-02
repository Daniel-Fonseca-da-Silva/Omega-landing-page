import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4 xs:items-center sm:items-center md:items-center lg:items-start lgl:items-start xl:items-start"
    >
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="text-2xl lg:ml-10 xs:text-xl sm:text-xl text-textDark font-titleFont font-bold tracking-wide"
      >
        PASTA DENTAL
      </motion.p>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="lg:text-8xl xs:text-4xl sm:text-4xl -mt-14 font-titleFont font-bold tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text xs:-mt-12 sm:-mt-12 sm:pt-7 md:pt-7 lg:pt-3 lgl:pt-3 xl:pt-3"
      >
        GLISTER
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="lg:text-4xl font-bodyFont font-bold tracking-wide -mt-5 md:px-0 lg:px-0 text-textDark"
      >
        Hasta{" "}
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          198 usos
        </span>{" "}
        por tubo de <br />
        200G al ser utilizado según
        <br /> instrucciones.
        <br />
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          ¡SIEMPRE SUAVE Y EFECTIVA!
        </span>
      </motion.p>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="lg:text-3xl font-bodyFont tracking-wide font-light -mt-5 xs:pt-2 sm:pt-2 md:px-0 lg:px-0 text-textDark text-justify"
      >
        Libre de{" "}
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          parabenos
        </span>{" "}
        y con más ingredientes{" "}
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          botánicos!
          <br />
        </span>{" "}
        Con una mezcla mejorada de sabor a menta <br />
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          certificada
        </span>{" "}
        por Nutrilite™ es la fórmula para <br />
        tus dientes que lo hace todo{" "}
        <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
          ¡Pruébala y sonríe!
        </span>
      </motion.p>
      <Link
        href="https://wa.me/5524981579339"
        className="w-full"
        target="_blank"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-2/5 h-14 text-sm font-titleFont rounded-md text-textLight tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5"
        >
          QUIERO MI PASTA AHORA!
        </motion.button>
      </Link>
    </section>
  );
};

export default Banner;
