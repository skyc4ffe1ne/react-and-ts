interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement>
	{
		type:string,
		placeholder?:string,
		value?:string,
		className?:string,
}

export default function Input(
	{
		type,
		placeholder,
		value,
		className = "",
		...props
	} : InputProps
){

	const defaultStyle = "font-nerd text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-border/30 h-9 w-full min-w-0 rounded-sm border bg-transparent px-1 py-1 text-base transition-[color,box-shadow] outline-none md:text-sm focus:border-blue-400 hover:border-blue-400 border-transparent disabled:cursor-not-allowed disabled:opacity-50 [&[type=color]]:size-10 cursor-pointer"

	return (
	<input 
			className={
				defaultStyle + " " + className
			}
			type={type}
			value={value}
			placeholder={placeholder}
			{...props}
	/>
	)

}
