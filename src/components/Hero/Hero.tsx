import Image from "next/image";
import HeroText from "./HeroText";
import backgroundImage1 from "./static/Backgroundimage1.png";
import backgroundImage2 from "./static/Backgroundimage2.svg";
import Container from "../common/Container";
export default function Hero() {
  return (
    <section className="flex relative items-center h-screen w-screen overflow-x-hidden">
      <Container>
        <HeroText />
        <Image
          className="-z-40 max-w-[80vw] h-full absolute top-0 right-0"
          alt="background image"
          src={backgroundImage1}
        />
        <Image
          className="-z-40 md:z-0 h-2/3 opacity-80 md:opacity-100 absolute bottom-[10%] -right-28 "
          alt="background image"
          src={backgroundImage2}
        />
      </Container>
    </section>
  );
}
