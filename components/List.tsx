import { BsPatchCheckFill } from "react-icons/bs";

const List = () => {
  const items = [
    {
      id: 1,
      text: "Altamente efectivo",
    },
    { id: 2, text: "Concentrado, con una duración de 6 a 7 meses" },
    {
      id: 3,
      text: "Blanquea sin dañar el esmalte",
    },
    {
      id: 4,
      text: "Mayor efectividad, requiere menos fluoruro y es más seguro",
    },
    {
      id: 5,
      text: "Producto exclusivo",
    },
    { id: 6, text: "Producto extremadamente económico" },
    {
      id: 7,
      text: "Garantía de Satisfacción",
    },
    {
      id: 8,
      text: "Reduce 6 envases por unidad comprada en comparación con los dentífricos más comunes",
    },
  ];
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4">
      <div className="w-10/12 flex flex-col items-center">
        <div className="block max-w-container p-6 bg-gradient-to-r from-black to-gray-900 transition-300  rounded-lg border-1 shadow-md border-btnColor1 drop-shadow-sm shadow-btnColor1">
          <h2 className="mb-2 xs:text-xl sm:text-xl md:text-xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-btnColor2 to-btnColor1 text-transparent bg-clip-text text-center">
            TODO LO QUE RECIBES AL <br /> ADQUIRIR NUESTRA PASTA DENTAL
          </h2>
          <ul className="flex flex-col items-center">
            {items.map((item) => (
              <li key={item.id} className="flex items-center py-2">
                <BsPatchCheckFill className="text-btnColor1 mr-2" />
                <p className="font-bodyFont xs:text-xs sm:text-sm md:text-base lg:text-1xl">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center">
            <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-4xl font-bodyFont tracking-tight text-center">
              1x de{" "}
              <span className="xs:text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-bodyFont font-semibold text-textPriceColor animate-pulse">
                $ 1.433,88
              </span>
            </p>
            {/* <p className="xs:text-xl sm:text-xl md:text-2xl lg:text-4xl font-bodyFont uppercase pt-10">
              O 997,00 1.433,88
            </p> */}
          </div>
        </div>
        <button className="w-2/5 h-14 text-sm font-titleFont rounded-md text-textGreen tracking-wide bg-gradient-to-r from-btnColor1 to-btnColor2 hover:from-btnColor2 hover:to-btnColor1 font-bold py-2 px-4 animate-bounce border shadow-md shadow-btnColor1 xs:text-sm xs:h-20 xs:mt-5 uppercase">
          Voy a comprar mi pasta ahora!
        </button>
      </div>
    </section>
  );
};

export default List;
