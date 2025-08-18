import PixelArtCharacter from "./PixelArtCharacter";
export default function WelcomeMessage() {
  return (
    <div className="grid grid-cols-[repeat(10,_50px)] grid-rows-[repeat(10,_50px)]">
      <h1 className="col-start-1 col-end-9 row-start-1 font-mono text-5xl">
        {" "}
        Welcome back, Username{" "}
      </h1>

      <PixelArtCharacter />

      <div className="flex items-center justify-center gap-8">
        {/*Weekly Goal*/}

        {/*<div className="mx-auto grid grid-cols-[repeat(7,_24px)] grid-rows-[repeat(2,_24px)] place-content-center">
          <span className="mx-auto"> L </span>
          <span className="mx-auto"> M </span>
          <span className="mx-auto"> M </span>
          <span className="mx-auto"> G </span>
          <span className="mx-auto"> V </span>
          <span className="mx-auto"> S </span>
          <span className="mx-auto"> D </span>
        </div>*/}
        <div className="bg-background h-[80px] w-full">{/*Achiviment*/}</div>
      </div>
    </div>
  );
}
