import Image from "next/image";
import React from "react";

const FeatureProduct = ({ imgSrc, title, desc }) => {
  return (
    <div>
      <Image
        src={imgSrc}
        width={100}
        height={100}
        alt="features"
        className="mx-auto"
      />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="container mx-auto px-5 md:px-16" id="features">
      <span className="service-name text-center">QUAL É A FUNÇÃO?</span>
      <h2 className="title text-center">Conheça as características do produto</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-5 text-center mt-10 md:mt-20">
        <FeatureProduct
          imgSrc="/features/1.svg"
          title="Desempenho rápido"
          desc="Receba seus exames de sangue em casa e colete uma amostra para seus exames."
        />
        <FeatureProduct
          imgSrc="/features/2.svg"
          title="Acordo de parceria"
          desc="Receba seus exames de sangue em casa e colete uma amostra para seus exames."
        />
        <FeatureProduct
          imgSrc="/features/3.svg"
          title="Assinatura Profissional"
          desc="Receba seus exames de sangue em casa e colete uma amostra para seus exames."
        />
        <FeatureProduct
          imgSrc="/features/4.svg"
          title="Suporte ao Cliente"
          desc="Receba seus exames de sangue em casa e colete uma amostra para seus exames."
        />
      </div>
    </section>
  );
};

export default Features;
