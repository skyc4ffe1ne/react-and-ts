import PreviewCurriculumPersonal from "./PreviewCurriculumPersonal";
import PreviewCurriculumExperience from "./PreviewCurriculumExperience";

export default function PreviewCurriculum({ state }) {
  return (
    <div className="h-96 w-96 min-w-2xl shadow-xl">
      <PreviewCurriculumPersonal state={state} />
      <PreviewCurriculumExperience state={state} />
    </div>
  );
}
