export default function StartScreen({ handleKey, introContRef, text }) {
  return (
    <>
      <h2
        className="text-6xl/20 text-gray-500 outline-none"
        tabIndex={0}
        onKeyDown={(e) => handleKey(e)}
        ref={introContRef}
      >
        {text}
      </h2>
    </>
  );
}
