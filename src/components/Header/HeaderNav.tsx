import Link from "next/link";
import BuyButton from "./BuyButton";
type HeaderNavProps = {
  className?: string;
};
export default function HeaderNav({ className }: HeaderNavProps) {
  return (
    <div className="flex justify-between">
      <div className="flex gap-10 text-sm text-standart_blue-400 ">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>contact us</Link>
      </div>
      <h1 className="text-standart_blue-500 font-black text-2xl">Landing</h1>
      <BuyButton>Buy Now</BuyButton>
    </div>
  );
}
