import PixelArtCharacter from "./PixelArtCharacter";
export default function WelcomeMessage() {
  return (
    <div className="grid sm:grid-cols-[repeat(5,_50px)] sm:grid-rows-[repeat(10,_50px)] md:grid-cols-[repeat(8,_50px)] md:grid-rows-[repeat(10,_50px)]">
      <PixelArtCharacter />
    </div>
  );
}
