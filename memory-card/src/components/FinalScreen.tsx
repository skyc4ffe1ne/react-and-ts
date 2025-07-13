export default function FinalScreen({ handleStatus }) {
  return (
    <div className="w-full h-full text-center">
      <h1 className="text-9xl tracking-tighter text-pretty">Congratulation!</h1>
      <p className="pt-6 text-2xl tracking-tight text-balance max-w-5xl mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        impedit nihil non mollitia natus accusamus numquam quas ab libero
        itaque.
      </p>

      <button
        className="mt-10 px-4 py-2 font-medium rounded-md bg-black text-white text-xl cursor-pointer"
        onClick={() => handleStatus("default")}
      >
        Try again!
      </button>
    </div>
  );
}
