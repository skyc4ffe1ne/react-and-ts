import type { State } from "../../lib/types"
export default function PreviewCurriculumLanguage({ state }: { state: State }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Languages
      </h3>
      <hr />
      {state.language.map(
        ({ lang, grade }, idx) => (
          <div key={idx} className="px-2 flex justify-between items-center">
            <h4 className="text-xl">
              {lang ? lang : "English"}
            </h4>
            <span className="text-sm"> {grade ? grade : "(Native/C2)"} </span>
          </div>
        ),
      )}
    </div>
  );
}
