import { superPreview } from "@/public/assets";
import Image from "next/image";
import { BsPatchCheckFill } from "react-icons/bs";

const AboutMe = () => {
  const items = [
    {
      id: 1,
      text: "Agua.",
    },
    {
      id: 2,
      text: "Sorbitol: Es un alcohol extraído del azúcar que mantiene la humedad en el producto.",
    },
    {
      id: 3,
      text: "Sílice hidratada: Agente abrasivo que sirve para limpiar y dar brillo a los dientes.",
    },
    {
      id: 4,
      text: "Glicerina: Ayuda a disolver los ingredientes y a prevenir la sequedad o el endurecimiento, manteniendo el producto suave.",
    },
    {
      id: 5,
      text: "Propilenglicol: Es un humectante que mantiene el producto hidratado y también ayuda a disolver los diversos ingredientes.",
    },
    {
      id: 6,
      text: "Lauril sulfato de sodio: Agente que produce espuma para ayudar a distribuir el producto en la boca y eliminar los residuos de los alimentos.",
    },
    {
      id: 7,
      text: "Xilitol: Edulcorante natural presente en las fibras de las plantas.",
    },
    {
      id: 8,
      text: "PEG-8: Es una molécula formada por varias moléculas de polietilenglicol que actúa como humectante y solvente, controlando la viscosidad de la pasta de dientes.",
    },
    {
      id: 9,
      text: "Aroma: Tiene un aroma suave a mentol.",
    },
    {
      id: 10,
      text: "CI 77891: Dióxido de titanio, un colorante utilizado para dar el color blanco.",
    },
    {
      id: 11,
      text: "Goma de xantano: Espesante de origen natural.",
    },
    {
      id: 12,
      text: "Fluoruro de sodio: Molécula que proporciona iones de flúor.",
    },
    {
      id: 13,
      text: "Sacarina: Edulcorante que mejora el sabor.",
    },
    {
      id: 14,
      text: "Metilparabeno: Conservante que previene la formación de hongos, bacterias y otros microorganismos.",
    },
    {
      id: 15,
      text: "Propilparabeno: Conservante que previene la formación de hongos, bacterias y otros microorganismos.",
    },
    {
      id: 15,
      text: "Limoneno: Aromatizante cítrico de origen natural y solvente.",
    },
  ];
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 my-10">
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-auto md:w-2/4">
            <Image
              className="transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
              src={superPreview}
              alt="Pasta dental Glister demostración"
            />
          </div>
          <div className="mx-auto md:w-2/4">
            <h2 className="font-titleFont xs:text-base xs:text-center sm:text-base xs:pt-40 md:pt-0 md:text-lg lg:text-5xl font-semibold uppercase text-textDark">
              Análisis de los{" "}
              <span className="bg-gradient-to-r from-btnColor1 to-btnColor2 text-transparent bg-clip-text text-center">
                ingredientes
              </span>
            </h2>
            <ul className="flex flex-col items-start">
              {items.map((item) => (
                <li key={item.id} className="flex items-center py-2">
                  <BsPatchCheckFill className="text-btnColor1 mr-2" />
                  <p className="font-bodyFont xs:text-xs sm:text-sm md:text-base lg:text-1xl text-textDark">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-1/5 border border-t border-gray-700"></div>
    </section>
  );
};

export default AboutMe;
