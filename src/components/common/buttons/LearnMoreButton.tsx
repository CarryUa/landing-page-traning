import Link from "next/link";
import clsx from "clsx";
type LearnMoreButtonProps = {
  children: any;
  href: string;
  className?: string;
};
export default function LearnMoreButton({
  children,
  href,
  className,
}: LearnMoreButtonProps) {
  return (
    <Link
      className={clsx(
        " text-standart_blue-800 border-2 border-standart_blue-800 p-1 px-12 rounded-sm ",
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
}
