export interface NavbarProps {
  handleImage: () => void;
  inputRef: React.RefObject<null | HTMLInputElement>;
  handleCopy: () => void;
  picture: null | HTMLImageElement;
  setFC: (b: boolean) => void;
  fc: boolean;
}

export interface SidebarProps {
  canvasRef: React.RefObject<null | HTMLCanvasElement>;
  setZoom: (n: number) => void;
  zoom: number;
  picture: null | HTMLImageElement;
  setColor: (b: boolean) => void;
  accuracy: number;
  setAccuracy: (n: number) => void;
}
