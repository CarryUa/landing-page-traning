import Image from "next/image";
import Container from "../common/Container";
import HeaderNav from "./HeaderNav";

export default function Header() {
  return (
    <section className="fixed w-full text-black ">
      <Container>
        <HeaderNav />
      </Container>
    </section>
  );
}
