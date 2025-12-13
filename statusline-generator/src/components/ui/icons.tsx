export function Sun(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<path
				fillRule="evenodd"
				d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"
			></path>
		</svg>
	);
}

export function Moon(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
			<path
				fillRule="evenodd"
				d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"
			></path>
		</svg>
	);
}



export function Logo(props: React.SVGProps<SVGSVGElement>) {
	return (
		<svg width="118" height="24" viewBox="0 0 118 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<g id="Logo">
				<rect id="Rectangle 41" x="0" width="48" height="24" fill="url(#paint0_linear_2003_8)" />
				<path id="Rectangle 42"
					d="M48 0H114C116.209 0 118 1.79086 118 4V20C118 22.2091 116.209 24 114 24H48V0Z"
					fill="url(#paint1_linear_2003_8)" />
			</g>
			<defs>
				<linearGradient id="paint0_linear_2003_8" x1="0" y1="12" x2="48" y2="12" gradientUnits="userSpaceOnUse">
					<stop stopColor="#878787" />
					<stop offset="0.5" stopColor="#A6A6A6" />
					<stop offset="1" stopColor="#FF637E" />
				</linearGradient>
				<linearGradient id="paint1_linear_2003_8" x1="48" y1="12" x2="118" y2="12" gradientUnits="userSpaceOnUse">
					<stop stopColor="#FB64B6" />
					<stop offset="0.5" stopColor="#C27AFF" />
					<stop offset="1" stopColor="#7C86FF" />
				</linearGradient>
			</defs>
		</svg>
	)
}


export function ChervonDown(props: React.SVGProps<SVGSVGElement>) {
	return (

		<svg xmlns="http://www.w3.org/2000/svg"
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
	)
}
