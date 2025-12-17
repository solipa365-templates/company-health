"use client";

import Image from "next/image";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Link from "next/link";

const ServiceCard = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start gap-3 sm:gap-10 lg:w-[90%]">
      <Image
        src={imgSrc}
        width={70}
        height={70}
        alt="features"
        className="mx-auto"
      />
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="leading-loose">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="relative container px-5 md:px-16 mx-auto">
      <div className="flex gap-10 items-center flex-col-reverse lg:flex-row">
        <div className="relative w-full flex-1">
          <Image
            src={"/videobanner.png"}
            width={500}
            height={500}
            alt="video banner"
            className="object-cover w-full"
          />
          <button className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href={"https://youtu.be/#/"} target="_blank">
              <span className="playButton duration-700 w-full h-full bg-rose-500 rounded-full block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></span>
              <PlayArrowIcon className="w-16 h-16 md:w-24 md:h-24 text-white bg-[#ffffffb8] rounded-full" />
            </Link>
          </button>
        </div>
        <div className="flex gap-5 md:gap-10 flex-col flex-1">
          <div className="flex flex-col gap-4">
            <span className="service-name text-center lg:text-left">
              NOSSOS SERVIÇOS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              Objetivos de negócios alcançados com design
            </h2>
          </div>
          <ServiceCard
            imgSrc={"/features/3.svg"}
            title="Recursos Inteligentes"
            desc="Receba seus exames de sangue em casa e deixe a coleta da amostra ser feita pela equipe de gestão. Seus exames de sangue."
          />
          <ServiceCard
            imgSrc={"/features/2.svg"}
            title="Conteúdo Seguro"
            desc="Receba seus exames de sangue em casa e deixe a coleta da amostra ser feita pela administração. Seus exames de sangue."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
