export default function FieldController({ title }: { title: string, children: React.ReactNode }) {

	return (
		<div className="mb-6">
			<h3 className="text-sm/5 font-semibold text-foreground pb-3">
				{title}
			</h3>
			<div className="bg-background rounded-xs flex gap-2 items-center focus:border focus:border-accent font-nerd">

					<Input type="number"
						value={localFontSize}
						onChange={(e) => setLocalFontSize(e.target.value)}
						onBlur={() => {
							dispatch({ type: "CHANGE_FONTSIZE", payload: { fontSize: localFontSize } });
						}}
					/>

			</div>


		</div>
	)
}


