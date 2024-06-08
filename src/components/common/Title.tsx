import Image from "next/image";
import image from "./static/UndefinedImage.svg";
import clsx from "clsx";
type TitleProps = {
  className?: string;
  title?: string;
  description?: string;
};
export default function Title({
  className,
  title = "Title Goes Here",
  description = "Exercitation quis et enim sunt velit pariatur non incididunt irure enim in elit. Exercitation quis et enim sunt velit pariatur non incididunt irure enim in elit.",
}: TitleProps) {
  return (
    <div className={clsx("flex flex-col gap-4", className)}>
      <Image src={image} alt="image" />
      <div className="flex flex-col gap-1">
        <p className="text-xl text-standart_blue-800 font-medium">{title}</p>
        <span className=" text-standart_blue-400">{description}</span>
      </div>
    </div>
  );
}
