import { Button } from "@/components/ui/button";
import BlurFade from "@/components/ui/blur-fade";
const BLUR_FADE_DELAY = 0.04;

export default function Hero() {
  return (
    <section id="hero" className="pt-40 pb-24 sm:pb-40 text-center">

			<BlurFade delay={BLUR_FADE_DELAY}>
				<h1 className="bg-gradient-to-br from-foreground from-30%  to-foreground/40 bg-clip-text text-5xl font-medium leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl py-6">
					Track every application, without any doubt with jobtracker.	
				</h1>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<p className="mx-auto max-w-(--breakpoint-md) px-2 text-lg/7 font-medium text-muted-foreground mb-12">
					Track your interview funnel, manage resumes, and get real-time insights into your job search.
				</p>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 3}>
				<div className="flex gap-4 justify-center items-center mb-10">
					<Button size="lg">
						Get started
					</Button>

					<Button variant="outline" size="lg">
						Sign up
					</Button>
				</div>
			</BlurFade>

			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<div className="rounded-2xl w-full aspect-video bg-background shadow-xl px-6 border"></div>
			</BlurFade>

    </section>
  );
}
