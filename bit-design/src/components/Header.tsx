const drawPrompts: string[] = [
  "house",
  "tree",
  "car",
  "cat",
  "dog",
  "flower",
  "sun",
  "cloud",
  "fish",
  "boat",
  "smiley face",
  "star",
  "heart",
  "mountain",
  "person",
  "bird",
  "umbrella",
  "rainbow",
  "castle",
  "rocket",
];
export default function Header() {
  const chooseRandom = Math.floor(Math.random() * drawPrompts.length);
  return (
    <div className="text-center">
      <h1 className="text-4xl">
        PROMPT:
        <span className="text-blue-400">{drawPrompts[chooseRandom]}</span>{" "}
      </h1>
      <p className="text-xl"> create your pixel art</p>
    </div>
  );
}
