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
    <div className="group relative my-10 flex max-h-screen flex-col gap-4 overflow-hidden p-2 [--gap:1rem] sm:flex-row">
      {Array.from({ length: 2 }, (_, idx) => (
        <div
          className="animate-marquee flex shrink-0 flex-col [gap:var(--gap)] overflow-hidden sm:flex-row"
          key={idx}
        >
          {topMarquee.map(({ review, name, description }, idx) => {
            let rgxForSplit = /^(.+)\*(.*)\*(.*)$/gm;
            let allText = [...review.matchAll(rgxForSplit)];
            const textSplitted = allText[0];

            return (
              <div
                className="animate-marquee-y sm:animate-marquee-x border-border bg-background w-fit rounded-xl border p-4"
                key={idx}
              >
                <p className="text-foreground/90 max-w-96 pb-6 leading-relaxed font-normal select-none">
                  {textSplitted[1]}
                  <span className="text-accent-foreground font-medium">
                    {textSplitted[2]}
                  </span>
                  {textSplitted[3]}
                </p>

                <div className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400" />
                  <div className="">
                    <h3 className="text-foreground/90 font-medium"> {name} </h3>
                    <p className="text-foreground/50 text-xs font-normal">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}

      <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20% sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-r" />
      <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20% sm:inset-y-0 sm:right-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-l sm:left-auto" />
    </div>
  );
}
