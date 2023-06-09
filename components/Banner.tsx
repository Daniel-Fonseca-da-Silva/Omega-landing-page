import { mainPicture } from "@/public/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="uppercase text-2xl text-textDark font-titleSecondFont font-bold tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text
              xs:text-center xs:mb-5 xs:text-xl sm:text-xl md:text-left xl:ml-24"
            >
              Nutrilite
            </motion.p>
            <motion.h1
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="uppercase lg:text-8xl xs:text-4xl sm:text-4xl -mt-14 font-titleFont font-bold tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text xs:text-center xs:mb-5 sm:-mt-12 sm:pt-7 md:pt-7 md:text-left lg:pt-3 lgl:pt-3 xl:pt-14"
            >
              Omega 3 Plus
            </motion.h1>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:text-4xl font-bodyFont font-bold tracking-wide -mt-5 md:px-0 lg:px-0 xl:pt-10 text-textDark xs:text-center md:text-left"
            >
              Los{" "}
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                ácidos grasos
              </span>{" "}
              que tu cuerpo necesita
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                {" "}
                #1 en ventas en el mundo
              </span>
              !
            </motion.p>
            <motion.p
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="lg:text-3xl font-bodyFont tracking-wide font-light -mt-5 xs:pb-10 sm:pt-5 md:px-0 lg:px-0 text-textDark text-justify xl:pt-10 xs:text-center md:text-left"
            >
              No se{" "}
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                oxidan ni huelen a pescado,{" "}
              </span>
              suplemento dietario a base de aceite de pescado y vitamina E en
              cápsulas blandas.
            </motion.p>
            <Link
              href="https://wa.me/5491156177549"
              className="w-full"
              target="_blank"
            >
              <motion.button
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="w-full h-14 text-sm rounded-md text-textLight tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 px-4 animate-bounce hover:animate-none border shadow-md shadow-colorBaseTwo xs:text-sm xs:h-20 xs:mt-5 uppercase font-titleSecondFont"
              >
                Quiero mi omega ahora!
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 5, delay: 0.5 }}
            className="mx-auto md:w-2/4 xl:w-4/12"
          >
            <Image
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale-0 hover:grayscale"
              src={mainPicture}
              alt="Envase de omega 3 Plus Nutrilite"
            />
          </motion.div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default Banner;
