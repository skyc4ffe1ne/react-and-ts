export default function Button({ children, type, ...other }) {
  const base =
    "cursor-pointer rounded-md  px-2 py-1 text-sm/5 font-medium has-[svg]:flex has-[svg]:gap-2 has-[svg]:items-center ";
  const styles = {
    primary: base + "bg-black text-white hover:bg-black/75",
    secondary:
      base + "bg-white text-black border border-black hover:bg-black/5",
  };

  return (
    <button className={styles[type]} {...other}>
      {children}
    </button>
  );
}
