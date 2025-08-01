type Variant = "primary" | "secondary" | "link";
export default function Button({
  children,
  variant,
  ...other
}: {
  children: React.ReactNode;
  variant: Variant;
}) {
  const s =
    "text-sm text-medium rounded-xl focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer has-[svg]:flex has-[svg]:justify-center has-[svg]:items-center has-[svg]:gap-2 py-2 px-4 ";

  const v = {
    primary: "bg-foreground text-background hover:bg-primary/80 ",
    secondary: "bg-secondary text-foreground-secondary hover:bg-secondary/70 ",
    link: "size-7 ",
  };
  return (
    <button className={s + v[variant]} {...other}>
      {children}
    </button>
  );
}
