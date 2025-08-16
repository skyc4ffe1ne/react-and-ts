export interface NavbarProps {
  handleImage: () => void;
  inputRef: React.RefObject<null | HTMLInputElement>;
  handleCopy: () => void;
}

export interface SidebarProps {
  canvasRef: React.RefObject<null | HTMLCanvasElement>;
  setZoom: (n: number) => void;
  zoom: number;
  picture: null | HTMLImageElement;
  setColor: (b: boolean) => void;
}
