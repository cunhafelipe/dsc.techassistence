import Image from "next/image";
import Carousel from "./Carousel";
import GridContainer from "./Grid";

import repairScreenIcon from "/public/repairScreenIcon.png";
import repairIcon from "/public/repairIcon.png";
import battery from "/public/batteryIcon.png";
export default function ServiceSection() {
  return (
    <section className="w-full pt-10 bg-green-secundary" id="services">
      <GridContainer>
        <div className="max-w-7xl mx-auto px-5 ">
          <Carousel />
        </div>
      </GridContainer>
      <div className="w-full py-10 bg-green-primary max-h-full md:mt-10">
        <GridContainer>
          <h2 className="text-green-botton text-6xl md:mb-10">Serviços</h2>
          <div className="shadow-xl p-5 rounded-lg">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src={repairScreenIcon} alt="repair Icon" width={60} />
                <h3 className="text-white text-lg">Reparo de tela</h3>
              </div>
              <span className="text-green-actived">
                Oferecemos serviços especializados de reparo e troca de tela
                para diversos modelos de celulares. Se a tela do seu dispositivo
                sofreu danos devido a quedas, impactos ou outros acidentes,
                estamos aqui para ajudar. Utilizamos peças de alta qualidade e
                realizamos o processo de substituição de maneira rápida e
                eficiente, garantindo que seu celular volte a funcionar
                perfeitamente e com a mesma nitidez e sensibilidade ao toque da
                tela original. Confie na nossa experiência para devolver ao seu
                aparelho a aparência e funcionalidade ideais.
              </span>
            </div>
          </div>
          <div className="shadow-xl  p-5 rounded-lg mt-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src={repairIcon} alt="repair Icon" width={60} />
                <h3 className="text-white text-lg">Troca de carcaça</h3>
              </div>
              <span className="text-green-actived">
                Se a carcaça do seu celular sofreu danos, como arranhões,
                trincos ou outros desgastes, oferecemos um serviço especializado
                de reparo e troca de carcaça. Nossa equipe utiliza peças de alta
                qualidade para garantir que seu dispositivo recupere sua
                aparência original e fique protegido contra futuros danos. O
                processo é realizado com rapidez e eficiência, devolvendo ao seu
                celular uma aparência nova e durável.
              </span>
            </div>
          </div>
          <div className="shadow-xl p-5 rounded-lg mt-5">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src={battery} alt="repair Icon" width={60} />
                <h3 className="text-white text-lg">Troca de bateria</h3>
              </div>
              <span className="text-green-actived">
                Se a bateria do seu celular não está mais segurando carga como
                antes ou está apresentando problemas, oferecemos um serviço
                especializado de troca de bateria. Utilizamos baterias de alta
                qualidade e garantimos uma substituição rápida e eficiente para
                que seu dispositivo volte a ter uma excelente duração de
                bateria. Nossa equipe está pronta para devolver a autonomia e o
                desempenho do seu aparelho, proporcionando maior conveniência no
                seu dia a dia. Confie em nós para manter seu celular sempre
                funcional.
              </span>
            </div>
          </div>
        </GridContainer>
      </div>
    </section>
  );
}
