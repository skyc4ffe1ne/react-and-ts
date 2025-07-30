export default function Button({ variant, children, ...other }) {
  const s = "cursor-pointer px-2 py-1 ";

  const v = {
    primary: " bg-primary text-primary-foreground hover:bg-foreground/10 ",
    secondary: " bg-secondary text-secondary-foreground ",
    ghost:
      " bg-background hover:bg-foreground/10 rounded-md has-[svg]:flex has-[svg]:justify-center has-[svg]:items-center ",
    destructive:
      " bg-background hover:bg-destructive/20 rounded-md has-[svg]:flex has-[svg]:justify-center has-[svg]:items-center ",
  };

  return (
    <button className={s + v[variant]} {...other}>
      {children}
    </button>
  );
}
