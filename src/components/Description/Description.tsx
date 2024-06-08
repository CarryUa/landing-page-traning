import Image from "next/image";
import Container from "../common/Container";
import Title from "../common/Title";
import DescriptionText from "./DescriptionText";
import backgroundimage from "./static/BackgroundImage.svg";
export default function Description() {
  return (
    <section className="min-h-[100vh] relative overflow-hidden">
      <Container>
        <div className="flex flex-col gap-20 justify-center max-w-[650px] absolute top-1/4">
          <DescriptionText />
          <div className="flex gap-7">
            <Title className="max-w-sm"></Title>
            <Title className="max-w-sm"></Title>
          </div>
        </div>
        <Image
          className="absolute right-10 top-[20%] max-w-[640px] max-h-[500px] "
          src={backgroundimage}
          alt="background image"
        />
      </Container>
    </section>
  );
}
