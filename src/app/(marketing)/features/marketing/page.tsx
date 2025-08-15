import { AnimationContainer, MaxWidthWrapper } from "@/components";
import { AuroraText } from "@/components/magicui/aurora-text";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Button } from "@/components/ui/button";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import { COMPANIES } from "@/utils";
import { ArrowRightIcon, Sparkle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedServices } from "@/components/ui/AnimatedServices";
import { services } from "@/utils/constants/services";

const MarketingPage = () => {
    return (
        <>
            <MaxWidthWrapper>
                <AnimationContainer delay={0.1} className="w-full">
                    <div className="flex flex-col items-center justify-center py-10 max-w-xl mx-auto">
                        <MagicBadge title="Marketing" />
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            Make <AuroraText speed={1.5}>Waves</AuroraText>, Not Just Ads: Transformative Marketing That Moves
                        </h1>
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            Comprehensive Marketing Solutions: Product Placements, Branded Content, PR, Reputation Management & Paid Media.
                        </p>
                        <div className="flex items-center justify-center gap-x-4 mt-8">
                            <Button asChild>
                                <Link href="/resources/help">
                                    Get started
                                </Link>
                            </Button>
                            {/* <Button variant="outline" asChild>
                                <Link href="/blog">
                                    Learn more
                                </Link>
                            </Button> */}
                        </div>
                    </div>
                </AnimationContainer>
                <AnimationContainer delay={0.2} className="w-full">
                    <div className="w-full flex max-w-4xl py-10 mx-auto">
                        <TextReveal className="text-foreground text-center text-5xl md:text-xl lg:text-2xl font-medium font-heading z-10 leading-loose">
                            Harness your brand&apos;s immense potential with groundbreaking strategies that forge unforgettable experiences, ignite authentic connections, and drive unparalleled growth. Together, we will transform your vision into a powerful, lasting impact.
                        </TextReveal>

                    </div>
                </AnimationContainer>
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
            </MaxWidthWrapper>
            <MaxWidthWrapper className="py-20">
                <AnimationContainer delay={0.3} className="w-full">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading tracking-tight">
                            Our <AuroraText>Services</AuroraText>
                        </h2>
                        <p className="text-muted-foreground mt-4 text-lg md:text-xl">
                            Explore our comprehensive suite of marketing services designed to elevate your brand.
                        </p>
                    </div>
                </AnimationContainer>
            </MaxWidthWrapper>

            <section className="w-full bg-background">
                <AnimatedServices services={services} autoplay />
            </section>

            <MaxWidthWrapper className="pt-20">
                <AnimationContainer delay={0.4} className="w-full">
                    <LampContainer className="max-w-2xl mx-auto">
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-br from-neutral-300 to-neutral-500 py-4 bg-clip-text text-center text-4xl font-semibold font-heading tracking-tight text-transparent md:text-7xl mt-8">
                                Powerup your Brand strategy
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-lg mx-auto text-base md:text-lg">
                                We ignite brand momentum through bold ideas, sharp strategy, and magnetic storytelling.

                            </p>
                            <div className="mt-6">
                                <Button asChild>
                                    <Link href="/resources/help" className="flex items-center">
                                        Get started <Sparkle className="w-4 h-4 ml-2" />

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

export default MarketingPage
