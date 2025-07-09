import PreviewCurriculumPersonal from "./preview/PreviewCurriculumPersonal";
import PreviewCurriculumExperience from "./preview/PreviewCurriculumExperience";
import PreviewCurriculumEducation from "./preview/PreviewCurriculumEducation";

export default function PreviewCurriculum({ state }) {
  return (
    <div className="h-96 w-96 min-w-2xl shadow-xl">
      <PreviewCurriculumPersonal state={state} />
      <PreviewCurriculumExperience state={state} />
      <PreviewCurriculumEducation state={state} />
    </div>
  );
}
