import { useState } from "react";
import HeaderSection from "./HeaderSection";
import { ArrowDown } from "./ui/icons";

const faq = [
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque laborum minus doloribus repellendus itaque? Aspernatur libero fugit a vitae!",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque laborum minus doloribus repellendus itaque? Aspernatur libero fugit a vitae!",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque laborum minus doloribus repellendus itaque? Aspernatur libero fugit a vitae!",
  },
  {
    question:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, pariatur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque laborum minus doloribus repellendus itaque? Aspernatur libero fugit a vitae!",
  },
];
export default function Faq() {
  const [openFaq, setOpenFaq] = useState<number>(-1);
  return (
    <section className="mt-24">
      <HeaderSection intro="faq" title="Frequently asked question" />

      <div className="flex w-full flex-col items-center justify-center gap-4">
        {faq.map(({ question, answer }, idx) => (
          <div
            className="border-border group cursor-pointer rounded-xl border p-4"
            key={idx}
            onClick={() => setOpenFaq(idx)}
          >
            <div className="flex justify-between">
              <h4 className="text-lg/6 font-semibold group-hover:underline">
                {question}
              </h4>
              <ArrowDown
                className={`size-6 transition-transform duration-150 ease-in ${openFaq === idx ? "rotate-180" : ""}`}
              />
            </div>
            <p
              className={`font-base text-foreground starting: h-0 max-w-3xl text-sm/5 opacity-0 transition-all duration-150 ease-in ${openFaq === idx ? "h-auto pt-4 opacity-100" : ""}`}
            >
              {answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
