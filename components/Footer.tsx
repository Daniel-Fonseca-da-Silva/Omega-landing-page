import Link from "next/link";

const Footer = () => {
  return (
    <section className="w-full mx-auto py-10 mdl:py-24 flex flex-col items-center gap-4 lgl:gap-8 mdl:px-10 xl:px-4 transition-300 shadow-2xl bg-footerColor">
      <div className="w-10/12 -mb-10 -mt-10">
        <div className="flex flex-col items-center">
          <p className="xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-3xl font-bodyFont tracking-wide uppercase text-center">
            COPYRIGHT 2023 -{" "}
            <a
              target="_blank"
              href="https://dafon.dev/pt/main/"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              @Dafon
            </a>{" "}
            - Todos los derechos reservados
          </p>
          <p className="xs:text-sm sm:text-sm md:text-base lg:text-lg xl:text-3xl md:text-basefont-bodyFont tracking-wide uppercase text-center">
            <Link
              href="/termsOfUse"
              target="_blank"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              Términos de uso
            </Link>{" "}
            |{" "}
            <Link
              href="/termsOfUse"
              target="_blank"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              Política de privacidad
            </Link>{" "}
            |{" "}
            <a
              href="mailto:enricoganchiel@gmail.dev"
              className="text-textSpecialLinkColor hover:text-btnColor2"
            >
              Contacto
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
