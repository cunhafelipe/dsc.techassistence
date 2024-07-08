import Image from "next/image";
import GridContainer from "./Grid";

import WhatsApp from "/public/whatsapp.png";
import Instagram from "/public/instagram.png";

export default function Contact() {
  return (
    <section className="w-full bg-green-secundary py-10" id="contact">
      <GridContainer>
        <h2 className="text-green-botton text-6xl md:mb-10">Contato</h2>
        <div className="shadow-xl p-5 rounded-lg mt-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={WhatsApp} alt="repair Icon" width={30} />
                <h3 className="text-white text-lg">(11 94330-5197)</h3>
              </div>
              <a
                href="https://wa.me/5511943305197"
                target="_blank"
                rel="noopener noreferrer"
                className="md:px-5 md:py-2 px-3 py-1 bg-green-botton rounded-3xl"
              >
                Contato
              </a>
            </div>
          </div>
        </div>
        <div className="shadow-xl  p-5 rounded-lg mt-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image src={Instagram} alt="repair Icon" width={30} />
                <h3 className="text-white text-lg">Instagram</h3>
              </div>
              <a
                href="https://www.instagram.com/dsc.techassistence/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-3xl text-green-botton underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </GridContainer>
    </section>
  );
}
