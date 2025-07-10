export default function PreviewCurriculumEducation({ state }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Education
      </h3>
      <hr />
      {state.education.map(
        (
          { school, degree, description, startDate, finishDate },
          idx,
        ) => (
          <div key={idx} className="px-2">
            <div className="flex justify-between items-center">
              <h4 className="text-xl">
                {school ? school : "University of Pennsylvania"}
              </h4>
              <p className="text-sm"> <span>{startDate ? startDate + "-" : "2024/02/12 - "}</span> <span> {finishDate ? finishDate : "2024/02/12"} </span> </p>
            </div>
            <h5> {degree ? degree : "BS in Computer Science"} </h5>
            <ul>
              <li className="ml-8 list-disc">
                {description ? description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsum?"}
              </li>

            </ul>
          </div>
        ),
      )}
    </div>
  );
}
