import clsx from "clsx";

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx("container max-w-screen-xl px-20 p-4 mx-auto", className)}
    >
      {children}
    </div>
  );
}
