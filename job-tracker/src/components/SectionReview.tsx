import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SectionHeader from "@/components/ui/section-header";
import {Star} from "lucide-react";
const topMarquee = [
  {
    review:
      "I didn’t expect an app to actually make job hunting easier, but this one does. *Now everything is organized and I feel much more at ease.*",
    name: "Olivia Turner",
    description: "Recent graduate",
    stars: 5,
  },
  {
    review:
      "Keeping track of applications across different platforms used to be a nightmare. *With this app, everything is streamlined and even enjoyable to manage.*",
    name: "Ethan Walker",
    description: "Career changer",
    stars: 4,
  },
  {
    review:
      "The interface is clean and super intuitive. *I can check applications, interviews, and notes in seconds.*",
    name: "Mia Collins",
    description: "Marketing assistant",
    stars: 5,
  },
  {
    review:
      "I used to forget where I applied all the time. *Now I go into interviews feeling prepared and confident.*",
    name: "Noah Parker",
    description: "Job seeker",
    stars: 4,
  },
  {
    review:
      "What stands out most is how motivating it is. *Seeing my progress visually keeps me going, even on tough days.*",
    name: "Ava Mitchell",
    description: "University student",
    stars: 5,
  },
  {
    review:
      "Simple, minimal, and very effective. *No distractions—just a clear way to manage my job search.*",
    name: "Liam Scott",
    description: "Freelancer",
    stars: 4,
  },
];

export default function SectionReview() {
  return (
    <section id="review" className="pb-24 sm:pb-40">
      <SectionHeader
        title="Hear from our beautiful users"
        description="Thousands of user trust jobtracker daily. See how it change your job search"
      />

      <div className="group relative flex max-h-screen flex-col gap-4 overflow-hidden p-2 sm:flex-row">
        {Array.from({ length: 2 }, (_, ix) => (
          <ul
            className="group-hover:[animation-play-state:paused] animate-marquee flex shrink-0 min-w-full flex-col gap-[var(--gap-marquee)] overflow-hidden sm:flex-row animate-marquee-y sm:animate-marquee-x"
            key={ix}
          >
            {topMarquee.map(({ review, name, description,stars }, idx) => {
              let rgxForSplit = /^(.+)\*(.*)\*(.*)$/gm;
              let allText = [...review.matchAll(rgxForSplit)];
              const textSplitted = allText[0];

              return (
                <li
                  className="bg-background w-fit rounded-xl p-4 flex flex-col justify-between"
                  key={idx}
                >
                  <Card className="shadow-xl ring">
                    <CardContent>
                      <p className="text-muted-foreground max-w-96 pb-6 leading-relaxed font-normal select-none">
                        {textSplitted[1]}
                        <span className="text-accent-foreground blue:text-secondary-foreground font-medium">
                          {textSplitted[2]}
                        </span>
                        {textSplitted[3]}
                      </p>
											<div class="flex">
											{Array.from({ length: Math.floor(stars) }, (_) => (
												<Star class="stroke-background fill-yellow-400 size-4 -ml-1" />
											))}
										</div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400 shadow-sm outline outline-offset-3 " />
                        <div className="flex flex-col">
                          <h3 className="text-foreground/90 font-medium">
                            {name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {description}
                          </p>
													</div>
                      </div>
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
          </ul>
        ))}

        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20% sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20% sm:inset-y-0 sm:right-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-l sm:left-auto" />
      </div>


      <div className="group relative flex max-h-screen flex-col gap-4 overflow-hidden p-2 sm:flex-row">
        {Array.from({ length: 2 }, (_, ix) => (
          <ul
            className="group-hover:[animation-play-state:paused] animate-marquee flex shrink-0 min-w-full flex-col gap-[var(--gap-marquee)] overflow-hidden sm:flex-row animate-marquee-y-rev sm:animate-marquee-x-rev"
            key={ix}
          >
            {topMarquee.map(({ review, name, description,stars }, idx) => {
              let rgxForSplit = /^(.+)\*(.*)\*(.*)$/gm;
              let allText = [...review.matchAll(rgxForSplit)];
              const textSplitted = allText[0];

              return (
                <li
                  className="bg-background w-fit rounded-xl p-4 flex flex-col justify-between"
                  key={idx}
                >
                  <Card className="shadow-xl ring">
                    <CardContent>
                      <p className="text-muted-foreground max-w-96 pb-6 leading-relaxed font-normal select-none">
                        {textSplitted[1]}
                        <span className="text-accent-foreground blue:text-secondary-foreground font-medium">
                          {textSplitted[2]}
                        </span>
                        {textSplitted[3]}
                      </p>
											<div class="flex">
											{Array.from({ length: Math.floor(stars) }, (_) => (
												<Star class="stroke-background fill-yellow-400 size-4 -ml-1" />
											))}
										</div>
                    </CardContent>
                    <CardFooter>
                      <div className="flex items-center gap-2">
                        <div className="size-8 rounded-full bg-linear-30 from-sky-300 to-orange-400 shadow-sm outline outline-offset-3 " />
                        <div className="flex flex-col">
                          <h3 className="text-foreground/90 font-medium">
                            {name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {description}
                          </p>
													</div>
                      </div>
                    </CardFooter>
                  </Card>
                </li>
              );
            })}
          </ul>
        ))}

        <div className="from-background pointer-events-none absolute inset-x-0 top-0 h-1/4 w-full bg-gradient-to-b from-20% sm:inset-y-0 sm:left-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 w-full bg-gradient-to-t from-20% sm:inset-y-0 sm:right-0 sm:h-full sm:w-1/4 sm:bg-gradient-to-l sm:left-auto" />
      </div>

    </section>
  );
}
