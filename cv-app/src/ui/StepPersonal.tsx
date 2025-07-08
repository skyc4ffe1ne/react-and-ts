import { useNavigate } from "react-router";

const personalDataForm = [
  {
    labelValue: "Name",
    labelFor: "name",
    inputType: "text",
    dispatchType: "setName",
  },
  {
    labelValue: "Role",
    labelFor: "role",
    inputType: "text",
    dispatchType: "setRole",
  },
  {
    labelValue: "Email",
    labelFor: "email",
    inputType: "email",
    dispatchType: "setEmail",
  },
  {
    labelValue: "Number",
    labelFor: "number",
    inputType: "text",
    dispatchType: "setNumber",
  },
  {
    labelValue: "City",
    labelFor: "city",
    inputType: "text",
    dispatchType: "setCity",
  },
];

export default function StepPersonal({ dispatch }) {
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
        ({ labelValue, labelFor, inputType, dispatchType }, idx) => (
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
                dispatch({ type: dispatchType, payload: e.target.value })
              }
            />
          </label>
        ),
      )}

      <button className="" onClick={handleNext}>
        Next
      </button>
    </>
  );
}
