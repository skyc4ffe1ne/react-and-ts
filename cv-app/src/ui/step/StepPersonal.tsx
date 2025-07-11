import { useNavigate } from "react-router";
import Button from "../Button";
import type { StepPersonalType } from "../../lib/types"
const personalDataForm = [
  {
    labelValue: "Name",
    labelFor: "name",
    inputType: "text",
    dispatchKey: "name",
  },
  {
    labelValue: "Role",
    labelFor: "role",
    inputType: "text",
    dispatchKey: "role",
  },
  {
    labelValue: "Email",
    labelFor: "email",
    inputType: "email",
    dispatchKey: "email",
  },
  {
    labelValue: "Number",
    labelFor: "number",
    inputType: "text",
    dispatchKey: "number",
  },
  {
    labelValue: "City",
    labelFor: "city",
    inputType: "text",
    dispatchKey: "city",
  },
];



export default function StepPersonal({ dispatch }: StepPersonalType) {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/step-1");
  }
  return (
    <>
      <h3 className="text-2xl font-medium tracking-tight text-blue-800">
        Insert your data contact here
      </h3>
      {personalDataForm.map(
        ({ labelValue, labelFor, inputType, dispatchKey }, idx) => (
          <label
            htmlFor={labelFor}
            className="mt-4 flex flex-col gap-1 text-sm/6 font-medium tracking-tight text-black"
            key={idx}
          >
            {labelValue}
            <input
              type={inputType}
              id={labelFor}
              className="h-10 rounded-lg bg-white px-3 text-sm/6 font-normal text-gray-950 outline -outline-offset-1 outline-gray-950/15 focus:outline-gray-950"
              onChange={(e) =>
                dispatch({
                  type: "setStepPersonal",
                  payload: { value: e.target.value, key: dispatchKey },
                })
              }
            />
          </label>
        ),
      )}

      <Button type="primary" onClick={handleNext}>
        Next
      </Button>
    </>
  );
}
