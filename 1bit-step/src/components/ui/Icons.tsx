export function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export function Circle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

export function Triangle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    </svg>
  );
}


export function CherwonDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />

    </svg>
  );
}

// Pixels Icon
// https://pixeliconlibrary.com/
//
export function KingPxl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="crown-solid"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <polygon points="23 7 23 9 22 9 22 10 21 10 21 14 20 14 20 17 19 17 19 19 18 19 18 21 6 21 6 19 5 19 5 17 4 17 4 14 3 14 3 10 2 10 2 9 1 9 1 7 2 7 2 6 4 6 4 7 5 7 5 9 4 9 4 10 5 10 5 11 6 11 6 12 8 12 8 11 9 11 9 9 10 9 10 7 11 7 11 6 10 6 10 4 11 4 11 3 13 3 13 4 14 4 14 6 13 6 13 7 14 7 14 9 15 9 15 11 16 11 16 12 18 12 18 11 19 11 19 10 20 10 20 9 19 9 19 7 20 7 20 6 22 6 22 7 23 7" />
    </svg>
  );
}

export function FirePxl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="fire-solid"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="m19,13v-3h-1v-1h-1v-3h-1v-2h-1v-1h-1v-1h-1v-1h-2v1h1v2h-1v2h-1v1h-1v1h-1v1h-1v1h-1v3h1v2h-1v-1h-1v-2h-1v2h-1v3h1v2h1v1h1v1h1v1h1v1h8v-1h1v-1h1v-1h1v-2h1v-5h-1Zm-2,7h-1v1h-2v1h-4v-1h-1v-4h1v-1h1v-1h1v-1h1v-3h-1v-1h-1v-1h1v1h2v2h1v5h-1v2h1v-1h1v-1h1v3Z" />
    </svg>
  );
}

export function StarPxl(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="star-solid"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      {...props}
    >
      <polygon points="23 8 23 10 22 10 22 11 21 11 21 12 20 12 20 13 19 13 19 14 18 14 18 19 19 19 19 23 17 23 17 22 15 22 15 21 13 21 13 20 11 20 11 21 9 21 9 22 7 22 7 23 5 23 5 19 6 19 6 14 5 14 5 13 4 13 4 12 3 12 3 11 2 11 2 10 1 10 1 8 8 8 8 6 9 6 9 4 10 4 10 2 11 2 11 1 13 1 13 2 14 2 14 4 15 4 15 6 16 6 16 8 23 8" />
    </svg>
  );
}
