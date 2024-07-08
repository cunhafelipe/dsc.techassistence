import { Carousel } from "flowbite-react";
import Image from "next/image";

import repair1 from "/public/repair1.jpg";
import repairSucess1 from "/public/repairSucess1.jpg";
import repair2 from "/public/repair2.jpg";
import repairSucess2 from "/public/repairSucess2.jpg";
import repair3 from "/public/repair3.jpg";
import repairSucess3 from "/public/repairSucess3.jpg";

export default function Component() {
  return (
    <div className="w-full max-w-screen-lg mx-auto h-96 sm:h-64 xl:h-80">
      <Carousel slide={false}>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repair1}
            alt="Troca de Traseira"
            className="object-contain h-full w-auto rounded-md"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repairSucess1}
            alt="Reparo"
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repair2}
            alt="Troca de Tela"
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repairSucess2}
            alt="Troca de Tela"
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repair3}
            alt="Troca de Tela"
            className="object-contain h-full w-auto"
          />
        </div>
        <div className="h-full flex items-center justify-center">
          <Image
            src={repairSucess3}
            alt="Troca de Tela"
            className="object-contain h-full w-auto"
          />
        </div>
      </Carousel>
    </div>
  );
}
