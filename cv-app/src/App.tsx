import { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import StepPersonal from "./ui/step/StepPersonal";
import StepExperience from "./ui/step/StepExperience";
import StepEducation from "./ui/step/StepEducation";
import StepProject from "./ui/step/StepProject";
import StepLanguage from "./ui/step/StepLanguage";
import StepSkill from "./ui/step/StepSkill";


const initialState = {
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

};

function reducer(state, action) {
  const { value, id, key, keyArr } = action.payload;
  switch (action.type) {
    case "setStepPersonal":
      return {
        ...state,
        [key]: value,
      };
    case "setStepBody":
      return {
        ...state,
        [keyArr]: state[keyArr].map((el) =>
          el.id === id ? { ...el, [key]: value } : el,
        ),
      };
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
            role: "",
            company: "",
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

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout state={state} />}>
          <Route index element={<StepPersonal dispatch={dispatch} />} />
          <Route
            path="/step-1"
            element={
              <StepExperience
                dispatch={dispatch}
                experience={state.experience}
              />
            }
          />

          <Route
            path="/step-2"
            element={
              <StepEducation dispatch={dispatch} education={state.education} />
            }
          />

          <Route
            path="/step-3"
            element={
              <StepProject dispatch={dispatch} project={state.project} />
            }
          />

          <Route
            path="/step-4"
            element={
              <StepLanguage dispatch={dispatch} language={state.language} />
            }
          />

          <Route
            path="/step-5"
            element={
              <StepSkill dispatch={dispatch} skills={state.skills} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
