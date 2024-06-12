import Image, { StaticImageData } from "next/image";
import TextDescription from "../common/TextDescription";
type ProductDescriptionProps = {
  image: string | StaticImageData;
  alt: string;
  header: string;
  text: string;
};
export default function ProductDescription({
  image,
  alt,
  header,
  text,
}: ProductDescriptionProps) {
  return (
    <div className="flex justify-between items-center">
      <Image className="max-h-[400px]" src={image} alt={alt} />
      <TextDescription className="z-10" header={header} text={text} />
    </div>
  );
}
