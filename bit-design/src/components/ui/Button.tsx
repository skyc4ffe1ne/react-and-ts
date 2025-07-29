export default function Button({ variant, children, ...other }) {
  const s = "cursor-pointer px-2 py-1 ";

  const v = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    ghost: "bg-background",
  };

  return <button className={s + v[variant]} {...other}>{children} </button>;
}
