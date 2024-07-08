import Image from "next/image";
import Icon from "../../../public/icon.png";

import GridContainer from "./Grid";
import Link from "next/link";

const arrayMenu = ["Serviços", "Contato"];
export default function Header() {
  const activedStyled = "bg-green-actived text-white";
  return (
    <header className="bg-green-primary">
      <GridContainer className="flex items-center justify-between px-5 py-5">
        <Image src={Icon} alt="Icon" width={50} />
        <div className="">
          <nav>
            {arrayMenu.map((item, index) => {
              return (
                <Link
                  href={index === 0 ? "#services" : "#contact"}
                  key={index}
                  className="px-3 py-1 text-white opacity-40 hover:bg-green-actived hover: rounded-lg hover:opacity-100"
                >
                  {item}
                </Link>
              );
            })}
          </nav>
        </div>
      </GridContainer>
    </header>
  );
}
