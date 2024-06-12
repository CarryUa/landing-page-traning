import Image, { StaticImageData } from "next/image";
import TextDescription from "../common/TextDescription";
type ProductDescriptionProps = {
  image: string | StaticImageData;
  alt: string;
  header: string;
  text: string;
  children?: any;
};
export default function ProductDescription({
  image,
  alt,
  header,
  text,
  children,
}: ProductDescriptionProps) {
  return (
    <div className="flex justify-between items-center gap-10 text-center md:text-left">
      <Image
        className="max-h-[400px] object-cover max-w-[445px]  hidden md:block"
        src={image}
        alt={alt}
      />
      <div className="flex flex-col items-center md:items-start min-w-64">
        <TextDescription className="z-10" header={header} text={text} />
        {children}
      </div>
    </div>
  );
}
