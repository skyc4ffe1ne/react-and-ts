export default function FinihScreen({ timer, userTypng, text, currIdx }) {
  const onlyChar = text.split("");
  let caratteriCorretti = 0;

  for (let i = 0; i < userTypng.length; i++) {
    userTypng[i] === onlyChar[i] ? caratteriCorretti++ : caratteriCorretti;
  }

  const precision = (caratteriCorretti / userTypng.length) * 100;
  return (
    <div>
      <h1> Finish Screen </h1>
      <p>WPM: {((userTypng.length / 5) * (60 / timer)).toFixed(2)}</p>
      <p> Precision: {precision.toFixed(2)}% </p>
    </div>
  );
}
