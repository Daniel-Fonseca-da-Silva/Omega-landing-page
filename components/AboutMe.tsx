import { nutricionNutrilite } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import { GiMedicines } from "react-icons/gi";

const AboutMe = () => {
  const items = [
    {
      id: 1,
      text: "Una porción de Nutrilite Omega Plus te aporta 900mg de omega 3 que necesitas diariamente.",
    },
    {
      id: 2,
      text: "Te brinda ácidos grasos como EPA 450mg y DHA 450mg.",
    },
    {
      id: 3,
      text: "La declaración de la Unión Europea recomienda 250mg de ácidos grasos para un efecto beneficioso.",
    },
    {
      id: 4,
      text: "Cada lote de aceite de pescado es sometido a pruebas de calidad y pureza, cumpliendo los estándares más rigurosos de la industria.",
    },
    {
      id: 5,
      text: "Los estándares de calidad del aceite de pescado usado en la fabricación de nuestro Omega 3 Plus son los recomendados por la World Health Organization.",
    },
    {
      id: 6,
      text: "Está encapsulado al vacío y tiene vitamina E, que evita la oxidación y mantiene los nutrientes intactos.",
    },
    {
      id: 7,
      text: "Su producción no afecta al sistema marino.",
    },
    {
      id: 8,
      text: "No tienen sabor u olor a pescado como otros.",
    },
  ];
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 my-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <Image
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={nutricionNutrilite}
              alt="Envase de Omega 3 Plus de 30 cápsulas y de 90 cápsulas de Nutrilite"
            />
          </div>
          <div className="mx-auto md:w-2/4">
            <h2 className="font-titleFont xs:text-base xs:text-center sm:text-base xs:pt-40 md:pt-0 md:text-lg lg:text-5xl font-semibold uppercase text-textDark">
              ¿Por qué es{" "}
              <span className="bg-gradient-to-r from-colorBaseOne to-colorBaseTwo text-transparent bg-clip-text text-center">
                bueno para ti?
              </span>
            </h2>
            <ul className="flex flex-col items-start">
              {items.map((item) => (
                <li key={item.id} className="flex items-center py-2">
                  <GiMedicines className="text-colorBaseOne mr-2" />
                  <p className="font-bodyFont xs:text-xs sm:text-sm md:text-base lg:text-1xl text-textDark">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              href="https://wa.me/5491156177549"
              className="w-full"
              target="_blank"
            >
              <button className="w-full h-14 text-sm rounded-md text-textLight tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 px-4 animate-bounce border shadow-md shadow-colorBaseTwo xs:text-sm xs:h-20 xs:mt-5 uppercase font-titleSecondFont">
                ¡Aprovecha esta oferta imperdible!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default AboutMe;
