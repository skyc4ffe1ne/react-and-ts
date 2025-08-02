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
  return (
    <section className="mt-24">
      <HeaderSection intro="faq" title="Frequently asked question" />

      <div className="flex w-full flex-col items-center justify-center gap-4">
        {faq.map(({ question, answer }, idx) => (
          <div className="border-border rounded-xl border p-4 group cursor-pointer" key={idx}>
            <div className="flex justify-between ">
              <h4 className="text-lg/6 font-semibold group-hover:underline">{question} </h4>
              <ArrowDown size="size-6" />
            </div>
            <p className="font-base text-foreground max-w-3xl pt-4 text-sm/5">
              {answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
