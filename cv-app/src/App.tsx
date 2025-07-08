import { useReducer } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import StepPersonal from "./ui/StepPersonal";
import StepExperience from "./ui/StepExperience";

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
};

function reducer(state, action) {
  const { value, ...other } = action.payload;
  switch (action.type) {
    case "setName":
      return {
        ...state,
        name: value,
      };

    case "setRole":
      return {
        ...state,
        role: value,
      };

    case "setEmail":
      return {
        ...state,
        email: value,
      };
    case "setNumber":
      return {
        ...state,
        number: value,
      };
    case "setCity":
      return {
        ...state,
        city: value,
      };

    case "setExperienceRole":
      return {
        ...state,
        experience: state.experience.map((el, idx) =>
          el.id === other.id ? { ...el, role: value } : el,
        ),
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
