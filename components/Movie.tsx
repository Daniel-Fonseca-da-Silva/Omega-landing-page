import VideoPlayer from "./VideoPlayer";

const Movie = () => {
  return (
    <section className="w-full mx-auto mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 mt-10">
      <div className="w-10/12 my-10 flex flex-col items-center">
        <h2 className="lg:text-4xl xs:text-base sm:text-base md:text-2xl font-bodyFont font-semibold tracking-wide text-center mb-5 text-textDark uppercase">
          Los ácidos grasos…{" "}
          <span className="text-colorBaseTwo animate-pulse">
            que tu cuerpo necesita
          </span>
        </h2>
        <div className="flex flex-col md:flex-row justify-center">
          <VideoPlayer />
        </div>
      </div>
      <div className="w-1/5 border border-t border-colorBaseTwo"></div>
    </section>
  );
};

export default Movie;
