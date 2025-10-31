export default function PixelBlur({
  type,
}: {
  type: "base-t-r" | "sm-b-l" | "xl-b-l";
}) {
  // Direction (top-left);  Size ???
  // w    dx dy
  // base-t-r
  const defaulStyle =
    "absolute rounded-2xl bg-gradient-to-r from-gray-400 to-gray-50 opacity-40 blur-2xl ";
  const s = {
    "base-t-r": "h-20 w-16 top-2 right-4",
    "sm-b-l": "h-16 w-12 bottom-2 left-4",
    "xl-b-l": "h-40 w-3/4 bottom-2 left-0",
  };
  return <div className={defaulStyle + s[type]}></div>;
}
