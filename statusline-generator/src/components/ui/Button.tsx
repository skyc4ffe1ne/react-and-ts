
interface ButtonProps 
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: React.ReactNode;
}

export default function Button({ className = "", children, ...other }: ButtonProps) {
	const defaultStyle = "inline-flex items-center justify-center whitespace-nowrap rounded-xs font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 has-[>svg]:gap-2 cursor-pointer"
	return (
		<button
			className={defaultStyle + " " + className}
			{...other}
		>
			{children}
		</button>
	)
}


