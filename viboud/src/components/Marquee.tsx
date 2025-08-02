const topMarquee = [
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Rem repellat quia ut recusandae voluptas quaerat minus* ex similique architecto? Iste? ",
    name: "Zinnias Clairo",
    description: "Name of a song by the artist Clairo",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Hello how are you?* ex similique architecto? Iste? ",
    name: "Juna Clairo",
    description: "Name of a song by the artist Clairo",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Hello how are you?* ex similique architecto? Iste? ",
    name: "Juna Clairo",
    description: "Name of a song by the artist Clairo",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Hello how are you?* ex similique architecto? Iste? ",
    name: "Juna Clairo",
    description: "Name of a song by the artist Clairo",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Hello how are you?* ex similique architecto? Iste? ",
    name: "Juna Clairo",
    description: "Name of a song by the artist Clairo",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. *Hello how are you?* ex similique architecto? Iste? ",
    name: "Juna Clairo",
    description: "Name of a song by the artist Clairo",
  },
];

export default function MarqueeCard() {
  return (
    <div className="group my-10 flex flex-row gap-4 overflow-hidden p-2 [--gap:1rem]">
      {Array.from({ length: topMarquee.length }, (_, idx) => (
        <div
          className="animate-marquee flex shrink-0 [gap:var(--gap)]"
          key={idx}
        >
          {topMarquee.map(({ review, name, description }, idx) => {
            let rgxForSplit = /^(.+)\*(.*)\*(.*)$/gm;
            let allText = [...review.matchAll(rgxForSplit)];
            const textSplitted = allText[0];

            return (
              <div
                className="animate-marquee border-border w-fit rounded-xl border bg-white p-4"
                key={idx}
              >
                <p className="max-w-96 pb-6 leading-relaxed font-normal text-black/90 select-none">
                  {textSplitted[1]}
                  <span className="font-medium text-blue-600">
                    {textSplitted[2]}
                  </span>
                  {textSplitted[3]}
                </p>

                <div className="h-container flex items-center gap-2 border border-red-400">
                  <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400" />
                  <div className="">
                    <h3 className="font-medium text-black/90"> {name} </h3>
                    <p className="text-xs font-normal text-black/50">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
