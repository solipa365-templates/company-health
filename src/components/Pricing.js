"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ButtonGroup from "./ButtonGroup";

const Plan = ({ title }) => {
  return (
    <div className="flex items-center gap-2">
      <CheckCircleIcon className="text-rose-600 text-xl" />
      <span>{title}</span>
    </div>
  );
};

const PricingCard = ({ name, title, price, btnText, trail }) => {
  return (
    <div className="mx-2 md:mx-3 cursor-pointer p-10 transition-all hover:shadow-lg flex flex-col gap-12 rounded-3xl border-neutral-200 border">
      <div className="flex flex-col gap-3">
        <h2 className="text-xl font-semibold capitalize">{name}</h2>
        <span className="text-neutral-500">{title}</span>
      </div>
      <div className="flex flex-col gap-5">
        <Plan title="Construtor de arrastar e soltar" />
        <Plan title="Milhares de modelos" />
        <Plan title="Ferramentas de suporte para blogs" />
        <Plan title="Loja de comércio eletrônico" />
      </div>
      <div className="mx-auto">
        <h2 class="text-4xl text-center leading-none flex items-center pb-4 mb-4">
          <span>${price}</span>
          <span class="text-lg ml-1 font-normal text-neutral-500">
            /Mensal
          </span>
        </h2>
        <button className="w-fit capitalize text-base hover:bg-rose-600 hover:shadow-md hover:shadow-rose-600 hover:border-2 border-2 border-transparent py-3 px-6 text-white bg-rose-600 hover:border-rose-600 hover:text-white rounded-full">
          {btnText}
        </button>
        <span className="block text-rose-600 mt-5 font-semibold animate-bounce cursor-pointer">
          {trail}
        </span>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [plan, setPlan] = useState("Monthly Plan");
  return (
    <section
      className="relative container mx-auto px-5 md:px-16 flex flex-col gap-5"
      id="pricing"
    >
      <div>
        <span className="service-name text-center ">PLANO DE PREÇOS</span>
        <h2 className="title text-center ">Escolha sua política de preços</h2>
      </div>

      <div className="relative transition-all flex gap-1 mx-auto w-fit bg-slate-100 p-2 rounded-full">
        <div
          className={`${
            plan === "Monthly Plan" ? "left-2" : "left-[150px] w-[128px]"
          } transition-all duration-500 absolute top-[.37rem] h-[55px] w-[138px] rounded-full bg-rose-600`}
        ></div>
        <button
          onClick={() => setPlan("Monthly Plan")}
          className={`
          ${plan === "Monthly Plan" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Plano Mensal
        </button>
        <button
          onClick={() => setPlan("Annual Plan")}
          className={`
          ${plan === "Annual Plan" ? "text-white" : "text-rose-600"}
          z-[1] capitalize text-base hover:border-2 border-2 border-transparent py-3 px-5 hover:border-rose-600 rounded-full`}
        >
          Plano Anual
        </button>
      </div>

      {plan === "Monthly Plan" ? (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Plano Gratuito"
            title="Para pequenas equipes ou escritórios"
            price="0"
            btnText="Comece trilha grátis"
          />
          <PricingCard
            name="Rei dos negócios"
            title="Para negócios empresariais"
            price="15"
            btnText="Criar uma conta"
            trail="Ou inicie o teste de 14 dias"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
            Sugerido
            </span>
            <PricingCard
              name="Mestre profissional"
              title="Para desenvolvedores de nível profissional"
              price="24"
              btnText="Criar uma conta"
              trail="Ou inicie o teste de 14 dias"
            />
          </div>
        </Carousel>
      ) : (
        <Carousel {...carouselParams}>
          <PricingCard
            name="Plano Gratuito"
            title="Para pequenas equipes ou escritórios"
            price="0"
            btnText="Comece trilha grátis"
          />
          <PricingCard
            name="Negócio/Empresa"
            title="Para negócios empresariais"
            price="25"
            btnText="Criar uma conta"
            trail="Ou inicie o teste de 10 dias"
          />
          <div className="relative">
            <span className="absolute -top-1 left-10 bg-rose-600 text-white px-2 py-1 rounded-md">
              Sugerido
            </span>
            <PricingCard
              name="Mestre profissional"
              title="Para desenvolvedores de nível profissional"
              price="54"
              btnText="Criar uma conta"
              trail="Ou inicie o teste de 10 dias"
            />
          </div>
        </Carousel>
      )}
    </section>
  );
};

export default Pricing;

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPLaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: <ButtonGroup />,
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1,
};
