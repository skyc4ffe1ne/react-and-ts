export default function Canvas({ canvasRef }) {
  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="500"
      className="mt-12 border border-red-400"
    ></canvas>
  );
}
