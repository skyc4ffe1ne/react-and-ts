export default function PreviewCurriculumEducation({ state }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Education
      </h3>
      <hr />
      {state.education.map(
        (
          { school, degree, description, startDate, finishDate, location },
          idx,
        ) => (
          <div key={idx} className="px-2">
            <h4 className="text-xl">
              {degree ? degree : ""}
              {startDate ? (
                <span className="text-base"> {startDate} </span>
              ) : (
                ""
              )}
              <span className="text-base">{finishDate ? finishDate : ""}</span>
            </h4>
            {school ? <h5>{school} </h5> : ""}
            {location ? <h5>{location} </h5> : ""}
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
