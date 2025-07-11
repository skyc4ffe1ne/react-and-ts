
export default function PreviewCurriculumProject({ state }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Projects
      </h3>
      <hr />
      {state.project.map(
        ({ nameProject, link, description, startDate, finishDate }, idx) => (
          <div key={idx} className="px-2">
            <div className="flex justify-between items-center">
              <h4 className="text-xl">
                {nameProject ? nameProject : "3D print house, palace, bank"}
              </h4>
              <p>
                <span className="text-sm"> {startDate ? startDate + " - " : "1970/01/01 - "} </span>
                <span className="text-sm">{finishDate ? finishDate : "1990/01/01"}</span>
              </p>
            </div>
            <a href={link ? link : "#"} target="_blank" className="text-blue-900"> {link ? link : "github.com/<name>/<repo>"}</a>
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
