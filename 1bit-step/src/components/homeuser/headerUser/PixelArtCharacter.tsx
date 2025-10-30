import { useEffect, useRef } from "react";
import placeHolderChar from "../../../assets/placeholder_character.png";
import { pixelCharacter } from "../../../data/pixelCharacter.ts";

export default function PixelArtCharacter() {
  const canvasRef = useRef<null | HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

      let hair = pixelCharacter.hair.variants.shortHair;
      let face = pixelCharacter.face.variants.normalFace;
      // The size, is the width and height of the pixel.
      // Based on the size, we can caluclate the new pos x-y times size
      // So if i have a strucutre based on 1 pixel that have size 1
      // I can moltiply the pixel for the size 1 * 4 = 4; 2 * 4 = 8;
      // And the pixel goes in the right place.
      const size = 8;
      for (let i = 0; i < hair.length; i++) {
        ctx.fillStyle = hair[i][2];
        let x = hair[i][0] * size;
        let y = hair[i][1] * size;

        ctx.fillRect(x, y, size, size);
      }

      for (let i = 0; i < face.length; i++) {
        ctx.fillStyle = face[i][2];
        let x = face[i][0] * size;
        let y = face[i][1] * size;

        ctx.fillRect(x, y, size, size);
      }

      () => {
        return ctx.clearRect(0, 0, canvas.width, canvas.height);
      };
    }
  }, []);
  return (
    <div className="row-start-1 mx-auto w-[100px] sm:w-[200px] md:row-start-1">
      <canvas ref={canvasRef} />
    </div>
  );
}
