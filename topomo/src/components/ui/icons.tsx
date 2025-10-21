export function Bin(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 32 32"
      {...props}
    >
      <path d="M 15 3 L 15 5 L 4 5 L 4 7 L 6 7 L 6 18 L 8 18 L 8 7 L 24 7 L 24 18 L 26 18 L 26 7 L 28 7 L 28 5 L 17 5 L 17 3 L 15 3 z M 24 18 L 22 18 L 22 26 L 10 26 L 10 18 L 8 18 L 8 26 L 8 28 L 10 28 L 22 28 L 24 28 L 24 26 L 24 18 z M 13 9 L 13 23 L 15 23 L 15 9 L 13 9 z M 17 9 L 17 23 L 19 23 L 19 9 L 17 9 z"></path>
    </svg>
  );
}
export function Clock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="clock"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m22,9v-2h-1v-2h-1v-1h-1v-1h-2v-1h-2v-1h-6v1h-2v1h-2v1h-1v1h-1v2h-1v2h-1v6h1v2h1v2h1v1h1v1h2v1h2v1h6v-1h2v-1h2v-1h1v-1h1v-2h1v-2h1v-6h-1Zm-1,6h-1v2h-1v2h-2v1h-2v1h-6v-1h-2v-1h-2v-2h-1v-2h-1v-6h1v-2h1v-2h2v-1h2v-1h6v1h2v1h2v2h1v2h1v6Z" />
      <polygon points="16 15 16 16 15 16 15 17 14 17 14 16 13 16 13 15 12 15 12 14 11 14 11 5 13 5 13 13 14 13 14 14 15 14 15 15 16 15" />
    </svg>
  );
}
