type KeyArrType = "experience" | "education" | "project" | "language" | "skills"
type NewDataType = "setNewRole" | "setNewEducation" | "setNewProject" | "setNewLanguage" | "setNewSkill"

export interface StepPersonalProps {
  dispatch: React.Dispatch<Action>
}

export interface StepGeneralProps {
  dispatch: React.Dispatch<Action>
  data: GeneralData[];
  keyData: KeyArrType;
  dataForm: GeneralDataForm[];
  newData: NewDataType;
  title: string;
  stepPagination: string;
}


export type Action =
  {
    type: "setStepBody",
    payload: { value: string, id: number, key: string, keyArr: KeyArrType }
  }
  |
  {
    type: "setStepPersonal",
    payload: { value: string, key: string }
  }
  |
  {
    type: "setNewRole",
    payload: {}
  }
  |
  {
    type: "setNewEducation",
    payload: {}
  } |
  {
    type: "setNewProject",
    payload: {}
  } |
  {
    type: "setNewLanguage",
    payload: {}
  } |
  {
    type: "setNewSkill",
    payload: {}
  }



type GeneralDataForm = { labelValue: string, labelFor: string, inputType: string, dispatchKey: string, }

type GeneralData =
  | {
    role: string,
    company: string,
    description: string,
    startDate: string,
    finishDate: string,
    id: number,
  }
  |
  {
    school: string,
    degree: string,
    description: string,
    startDate: string,
    finishDate: string,
    id: number,
  }
  |
  {
    nameProject: string,
    link: string,
    description: string,
    startDate: string,
    finishDate: string,
    id: number,
  } |

  {
    lang: string,
    grade: string,
    id: number,
  } |
  {
    skill: string,
    id: number,
  }



export interface State {
  experience: ExperienceItem[],
  education: EducationItem[],
  project: ProjectItem[],
  language: LanguageItem[],
  skills: SkillItem[],
  name: string,
  role: string,
  email: string,
  number: string,
  city: string
}


interface ExperienceItem {
  role: string;
  company: string;
  description: string;
  startDate: string;
  finishDate: string;
  id: number;
}

interface EducationItem {
  school: string;
  degree: string;
  description: string;
  startDate: string;
  finishDate: string;
  id: number;
}

interface ProjectItem {
  nameProject: string;
  link: string;
  description: string;
  startDate: string;
  finishDate: string;
  id: number;
}

interface LanguageItem {
  lang: string;
  grade: string;
  id: number;
}

export interface SkillItem {
  skill: string;
  id: number;
}

export type AllStepType = {
  keyData: KeyArrType,
  dataForm: DataFormType[]
  newData: NewDataType,
  title: string
}

interface DataFormType {
  labelValue: string,
  labelFor: string,
  inputType: string,
  dispatchKey: string,
}
