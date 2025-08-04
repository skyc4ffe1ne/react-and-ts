import { Note, AddFriend, Vibes } from "./ui/icons";
import HeaderSection from "./HeaderSection";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "1. Create a room",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Magnam vitae saepe doloribus error, eaque numquam laboriosam ipsam maiores qui pariatur!",
    icon: <Note className="size-6 stroke-blue-400" />,
  },

  {
    title: "2. Invite your friends",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Magnam vitae saepe doloribus error, eaque numquam laboriosam ipsam maiores qui pariatur!",
    icon: <AddFriend className="size-6 stroke-blue-400" />,
  },
  {
    title: "3. Start vibing",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Magnam vitae saepe doloribus error, eaque numquam laboriosam ipsam maiores qui pariatur!",
    icon: <Vibes className="size-6 stroke-blue-400" />,
  },
];

export default function HowItWorks() {
  return (
    <div className="mt-24 w-full">
      <HeaderSection intro="how it works" title="Only 3 step to get started" />
      <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
        <div className="order-2 flex flex-col sm:order-1">
          {steps.map(({ title, description, icon }, idx) => (
            <div
              className="flex flex-col items-center justify-center gap-4 not-first:mt-8 sm:flex-row"
              key={idx}
            >
              <div className="bg-secondary relative h-1 w-full rounded-full sm:h-24 sm:w-2" />
              <div className="hidden rounded-full bg-blue-200 p-3 sm:block">
                {icon}
              </div>
              <div className="">
                <h3 className="text-3xl font-medium tracking-tight">{title}</h3>
                <p className="text-secondary-foreground text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="order-1 h-[40vh] w-full">
          <div className="border-border h-full w-full rounded-md border shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}
