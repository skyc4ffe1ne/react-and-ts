import { useLanguage } from "@/contexts/LanguageProvider"

export default function Editor() {
	const { language } = useLanguage()
	return (
		<div className="bg-background-theme text-white px-4">
			<pre> {language} </pre>
		</div>
	)
}

