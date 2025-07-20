import type { ReactSVGElement } from "react";

type ButtonIconProps = {
  children: ReactSVGElement;
  variant: "primary" | "secondary";
  other: string;
};

export default function ButtonIcon({
  children,
  variant,
  other = "",
}: ButtonIconProps) {
  console.log(other);
  const styleDefault =
    "size-9 flex justify-center items-center rounded-md cursor-pointer ";
  const style = {
    primary: styleDefault + " hover:bg-blue-400/40 ",
    secondary: styleDefault + " bg-gray-400 ",
  };

  return (
    <button className={styleDefault + style[variant] + other}>
      {children}
    </button>
  );
}
