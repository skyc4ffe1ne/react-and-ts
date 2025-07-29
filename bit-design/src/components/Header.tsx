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
  "rocket"
];
export default function Header() {
  const chooseRandom = Math.floor(Math.random() * drawPrompts.length)
  return (
    <div className="text-center">
      <h1 className="text-4xl"> Design here </h1>
      <p className="text-xl"> create your pixel art</p>
      <p> {drawPrompts[chooseRandom]} </p>
    </div>
  );
}
