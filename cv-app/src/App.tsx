import { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import StepPersonal from "./ui/step/StepPersonal";
import StepGeneral from "./ui/step/StepGeneral";
import type { Action } from "./lib/types"
import type { State } from "./lib/types"
import type { AllStepType } from "./lib/types.ts"



const initialState: State = {
  experience: [
    {
      role: "",
      company: "",
      description: "",
      startDate: "",
      finishDate: "",
      id: Date.now(),
    },
  ],

  education: [
    {
      school: "",
      degree: "",
      description: "",
      startDate: "",
      finishDate: "",
      id: Date.now(),
    },
  ],

  project: [
    {
      nameProject: "",
      link: "",
      description: "",
      startDate: "",
      finishDate: "",
      id: Date.now(),
    },
  ],

  language: [
    {
      lang: "",
      grade: "",
      id: Date.now(),
    },
  ],

  skills: [
    {
      skill: "",
      id: Date.now(),
    },
  ],
  // Step Personal
  name: "",
  role: "",
  email: "",
  number: "",
  city: ""
};



function reducer(state: State, action: Action) {
  switch (action.type) {
    case "setStepPersonal": {
      const { value, key } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    }
    case "setStepBody": {
      const { value, id, key, keyArr } = action.payload;
      return {
        ...state,
        [keyArr]: state[keyArr].map((el) =>
          el.id === id ? { ...el, [key]: value } : el,
        ),
      };
    }
    case "setNewRole":
      return {
        ...state,
        experience: [
          ...state.experience,
          {
            role: "",
            company: "",
            description: "",
            startDate: "",
            finishDate: "",
            id: Date.now(),
          },
        ],
      };

    case "setNewEducation":
      return {
        ...state,
        education: [
          ...state.education,
          {
            school: "",
            degree: "",
            description: "",
            startDate: "",
            finishDate: "",
            id: Date.now(),
          },
        ],
      };

    case "setNewProject":
      return {
        ...state,
        project: [
          ...state.project,
          {
            nameProject: "",
            link: "",
            description: "",
            startDate: "",
            finishDate: "",
            id: Date.now(),
          },
        ],
      };

    case "setNewLanguage":
      return {
        ...state,
        language: [
          ...state.language,
          {
            lang: "",
            grade: "",
            id: Date.now(),
          },
        ],
      };

    case "setNewSkill":
      return {
        ...state,
        skills: [
          ...state.skills,
          {
            skill: "",
            id: Date.now(),
          },
        ],
      };


    default:
      throw new Error("Action unknow!");
  }
}

const experienceDataForm = [
  {
    labelValue: "Role",
    labelFor: "role",
    inputType: "text",
    dispatchKey: "role",
  },
  {
    labelValue: "Company",
    labelFor: "company",
    inputType: "text",
    dispatchKey: "company",
  },
  {
    labelValue: "Description",
    labelFor: "description",
    inputType: "textarea",
    dispatchKey: "description",
  },
  {
    labelValue: "Start Date",
    labelFor: "startDate",
    inputType: "date",
    dispatchKey: "startDate",
  },
  {
    labelValue: "Finish Date",
    labelFor: "finishDate",
    inputType: "date",
    dispatchKey: "finishDate",
  },
];

const educationDataForm = [
  {
    labelValue: "School",
    labelFor: "school",
    inputType: "text",
    dispatchKey: "school",
  },
  {
    labelValue: "Degree",
    labelFor: "degree",
    inputType: "text",
    dispatchKey: "degree",
  },
  {
    labelValue: "Description",
    labelFor: "description",
    inputType: "textarea",
    dispatchKey: "description",
  },
  {
    labelValue: "Start Date",
    labelFor: "startDate",
    inputType: "date",
    dispatchKey: "startDate",
  },
  {
    labelValue: "Finish Date",
    labelFor: "finishDate",
    inputType: "date",
    dispatchKey: "finishDate",
  },

];


const languageDataForm = [
  {
    labelValue: "Language",
    labelFor: "lang",
    inputType: "text",
    dispatchKey: "lang",
  },
  {
    labelValue: "Grade",
    labelFor: "grade",
    inputType: "text",
    dispatchKey: "grade",
  },
];

const projectDataForm = [
  {
    labelValue: "Name Project",
    labelFor: "project",
    inputType: "text",
    dispatchKey: "nameProject",
  },
  {
    labelValue: "Link",
    labelFor: "link",
    inputType: "text",
    dispatchKey: "link",
  },
  {
    labelValue: "Description",
    labelFor: "description",
    inputType: "textarea",
    dispatchKey: "description",
  },
  {
    labelValue: "Start Date",
    labelFor: "startDate",
    inputType: "date",
    dispatchKey: "startDate",
  },
  {
    labelValue: "Finish Date",
    labelFor: "finishDate",
    inputType: "date",
    dispatchKey: "finishDate",
  },

];

const skillDataForm = [
  {
    labelValue: "Skill",
    labelFor: "skill",
    inputType: "text",
    dispatchKey: "skill",
  }
];

const allStep: AllStepType[] = [
  { keyData: "experience", dataForm: experienceDataForm, newData: "setNewRole", title: "Insert your data experience here" },
  { keyData: "education", dataForm: educationDataForm, newData: "setNewEducation", title: "Education" },
  { keyData: "project", dataForm: projectDataForm, newData: "setNewProject", title: "Project" },
  { keyData: "language", dataForm: languageDataForm, newData: "setNewLanguage", title: "Language" },
  { keyData: "skills", dataForm: skillDataForm, newData: "setNewSkill", title: "Skills" },
]

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout state={state} />}>
          <Route index element={<StepPersonal dispatch={dispatch} />} />
          {allStep.map(({ keyData, dataForm, newData, title }, idx) => (
            <Route
              key={keyData}
              path={`/step-${idx + 1}`}
              element={
                <StepGeneral
                  dispatch={dispatch}
                  data={state[keyData]}
                  keyData={keyData}
                  dataForm={dataForm}
                  newData={newData}
                  title={title}
                  stepPagination={idx + 2 > allStep.length ? "finish" : (idx + 2).toString()}
                />
              }
            />
          ))}
          <Route
            path="/step-finish"
            element={
              <p> Finish </p>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
