import clsx from "clsx";
import Link from "next/link";
type BuyButtonProps = {
  className?: string;
  children: any;
};
export default function BuyButton({ className, children }: BuyButtonProps) {
  return (
    <Link
      className={clsx(
        "bg-standart_blue-800 text-white p-1 px-12 rounded-sm",
        className
      )}
      href={"/shop"}
    >
      {children}
    </Link>
  );
}
