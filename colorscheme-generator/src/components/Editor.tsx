import { useLanguage } from "@/contexts/LanguageProvider"
import { useEffect, useRef } from "react"

export default function Editor() {
	const { language } = useLanguage()

	const codeContainer = useRef<HTMLPreElement	| null>(null)

	useEffect(function() {
		if(!codeContainer || !codeContainer.current) return;
		codeContainer.current.innerHTML = language;
	}, [language])

	return (
		<div className="bg-background-theme text-white px-4">
			<pre ref={codeContainer}></pre>
		</div>
	)
}

