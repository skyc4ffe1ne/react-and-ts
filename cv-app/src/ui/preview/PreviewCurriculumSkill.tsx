export default function PreviewCurriculumSkill({ state }) {
  return (
    <div className="px-2">
      <h3 className="text-xl font-semibold tracking-wide uppercase first-letter:text-2xl">
        Techincal Skills
      </h3>
      <hr />
      {state.skills.map(
        ({ skill }, idx) => (
          <div key={idx} className="px-2 flex justify-between items-center">
            <h4 className="text-xl">
              {skill ? skill : "Python"}
            </h4>
          </div>
        ),
      )}
    </div>
  );
}
