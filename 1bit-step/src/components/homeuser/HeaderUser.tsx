import WelcomeMessage from "./headerUser/WelcomeMessage";
import ChartUser from "./headerUser/ChartUser";
import ChartUserMobile from "./headerUser/ChartUserMobile";
export default function HeaderUser() {
  return (
    <div className="grid w-full sm:grid-cols-[minmax(0,_250px)_minmax(0,_800px)] md:grid-cols-[autofill_minmax(0,_800px)]">
      <WelcomeMessage />
      <ChartUser />

      <div className="block w-full sm:hidden">
        <ChartUserMobile />
      </div>
    </div>
  );
}
