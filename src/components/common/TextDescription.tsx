import clsx from "clsx";

type TextDescriptionProps = {
  header: string;
  text: string;
  className?: string;
};
export default function TextDescription({
  header,
  text,
  className,
}: TextDescriptionProps) {
  return (
    <div className={clsx("max-w-[720px] flex flex-col gap-6", className)}>
      <p className="text-standart_blue-800 text-4xl font-medium">{header}</p>
      <span className="text-standart_blue-400 text-lg">{text}</span>
    </div>
  );
}
