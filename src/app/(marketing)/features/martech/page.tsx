"use client";

import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Cover } from "@/components/ui/cover";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { AnimatedBeamDemo } from "@/components/magicui/animated-beam";
import MagicCard from "@/components/ui/magic-card";
import { MarTechProcess } from "@/utils/constants/misc";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerTrigger, DrawerClose, DrawerFooter } from "@/components/ui/drawer";

const MarTeachPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const fromRef = useRef<HTMLDivElement>(null);
    const toRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-lg mx-auto">
                        <MagicBadge title="Marketing. Engineered." />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            We Engineer Growth Using A.I.{" "}
                            <AuroraText speed={1.5}>Data</AuroraText>, & Human Behavior.
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Martech isn&apos;t about using more tools. It&apos;s about using
                            the right ones in the proper sequence to create something
                            powerful — an engine that converts while you sleep.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button asChild>
                                <Link href="/resources/help">🔧 Build My Engine</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/resources/help">Get Martech Strategy Call</Link>
                            </Button>
                        </div>
                    </div>
                </AnimationContainer>

                <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-20">
                    <AnimationContainer delay={0.3} className="w-full">
                        <div className="w-full flex max-w-4xl py-10 mx-auto">
                            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                                <BorderBeam size={250} duration={12} delay={9} />
                                <Image
                                    src="/assets/dashboard-sm.svg"
                                    alt="Advanced analytics for your business"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </AnimationContainer>
                </MaxWidthWrapper>

                <AnimationContainer delay={0.1}>
                    <div className="flex flex-col py-24 items-center justify-center w-full max-w-xl mx-auto">
                        <MagicBadge title=" ⚛︎ The SM's Lab" />
                        <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                            Your Marketing Stack is Not Broken. It’s Just <br />
                            <Cover>Misaligned.</Cover>
                        </h2>
                        <p className="mt-4 text-center text-lg text-muted-foreground max-w-lg">
                            You’ve tried Mailchimp. CRM. GA4. Facebook Ads. All the tools in the
                            world. But they don’t work together. They’re not orchestrated.
                            That’s where we come in.
                        </p>
                    </div>
                </AnimationContainer>

                <MaxWidthWrapper>
                    <AnimationContainer delay={0.3} className="w-full">
                        <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                            Our <AuroraText>MarTech</AuroraText> Stack
                        </h2>
                        <AnimatedBeamDemo />
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground py-4">
                            This visual represents an intelligent marketing system. We use a
                            central AI as the "brain" to connect and orchestrate all your key
                            platforms transforming siloed tools for analytics, communication,
                            and automation into one cohesive and responsive network.
                        </p>
                    </AnimationContainer>
                </MaxWidthWrapper>

                <AnimationContainer delay={0.4} className="w-full">
                    <div className="mt-24 mb-24">
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
            </MaxWidthWrapper>



            <MaxWidthWrapper className="py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                        How We Build <AuroraText>MarTech</AuroraText> Ecosystems That Sell for You
                    </h2>
                    <p className="mt-4 mx-auto text-center text-lg text-muted-foreground max-w-lg">
                        Orchestrated in precisely engineered stages:
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full py-8 gap-4 md:gap-8">
                    {MarTechProcess.map((process, id) => (
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
            </MaxWidthWrapper>

            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Martech Without the Mayhem
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                We’re not tool resellers. We’re growth engineers.
                                Whether you sell SaaS, services, or sandals - we align your message, your audience, and your data to make marketing effortless and scalable.
                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/resources/help" className="btn">Get Started</Link>
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </>
    );
};

export default MarTeachPage;
