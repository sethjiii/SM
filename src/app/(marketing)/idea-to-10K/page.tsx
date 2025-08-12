import React from 'react'
import AnimationContainer from "@/components/global/animation-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRightIcon, Lamp, PhoneCallIcon } from "lucide-react";
import MagicCard from "@/components/ui/magic-card";
import { Ideato10KPillar } from '@/utils/constants/misc';
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-2";
import MaxWidthWrapper from "@/components/global/max-width-wrapper";
import { AuroraText } from '@/components/magicui/aurora-text';
import Marquee from '@/components/ui/marquee';
import { TextReveal } from '@/components/magicui/text-reveal';
import { Slider } from '@/components/ui/slider';
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { Timeline } from "@/components/ui/timeline";
import { data } from '@/utils/constants/misc';
import { LampContainer } from "@/components/ui/lamp";

const Ideato10KPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                        <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                            <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                                <span>
                                    <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                                </span>
                                <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                                <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                                <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                    Idea to Spark ✨

                                </span>
                            </button>
                            <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-4xl md:text-5xl lg:text-6xl !leading-[1.15] w-full font-heading">
                                The startup world doesn’t need another MVP.
                                <br />It needs more <AuroraText speed={0.5}>Traction</AuroraText>.
                            </h1>
                            <p className="mb-5 text-lg tracking-tight text-foreground md:text-xl text-balance">
                                We don’t hand you code and wish you luck.
                                We hand you users. Early fans. Real growth. Real data.
                                That’s the <AuroraText speed={0.2}>Schmooze</AuroraText> effect.
                                <br className="hidden md:block" />
                                <br />
                            </p>
                            <div className="flex items-center justify-center gap-x-4 mt-8">
                                <Button asChild>
                                    <Link href="/"> What’s your idea?</Link>
                                </Button>
                                <Button asChild>
                                    <Link href="/">When do you want your first 1K users?</Link>
                                </Button>
                            </div>
                        </AnimationContainer>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-16">
                <AnimationContainer delay={0.2}>
                    <div className="flex flex-col items-center justify-center w-full text-center">
                        <TextReveal className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            We Build. We Launch. We Listen.
                        </TextReveal>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Our team is dedicated to turning your vision into reality.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                            {Ideato10KPillar.map((process, id) => (
                                <AnimationContainer delay={0.2 * id} key={id}>

                                    <MagicCard className="flex flex-row items-center justify-center md:py-8">
                                        <div className="items-start justify-center w-full gap-4">
                                            <process.icon
                                                strokeWidth={1.5}
                                                className="w-10 h-10 text-foreground"
                                            />
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
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-16 mb-20">
                <AnimationContainer delay={0.3}>
                    <div className="flex flex-col items-center justify-center w-full text-center">
                        <AnimatedBeamMultipleOutputDemo />
                        <h5 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Everything’s connected. Everything’s intentional. Everything’s built for traction.
                        </h5>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <VelocityScroll defaultVelocity={0.5} className="inset-0 mt-16">
                We move like a startup. Think like a VC. Build like a hacker.
            </VelocityScroll>
            <MaxWidthWrapper className="mt-10">
                <AnimationContainer delay={0.7}>
                    <div>
                        <Timeline data={data.slice()} />
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <MaxWidthWrapper className="mt-16">
                <AnimationContainer delay={0.8}>
                    <div className="flex flex-col items-center justify-center w-full text-center">
                        <LampContainer className="max-w-2xl mx-auto">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 pt-5 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Build something worth talking about. Or don’t.
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                You’ve already spent enough time thinking.
                                Now build the damn thing — and get it in front of users who care.
                            </p>
                            <Button asChild className="mt-6">
                                <Link href="/">15-Min Explosive Idea Call</Link>
                            </Button>

                        </LampContainer>

                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

        </div>
    )
};

export default Ideato10KPage;
