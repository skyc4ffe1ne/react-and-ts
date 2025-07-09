import { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import StepPersonal from "./ui/step/StepPersonal";
import StepExperience from "./ui/step/StepExperience";
import StepEducation from "./ui/step/StepEducation";

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
      location: "",
      id: Date.now(),
    },
  ],
};

function reducer(state, action) {
  const { value, id, key } = action.payload;
  switch (action.type) {
    case "setStepPersonal":
      return {
        ...state,
        [key]: value,
      };
    case "setStepExperience":
      return {
        ...state,
        experience: state.experience.map((el) =>
          el.id === id ? { ...el, [key]: value } : el,
        ),
      };

    case "setStepEducation":
      return {
        ...state,
        experience: state.education.map((el) =>
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
