import type { ReactSVGElement } from "react";

type ButtonProps = {
  children: ReactSVGElement | string;
  variant: "primary" | "secondary" | "icon" | "icon_secondary" | "accent";
  className?: string;
};

export default function Button({
  children,
  variant,
  className = "",
  ...props
}: ButtonProps) {
  const styleDefault =
    "flex justify-center items-center rounded-md cursor-pointer ";
  const style = {
    primary:
      styleDefault +
      " hover:bg-primary/10 px-4 py-2 bg-primary text-sm font-medium text-primary-fg ",
    secondary: styleDefault + " bg-secondary ",
    accent:
      styleDefault +
      " bg-accent text-accent-fg hover:bg-accent/90 px-4 py-2 text-sm font-medium ",
    icon: styleDefault + " size-9 hover:bg-accent/20 ",
    icon_secondary: styleDefault + " size-9 bg-secondary ",
  };

  return (
    <button className={styleDefault + style[variant] + className} {...props}>
      {children}
    </button>
  );
}
