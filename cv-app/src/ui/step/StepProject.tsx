import { useNavigate } from "react-router";
import Button from "../Button";

const projectDataForm = [
  {
    labelValue: "Name Project",
    labelFor: "project",
    inputType: "text",
    dispatchKey: "project",
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

function ArrowRightIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#1f1f1f"
      {...props}
    >
      <path d="M683.15-460H200v-40h483.15L451.46-731.69 480-760l280 280-280 280-28.54-28.31L683.15-460Z" />
    </svg>
  );
}

export default function StepEducation({ dispatch, project }) {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/step-4");
  }
  return (
    <>
      <h3 className="text-2xl font-medium tracking-tight text-blue-800">
        Insert your data project here
      </h3>

      {project.map((el, index) => (
        <div key={index} className="mb-6">
          {projectDataForm.map(
            ({ labelValue, labelFor, inputType, dispatchKey }) => (
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
                      type: "setStepProject",
                      payload: {
                        value: e.target.value,
                        id: el.id,
                        key: dispatchKey,
                      },
                    })
                  }
                />
              </label>
            ),
          )}
        </div>
      ))}

      <Button
        type="secondary"
        onClick={() =>
          dispatch({
            type: "setNewProject",
            payload: {},
          })
        }
      >
        Add new role
      </Button>

      <Button type="primary" onClick={handleNext}>
        Next
        <ArrowRightIcon className="size-4 fill-white stroke-current" />
      </Button>
    </>
  );
}
