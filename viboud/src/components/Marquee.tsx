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
    <div className="group relative my-10 flex flex-row gap-4 overflow-hidden p-2 [--gap:1rem]">
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
                className="animate-marquee border-border bg-background w-fit rounded-xl border p-4"
                key={idx}
              >
                <p className="text-foreground/90 max-w-96 pb-6 leading-relaxed font-normal select-none">
                  {textSplitted[1]}
                  <span className="text-accent font-medium">
                    {textSplitted[2]}
                  </span>
                  {textSplitted[3]}
                </p>

                <div className="h-container flex items-center gap-2">
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

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 h-full w-1/4 bg-gradient-to-r from-20%" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 h-full w-1/4 bg-gradient-to-l from-20%" />
    </div>
  );
}
