import { garantia } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";

const Stamp = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10 border border-y-btnColor1 border-x-transparent bg-darkBanner">
      <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <div className="px-10 py-5 lg:mx-20">
              <div>
                <Image
                  className="w-full"
                  src={garantia}
                  width={500}
                  height={500}
                  alt="El símbolo de nuestra garantía Nutrilite."
                />
              </div>
            </div>
          </div>
          <div className="mx-auto md:w-2/4">
            <h2 className="font-titleFont xs:text-xl sm:text-xl md:text-xl xs:text-center md:text-start lg:text-5xl font-semibold">
              ¡Estás seguro al 100%!
            </h2>
            <p className="text-base xs:text-base sm:text-base md:text-base xs:text-center md:text-start font-bodyFont tracking-wide py-6">
              Si en un plazo máximo de 90 días corridos después de la compra,
              consideras que no es algo que realmente cambiará tu vida,
              simplemente envíame un único correo electrónico solicitando el
              reembolso y recibirás la devolución completa de tu dinero.
            </p>
            <Link
              href="https://wa.me/5491156177549"
              className="w-full"
              target="_blank"
            >
              <button className="w-full h-14 text-sm font-titleFont rounded-md text-textLight tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 px-4 animate-bounce border shadow-md shadow-colorBaseTwo xs:text-sm xs:h-20 xs:mt-5 uppercase font-titleSecondFont">
                ¡Quiero probar hasta los 90 días!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stamp;
