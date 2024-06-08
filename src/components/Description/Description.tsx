import Image from "next/image";
import Container from "../common/Container";
import Title from "../common/Title";
import DescriptionText from "./DescriptionText";
import backgroundimage from "./static/BackgroundImage.svg";
export default function Description() {
  return (
    <section className="min-h-[100vh] relative ">
      <Container>
        <div className="flex flex-col left-[15%] md:left-[5%] gap-20 max-w-[650px] top-[10%] absolute ">
          <DescriptionText />
          <div className="flex gap-7">
            <Title className="max-w-sm"></Title>
            <Title className="max-w-sm"></Title>
          </div>
        </div>
        <Image
          className="absolute hidden lg:block right-10 top-1/4 xl:top-[20%] max-w-[30%] max-h-[740px] xl:max-w-[540px] xl:max-h-[500px] "
          src={backgroundimage}
          alt="background image"
        />
      </Container>
    </section>
  );
}
