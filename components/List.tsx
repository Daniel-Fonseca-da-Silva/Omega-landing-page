import Link from "next/link";
import { BsPatchCheckFill } from "react-icons/bs";

const List = () => {
  const items = [
    {
      id: 1,
      text: "Producto en tendencia",
    },
    { id: 2, text: "Su costo es accesible" },
    {
      id: 3,
      text: "La mejor calidad",
    },
    {
      id: 4,
      text: "Promueve el bienestar",
    },
    {
      id: 5,
      text: "Hecho con igredientes naturales",
    },
    {
      id: 6,
      text: "Promueve una vida saludable",
    },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 flex flex-col items-center">
        <div className="block max-w-container p-6 bg-gradient-to-r from-colorBaseOne to-colorBaseTwo transition-300  rounded-lg border-1 shadow-md border-colorBaseTwo drop-shadow-sm shadow-colorBaseTwo mb-2">
          <h2 className="mb-2 xs:text-xl sm:text-xl md:text-xl lg:text-4xl font-bold tracking-tight  text-textLight text-center uppercase">
            TODO LO QUE RECIBES AL <br /> ADQUIRIR NUESTRO OMEGA 3
          </h2>
          <ul className="flex flex-col items-center">
            {items.map((item) => (
              <li key={item.id} className="flex items-center py-2">
                <BsPatchCheckFill className="text-textLight mr-2" />
                <p className="font-bodyFont xs:text-xs sm:text-sm md:text-base lg:text-1xl">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
            <p className="xs:text-base sm:text-base md:text-2xl lg:text-4xl font-bodyFont tracking-tight text-center">
              1x de{" "}
              <span className="xs:text-3xl sm:text-3xl md:text-6xl lg:text-8xl font-bodyFont font-semibold text-textPriceColor animate-pulse">
                $ 3.422,00
              </span>
            </p>
          </div>
        </div>
        <Link href="https://wa.me/5524981579339" target="_blank">
          <button className="w-full my-10 text-sm rounded-md text-textGreen tracking-wide bg-gradient-to-r from-colorBaseOne to-colorBaseTwo hover:from-colorBaseTwo hover:to-colorBaseOne font-bold py-2 xs:px-5 sm:px-5 md:px-8 lg:px-40 animate-bounce border shadow-md shadow-colorBaseTwo xs:h-20 uppercase font-titleSecondFont">
            Quiero mi omega ahora!
          </button>
        </Link>
      </div>
    </section>
  );
};

export default List;
