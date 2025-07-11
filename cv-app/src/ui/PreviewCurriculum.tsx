import PreviewCurriculumPersonal from "./preview/PreviewCurriculumPersonal";
import PreviewCurriculumExperience from "./preview/PreviewCurriculumExperience";
import PreviewCurriculumEducation from "./preview/PreviewCurriculumEducation";
import PreviewCurriculumProject from "./preview/PreviewCurriculumProject";
import PreviewCurriculumLanguage from "./preview/PreviewCurriculumLanguage";
import PreviewCurriculumSkill from "./preview/PreviewCurriculumSkill";
import type { State } from "../lib/types"


export default function PreviewCurriculum({ state }: { state: State }) {
  return (
    <div className="h-auto w-96 min-w-2xl shadow-xl pb-20">
      <PreviewCurriculumPersonal state={state} />
      <PreviewCurriculumExperience state={state} />
      <PreviewCurriculumEducation state={state} />
      <PreviewCurriculumProject state={state} />
      <PreviewCurriculumLanguage state={state} />
      <PreviewCurriculumSkill state={state} />
    </div>
  );
}
