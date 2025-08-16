export default function Canvas({
  canvasRef,
}: {
  canvasRef: React.RefObject<null | HTMLCanvasElement>;
}) {
  return (
    <canvas
      ref={canvasRef}
      className="bg-background z-50 rounded-md shadow-md"
    ></canvas>
  );
}
