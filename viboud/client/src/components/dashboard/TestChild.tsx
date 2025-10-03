interface Props {
  text: string;
  setText: (s: string) => void;
}

export default function TestChild({ text, setText }: Props) {
  console.log("Child props:", text, setText);
  return (
    <div>
      <h2>Child</h2>
      <button onClick={() => setText("new value")}>Change</button>
    </div>
  );
}

