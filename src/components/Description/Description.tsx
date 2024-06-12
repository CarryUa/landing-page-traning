import Image from "next/image";
import Container from "../common/Container";
import TextDescription from "../common/TextDescription";
import Title from "../common/Title";
import ProductDescription from "./ProductDescription";
import backgroundimage from "./static/BackgroundImage.svg";
import HappyNewsImage from "./static/HappyNews.svg";
import MentionImage from "./static/Mention.svg";
import SocialInfluenserImage from "./static/SocialInfluenser.svg";
export default function Description() {
  return (
    <section>
      <Container>
        <div className="min-h-[100vh] relative ">
          <div className="flex flex-col left-[15%] md:left-[5%] gap-14 md:top-1/4 max-w-[650px] top-[10%] absolute ">
            <TextDescription
              header="Light, Fast & Powerful"
              text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.d"
            />
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
        </div>
        <div className="flex flex-col gap-28">
          <ProductDescription
            image={HappyNewsImage}
            alt="Happy News Image"
            header="Light, Fast & Powerful"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.d"
          />
          <ProductDescription
            image={SocialInfluenserImage}
            alt="Happy News Image"
            header="Light, Fast & Powerful"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.d"
          />
          <ProductDescription
            image={MentionImage}
            alt="Happy News Image"
            header="Light, Fast & Powerful"
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.d"
          />
        </div>
      </Container>
    </section>
  );
}
