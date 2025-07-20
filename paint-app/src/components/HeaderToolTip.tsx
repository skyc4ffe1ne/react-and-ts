import ButtonIcon from "./ui/ButtonIcon";
import {
  IconErase,
  IconPen,
  IconHand,
  IconPointer,
  IconRect,
  IconCircle,
  IconRhombus,
  IconArrow,
  IconLine,
  IconText,
  IconImage,
  IconShapes,
  IconLockOpen,
} from "./ui/Icons";

const allIcons = [
  {
    icon: <IconLockOpen className="size-4" />,
  },
  {
    icon: <IconHand className="size-4" />,
  },
  {
    icon: <IconPointer className="size-4" />,
  },
  {
    icon: <IconRect className="size-4" />,
  },
  {
    icon: <IconRhombus className="size-4" />,
  },
  {
    icon: <IconCircle className="size-4" />,
  },
  {
    icon: <IconArrow className="size-4" />,
  },
  {
    icon: <IconLine className="size-4" />,
  },
  {
    icon: <IconPen className="size-4" />,
  },
  {
    icon: <IconText className="size-4" />,
  },
  {
    icon: <IconImage className="size-4" />,
  },
  {
    icon: <IconErase className="size-4" />,
  },
  {
    icon: <IconShapes className="size-4" />,
  },
];

export default function HeaderToolTip() {
  return (
    <header className="top-0 left-0 absolute bg-transparent flex justify-between items-center w-full p-4">
      <div className="">LOGO</div>

      <div className="bg-background rounded-xl p-1 flex justify-center items-center gap-1">
        {allIcons.map(({ icon }, idx) => (
          <ButtonIcon
            key={idx}
            variant="primary"
            other="first:border first:border-red-400 first:mr-2"
          >
            {icon}
          </ButtonIcon>
        ))}
      </div>

      <div className="">
        <button> SHARE </button>
      </div>
    </header>
  );
}
