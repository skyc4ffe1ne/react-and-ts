import { useNavigate } from "react-router";

const experienceDataForm = [
  {
    labelValue: "Role",
    labelFor: "role",
    inputType: "text",
    dispatchType: "setExperienceRole",
  },
  {
    labelValue: "Company",
    labelFor: "company",
    inputType: "text",
    dispatchType: "setExperienceCompany",
  },
  {
    labelValue: "Description",
    labelFor: "description",
    inputType: "text",
    dispatchType: "setExperienceDescription",
  },
  {
    labelValue: "Start Date",
    labelFor: "startDate",
    inputType: "date",
    dispatchType: "setExperienceDateStart",
  },
  {
    labelValue: "Finish Date",
    labelFor: "finishDate",
    inputType: "date",
    dispatchType: "setExperienceDateFinish",
  },
];

export default function StepExperience({ dispatch, experience }) {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/step-2");
  }
  return (
    <>
      <h3 className="text-2xl font-medium tracking-tight text-blue-800">
        Insert your data experience here
      </h3>

      {experience.map((el, index) => (
        <div key={index} className="mb-6">
          {experienceDataForm.map(
            ({ labelValue, labelFor, inputType, dispatchType }) => (
              <label
                htmlFor={`${labelFor}-${index}`}
                className="mt-4 flex flex-col gap-1 text-sm/6 font-medium tracking-tight text-black"
                key={`${labelFor}-${index}`}
              >
                {labelValue}
                <input
                  type={inputType}
                  id={`${labelFor}-${index}`}
                  className="h-10 rounded-lg bg-white px-3 text-sm/6 font-normal text-gray-950 outline -outline-offset-1 outline-gray-950/15 focus:outline-gray-950"
                  onChange={(e) =>
                    dispatch({
                      type: dispatchType,
                      payload: { value: e.target.value, id: el.id },
                    })
                  }
                />
              </label>
            ),
          )}
        </div>
      ))}

      <button className="" onClick={handleNext}>
        Next
      </button>
    </>
  );
}
