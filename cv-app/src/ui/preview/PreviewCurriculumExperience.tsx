export default function PreviewCurriculumExperience({ state }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Experience
      </h3>
      <hr />
      {state.experience.map(
        ({ role, company, description, startDate, finishDate }, idx) => (
          <div key={idx} className="px-2">
            <h4 className="text-xl">
              {role ? role : ""}
              {startDate ? (
                <span className="text-base"> {startDate} </span>
              ) : (
                ""
              )}
              <span className="text-base">{finishDate ? finishDate : ""}</span>
            </h4>
            <ul>
              <li className="ml-8 list-disc">
                {description ? description : ""}
              </li>
            </ul>
          </div>
        ),
      )}
    </div>
  );
}
