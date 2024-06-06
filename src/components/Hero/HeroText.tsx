import LearnMoreButton from "../common/buttons/LearnMoreButton";
import StandartButton from "../common/buttons/StandartButton";

export default function HeroText() {
  return (
    <div className="flex flex-col max-w-[540px] gap-14">
      <div className="flex flex-col gap-5">
        <h2 className="text-standart_blue-800 text-5xl font-medium">
          Introduce Your Product Quickly & Effectively
        </h2>
        <p className="text-standart_blue-400 text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </p>
      </div>
      <div className="flex gap-8">
        <StandartButton
          className="max-w-[190px] px-8 p-[5px]"
          href="/shop/UIkit"
        >
          Purchase UI Kit
        </StandartButton>
        <LearnMoreButton href="/shop/UIkit/learnMore">
          Learn More
        </LearnMoreButton>
      </div>
    </div>
  );
}
