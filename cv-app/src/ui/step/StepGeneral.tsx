import { useNavigate } from "react-router";
import Button from "../Button";

const skillDataForm = [
  {
    labelValue: "Skill",
    labelFor: "skill",
    inputType: "text",
    dispatchKey: "skill",
  }
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

export default function StepSkill({ dispatch, skills }) {
  const navigate = useNavigate();
  function handleNext() {
    navigate("/step-4");
  }
  return (
    <>
      <h3 className="text-2xl font-medium tracking-tight text-blue-800">
        {title}
      </h3>

      {{ data }.map((el, index) => (
        <div key={index} className="mb-6">
          {{ dataForm }.map(
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
                      type: "setStepBody",
                      payload: {
                        value: e.target.value,
                        id: el.id,
                        key: dispatchKey,
                        keyArr: { keyData }
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
            type: "{setNewData}",
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

