export default function Canvas({ canvasRef }) {
  return (
    <canvas
      ref={canvasRef}
      className="bg-background z-50 rounded-md shadow-md"
    ></canvas>
  );
}
