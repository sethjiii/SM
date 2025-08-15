import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES, DevelopmentPhilosophy, developmentSteps, DEVSERVICES } from "@/utils/constants/misc";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import MagicCard from "@/components/ui/magic-card";
import { DevelopmentTimeline } from "@/components/ui/developmentSteps";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";


const DevelopmentPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                        <MagicBadge title="💻 We Build What Others Only Pitch" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            End-to-end expertise that turns ideas into impactful products and platforms
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            From complex web platforms to lightweight MVPs, we don’t just write code — we craft solutions that scale, perform, and make your business unstoppable.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button size="sm" asChild>
                                <Link href="/resources/help">
                                    Start Your Project →
                                </Link>
                            </Button>
                            {/* <Button size="sm" variant="outline" asChild>
                                <Link href="/blog">
                                    See Our Work →
                                </Link>
                            </Button> */}
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    <div className="w-full justify-center flex max-w-4xl py-10 mx-auto">
                        <TextReveal>No endless meetings. No inflated promises. Just intelligent, battle-tested code — built to deploy, built to scale, built for you.</TextReveal>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>
            <AnimationContainer delay={0.3} className="w-full">
                <div className="py-14">
                    <div className="mx-auto px-4 md:px-8">
                        <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                            Trusted by the best in the industry
                        </h2>
                        <div className="mt-8">
                            <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center py-8">
                                {COMPANIES.map((company) => (
                                    <li key={company.name}>
                                        <Image
                                            src={company.logo}
                                            alt={company.name}
                                            width={80}
                                            height={80}
                                            quality={100}
                                            className="w-28 h-auto"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AnimationContainer>
            <AnimationContainer delay={0.1} className="w-full mt-12">
                <div className="flex flex-col items-center lg:items-center justify-center w-full max-w-xl mx-auto">
                    <MagicBadge title=" ⚛︎ The SM's Development Lab" />
                    <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                        Why Our Builds Don’t <Cover>Break</Cover>
                    </h2>
                    <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        At Schmooze Media, development isn’t about “just getting it to work.” It’s about building robust systems that stand the test of time, handle scale, and adapt to your future needs — without you having to start over in 12 months.
                    </p>
                </div>
            </AnimationContainer>

            <MaxWidthWrapper className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {DevelopmentPhilosophy.map((process, id) => (
                        <AnimationContainer delay={0.2 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>

            </MaxWidthWrapper>

            <MaxWidthWrapper className="pt-20">
                <div className="flex flex-col items-center justify-center w-full">
                    <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                        How we can help your business
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground text-center">
                        We handle the full lifecycle — from idea to deployment to ongoing iteration. Whether you need a high-traffic platform or a pixel-perfect frontend, we have the expertise.
                    </p>
                </div>
            </MaxWidthWrapper>
            <MaxWidthWrapper className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {DEVSERVICES.map((process, id) => (
                        <AnimationContainer delay={0.1 * id} key={id}>
                            <MagicCard className="group md:py-8">
                                <div className="flex flex-col items-start justify-center w-full">
                                    <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                                    <div className="flex flex-col relative items-start">
                                        <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                            {id + 1}
                                        </span>
                                        <h3 className="text-base mt-6 font-medium text-foreground">
                                            {process.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-muted-foreground">
                                            {process.description}
                                        </p>
                                    </div>
                                </div>
                            </MagicCard>
                        </AnimationContainer>
                    ))}
                </div>
            </MaxWidthWrapper>
            <VelocityScroll defaultVelocity={0.5} className="inset-0 mt-16">
                           From Scribble to Ship
                        </VelocityScroll>
                       
            <MaxWidthWrapper className="mt-10">
                <AnimationContainer delay={0.7}>
                    <div>
                        <DevelopmentTimeline developmentSteps={developmentSteps.slice()} />
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Let’s Build Yours
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                Your product won’t build itself. But we can build it faster, smarter, and stronger than anyone else.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/resources/help" className="flex items-center">
                                        Let's Start Building
                                        <ArrowRightIcon className="w-4 h-4 ml-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </>
    )
};

export default DevelopmentPage;
