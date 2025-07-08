export default function PreviewCurriculumExperience({ state }) {
  console.log("Preview: ", state);
  return (
    <div>
      <h3> Experience </h3>
      <hr />
      {state.experience.map((el) => (
        <h4> {el.role ? el.role : ""} </h4>
      ))}
    </div>
  );
}
