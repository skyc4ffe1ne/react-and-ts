export default function Canvas({ canvasRef }) {
  return (
    <canvas
      ref={canvasRef}
      width="1200"
      height="500"
      className="bg-background z-50 shadow-md rounded-md"
    ></canvas>
  );
}
