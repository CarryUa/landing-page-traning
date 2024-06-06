import StandartButton from "@/components/common/buttons/StandartButton";
import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="flex justify-between">
      <div className="flex gap-10 text-lg text-standart_blue-400 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>contact us</Link>
      </div>
      <h1 className="text-standart_blue-500 font-black text-3xl">Landing</h1>
      <StandartButton className="px-20" href="/shop">
        Buy Now
      </StandartButton>
    </div>
  );
}
