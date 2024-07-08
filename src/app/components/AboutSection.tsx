import { Smartphone } from "lucide-react";
import GridContainer from "./Grid";
import Image from "next/image";
import IconSmartphone from "/public/smartphone-charging.svg";
import IconSTablet from "/public/tablet-smartphone.svg";
import Phone from "/public/phone.png";

export default function AboutSection() {
  return (
    <section className="relative w-full h-aboutSection bg-green-primary border-t-2 border-green-border">
      <GridContainer className="flex flex-col items-center mt-10">
        <div className="w-full max-w-textAboutSection text-center">
          <h3 className="text-green-actived md:text-xl text-sm">
            Assistência Técnica especializada para Aparelhos Celulares.
          </h3>
          <h1 className="text-white lg:text-7xl md:text-6xl text-3xl font-bold md:mt-10 mt-5">
            DSC.TECHASSISTENCE
          </h1>
          <div className="flex flex-col md:flex-row gap-5 justify-center items-center mt-5">
            <div className="flex gap-2">
              <Smartphone color="white" />
              <span className="text-green-actived">Faça um orçamento</span>
            </div>
            <a
              href="https://wa.me/5511943305197"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-green-botton rounded-3xl"
            >
              Contato
            </a>
          </div>
        </div>
        <div className="relative w-full h-28 max-w-areaIcon mt-4 hidden md:block">
          <Image
            src={IconSmartphone}
            alt="Icon smartphone"
            className="absolute left-0 bottom-0"
          />
          <Image
            src={IconSTablet}
            alt="Icon tablet"
            className="absolute top-0 right-0"
          />
        </div>
        <div className="aboslute w-full max-w-areaMockups">
          <Image
            src={Phone}
            alt=""
            width={380}
            className="relative md:left-[350px] sm:left-[100px] -left-[5px] md:-top-36"
          />
        </div>
      </GridContainer>
    </section>
  );
}
