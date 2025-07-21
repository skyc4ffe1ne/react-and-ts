import React from "react";
import Button from "./ui/Button";
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
  IconHamburger,
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
      <div className="">
        <Button variant="icon_secondary">
          <IconHamburger className="size-4" />
        </Button>
      </div>

      <div className="bg-background rounded-xl p-1 flex justify-center items-center gap-1">
        {allIcons.map(({ icon }, idx) => {
          if (idx === 0) {
            return (
              <React.Fragment key={idx}>
                <Button variant="icon">{icon}</Button>
                <div className="mr-1 ml-1 h-6 w-0.5 bg-background-divider" />
              </React.Fragment>
            );
          } else if (idx === allIcons.length - 1) {
            return (
              <React.Fragment key={idx}>
                <div className="mr-1 ml-1 h-6 w-0.5 bg-background-divider" />
                <Button variant="icon">{icon}</Button>
              </React.Fragment>
            );
          } else {
            return (
              <Button variant="icon" key={idx}>
                {icon}
              </Button>
            );
          }
        })}
      </div>

      <div className="">
        <Button variant="accent"> Share </Button>
      </div>
    </header>
  );
}
