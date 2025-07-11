import type { State } from "../../lib/types"
export default function PreviewCurriculumExperience({ state }: { state: State }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Experience
      </h3>
      <hr />
      {state.experience.map(
        ({ role, company, description, startDate, finishDate }, idx) => (
          <div key={idx} className="px-2">
            <div className="flex justify-between items-center">
              <h4 className="text-xl">
                {role ? role : "Junior Developer"}
              </h4>
              <p>
                <span className="text-sm"> {startDate ? startDate + " - " : "1970/01/01 - "} </span>
                <span className="text-sm">{finishDate ? finishDate : "1990/01/01"}</span>
              </p>
            </div>
            <ul>
              <li className="ml-8 list-disc">
                {description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, eum."}
              </li>
            </ul>
          </div>
        ),
      )}
    </div>
  );
}
