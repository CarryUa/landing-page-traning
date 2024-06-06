import clsx from "clsx";
import Link from "next/link";
type BuyButtonProps = {
  className?: string;
  href: string;
  children: any;
};
export default function StandartButton({
  className,
  children,
  href,
}: BuyButtonProps) {
  return (
    <Link
      className={clsx(
        "bg-standart_blue-800 text-white p-1 px-12 rounded-sm",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
