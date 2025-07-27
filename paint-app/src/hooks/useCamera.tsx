import { useState } from "react";

export function useCamera() {
  const [cameraPos, setCameraPos] = useState<{
    cameraX: number;
    cameraY: number;
  }>({ cameraX: 0, cameraY: 0 });

  const [zoom, setZoom] = useState<number>(1.0);
}
