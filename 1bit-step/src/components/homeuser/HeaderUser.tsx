import WelcomeMessage from "./headerUser/WelcomeMessage";
import PixelArtCharacter from "./headerUser/PixelArtCharacter";
import ChartUser from "./headerUser/ChartUser";
export default function HeaderUser() {
  return (
    <div className="grid grid-cols-[minmax(0,_400px)_minmax(0,_800px)] place-content-center">
      <WelcomeMessage />
      <ChartUser />
    </div>
  );
}
