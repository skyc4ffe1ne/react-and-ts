export default function Header({ inputRef, handleImage }) {
  return (
    <div className="mt-20 flex flex-col items-center justify-center text-center">
      <h1 className="from-foreground to-background bg-gradient-to-br bg-clip-text py-4 text-4xl font-medium tracking-tighter text-transparent md:max-w-6xl md:text-6xl md:text-balance">
        Turn any image into stunning ASCII art instantly
      </h1>
      <p className="text-secondary-foreground mt-2 mb-8 max-w-3xl text-center text-sm text-balance sm:text-lg/6">
        An utility web-app that make you to convert an image into an{" "}
        <span className="font-mono">ascii-art</span>, that can be downloaded and
        edited!
      </p>

      <label htmlFor="upload">
        <span
          className="border-broder bg-primary hover:bg-foreground/75 cursor-pointer rounded-xl border px-4 py-2 text-sm/5 font-semibold text-gray-100 focus:outline-2 focus:outline-offset-2 focus:outline-blue-400"
          tabIndex={0}
        >
          Insert img
        </span>
        <input
          type="file"
          id="upload"
          hidden
          onChange={() => handleImage()}
          ref={inputRef}
        />
      </label>
    </div>
  );
}
