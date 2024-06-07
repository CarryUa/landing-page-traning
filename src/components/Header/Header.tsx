import Link from "next/link";
import Container from "../common/Container";
import StandartButton from "../common/buttons/StandartButton";

export default function Header() {
  return (
    <section className="fixed w-full text-black ">
      <Container>
        <div className="flex text-nowrap gap-2 justify-between">
          <div className="flex gap-4 md:gap-10 flex-col md:flex-row text-lg text-standart_blue-400 ">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>contact us</Link>
          </div>
          <h1 className="text-standart_blue-500 font-black text-3xl">
            Landing
          </h1>
          <StandartButton className="px-5 md:px-20 max-h-8" href="/shop">
            Buy Now
          </StandartButton>
        </div>
      </Container>
    </section>
  );
}
