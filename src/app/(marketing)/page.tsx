import { AnimationContainer, MaxWidthWrapper, PricingCards } from "@/components";
import { BorderBeam } from "@/components/ui/border-beam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LampContainer } from "@/components/ui/lamp";
import MagicBadge from "@/components/ui/magic-badge";
import MagicCard from "@/components/ui/magic-card";
import { COMPANIES, PROCESS } from "@/utils";
import { Testimonials } from "@/utils/constants/misc";
import { ArrowRightIcon, CreditCardIcon, PhoneCallIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TextReveal } from "@/components/magicui/text-reveal";
import { Cover } from "@/components/ui/cover";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { AuroraText } from "@/components/magicui/aurora-text";
import { PinContainer } from "@/components/ui/3d-pin";
import { FAQ } from "@/utils/constants/faq";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import TestimonialsSlider from "@/components/eldoraui/testimonalslider";
import Marquee from "@/components/ui/marquee";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const images = [
    "https://assets.aceternity.com/cloudinary_bkp/3d-card.png",
    "https://assets.aceternity.com/animated-modal.png",
    "https://assets.aceternity.com/animated-testimonials.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    "https://assets.aceternity.com/github-globe.png",
    "https://assets.aceternity.com/glare-card.png",
    "https://assets.aceternity.com/layout-grid.png",
    "https://assets.aceternity.com/flip-text.png",
    "https://assets.aceternity.com/hero-highlight.png",
    "https://assets.aceternity.com/carousel.webp",
    "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    "https://assets.aceternity.com/signup-form.png",
    "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    "https://assets.aceternity.com/spotlight-new.webp",
    "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    "https://assets.aceternity.com/tabs.png",
    "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    "https://assets.aceternity.com/glowing-effect.webp",
    "https://assets.aceternity.com/hover-border-gradient.png",
    "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    "https://assets.aceternity.com/macbook-scroll.png",
    "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    "https://assets.aceternity.com/multi-step-loader.png",
    "https://assets.aceternity.com/vortex.png",
    "https://assets.aceternity.com/wobble-card.png",
    "https://assets.aceternity.com/world-map.webp",
];



const HomePage = () => {
    return (
        <div className="overflow-x-hidden scrollbar-hide size-full">

            {/* Hero Section */}
            <MaxWidthWrapper>
                <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
                    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
                        <button className="group relative grid overflow-hidden rounded-full px-4 py-1 shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
                            <span>
                                <span className="spark mask-gradient absolute inset-0 h-[100%] w-[100%] animate-flip overflow-hidden rounded-full [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
                            </span>
                            <span className="backdrop absolute inset-[1px] rounded-full bg-neutral-950 transition-colors duration-200 group-hover:bg-neutral-900" />
                            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/20"></span>
                            <span className="z-10 py-0.5 text-sm text-neutral-100 flex items-center justify-center gap-1">
                                ✨ Manage your brand smartly with SM
                                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                            </span>
                        </button>
                        <h1 className="text-foreground text-center py-6 text-5xl font-medium tracking-normal text-balance sm:text-6xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
                            We are custodians of <span className="text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text inline-block">Reputation</span>
                        </h1>
                        <p className="mb-12 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
                            Brand engagement is constant online, making it easy to lose sight of reputation management.
                            <br className="hidden md:block" />
                            <span className="hidden md:block">Our comprehensive program, covering PR, search, social, and marketing, ensures brand growth and success.</span>
                        </p>
                        <div className="flex items-center justify-center whitespace-nowrap gap-4 z-100">
                            <Button asChild>
                                <Link href="/auth/sign-in" className="flex items-center">
                                    Contact Us
                                    <PhoneCallIcon className="w-4 h-4 ml-2" />
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </AnimationContainer>
                </div>
                <AnimationContainer delay={0.2} className="relative py-24 bg-transparent w-full items-center justify-center">
                   
                    <MagicBadge title="🤔 What is SM" />
                    <div className="absolute left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/3 inset-0 blur-[5rem] animate-image-glow"></div>
                    <TextGenerateEffect 
                    className="text-foreground text-center text-5xl md:text-xl lg:text-2xl font-medium font-heading z-10 pb-20"
                    words="Your brand deserves better. Built to impress and designed with intention, Each website is a digital signature crafted to reflect identity, evoke trust, and hold attention. It’s where clarity meets beauty, and every interaction feels seamless, refined, and undeniably you." 
                    filter={true}
                    />

                </AnimationContainer>

            </MaxWidthWrapper>





            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[350px]">
                <VelocityScroll defaultVelocity={0.5} className="absolute inset-0">
                    Shopify Development ✶ Webflow Development ✶ Website Development ✶ SaaS Development ✶ Shopify Management ✶ Website Management ✶ Website Redesign ✶ Chatbot Development ✶ SEO ✶ Digital Marketing ✶ AI Agent ✶ Landing Page Design ✶
                </VelocityScroll>
            </div>


            {/* Process Section */}
            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center lg:items-center justify-center w-full max-w-xl mx-auto">
                    <MagicBadge title=" ⚛︎ The SM's Lab" />

                    <h2 className="sm:text-6xl text-4xl font-semibold text-center py-4 px-1">
                        A Website Agency that does it <Cover>Every Pixel</Cover>
                    </h2>

                    <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        Our process is designed to ensure that every aspect of your website is crafted with precision and care, from initial concept to final launch.
                    </p>
                </div>
            </AnimationContainer>
            <MaxWidthWrapper className="py-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
                    {PROCESS.map((process, id) => (
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

            {/* Companies Section */}
            <MaxWidthWrapper>
                <AnimationContainer delay={0.4}>
                    <div className="py-14">
                        <div className="mx-auto px-4 md:px-8">
                            <h2 className="text-center text-sm font-medium font-heading text-neutral-400 uppercase">
                                Trusted by the best in the industry
                            </h2>
                            <div className="mt-8">
                                <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
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

            {/* Features Section */}

            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                    <MagicBadge title="✶ Value" />
                    <h2 className="text-center lg:text-center text-5xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                        Why choose <AuroraText>Schmooze</AuroraText> Media?
                    </h2>
                </div>
            </AnimationContainer>

            <div className="relative mx-auto my-10 flex h-screen w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-3xl">
                <h2 className="relative z-20 mx-auto max-w-4xl text-center text-2xl font-bold text-balance text-white md:text-4xl lg:text-6xl">
                    Innovative Solutions, {" "}
                    <span className="relative z-20 inline-block rounded-xl bg-blue-500/40 px-4 py-1 text-white underline decoration-sky-500 decoration-[6px] underline-offset-[16px] backdrop-blur-sm">
                        Seamlessly
                    </span>{" "}
                    Executed
                </h2>
                <p className="relative z-20 mx-auto max-w-2xl py-8 text-center text-sm text-neutral-200 md:text-base">
                    Each project is a reflection of clarity, craft, and bold ambition — websites built to perform and made to inspire.
                </p>

                <div className="relative z-20 flex flex-wrap items-center justify-center gap-4 pt-4">
                    <button className="rounded-md bg-sky-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sky-700 focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-black focus:outline-none">
                        Contact the Tribe
                    </button>
                </div>

                {/* overlay */}
                <div className="absolute inset-0 z-10 h-full w-full bg-black/10 dark:bg-black/40" />
                <ThreeDMarquee
                    className="pointer-events-none absolute inset-0 h-full w-full"
                    images={images}
                />
            </div>
            {/* Pricing Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-start gap-4 md:gap-8 py-10">

            </div>


            {/* Reviews Section */}

            <AnimationContainer delay={0.1}>
                <div className="flex flex-col items-center lg:items-center justify-center w-full py-8 max-w-xl mx-auto">
                    <MagicBadge title="🕺🏽 Our Clients" />
                    <h2 className="text-center lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                        What our clients are saying
                    </h2>
                    <p className="mt-4 text-center lg:text-center text-lg text-muted-foreground max-w-lg">
                        Here&apos;s what some of our clients have to say about <AuroraText>Schmoozes</AuroraText> Media.
                    </p>
                </div>
            </AnimationContainer>
            <div className="py-10 px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Testimonial Cards */}
                    <Marquee>
                        <div className="flex flex-col items-start h-min gap-6">
                            {Testimonials.slice(0, 3).map((testimonial, index) => (
                                <AnimationContainer delay={0.2 * index} key={index}>
                                    <MagicCard className="md:p-0">
                                        <Card className="flex flex-col w-full border-none h-min">
                                            <CardHeader className="space-y-0">
                                                <CardTitle className="text-lg font-medium text-muted-foreground">
                                                    {testimonial.name}
                                                </CardTitle>
                                                <CardDescription>
                                                    {testimonial.username}
                                                </CardDescription>
                                            </CardHeader>
                                            <CardContent className="space-y-4 pb-4">
                                                <p className="text-muted-foreground">{testimonial.quote}</p>
                                            </CardContent>
                                            <CardFooter className="w-full space-x-1 mt-auto">
                                                {/* Stars or any other content */}
                                            </CardFooter>
                                        </Card>
                                    </MagicCard>
                                </AnimationContainer>
                            ))}
                        </div>
                    </Marquee>

                    {/* Testimonials Slider */}
                    <div className="flex flex-col items-center justify-center">
                        <TestimonialsSlider testimonials={[...Testimonials]} />
                    </div>
                </div>
            </div>


            <AnimationContainer delay={0.3}>
                <div className="mt-20 w-full">
                    <div className="flex flex-col items-center justify-center w-full pt-12">
                        <h2 className="mt-6 text-2xl font-semibold text-center lg:text-3xl xl:text-4xl">
                            Frequently Asked Questions
                        </h2>
                        <p className="max-w-lg mt-6 text-center text-neutral-500">
                            Here are some of the most common questions we get asked. If you have a question that isn&apos;t answered here, feel free to reach out to us.
                        </p>
                    </div>
                    <div className="max-w-3xl mx-auto w-full mt-20">
                        <Accordion type="single" collapsible>
                            {FAQ.map((faq) => (
                                <AccordionItem key={faq.id} value={faq.id}>
                                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                                    <AccordionContent>{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </AnimationContainer>


            {/* CTA Section */}
            <MaxWidthWrapper className="mt-20 max-w-[100vw] overflow-x-hidden scrollbar-hide">
                <AnimationContainer delay={0.1}>
                    <LampContainer>
                        <div className="flex flex-col items-center justify-center relative w-full text-center">
                            <h2 className="bg-gradient-to-b from-neutral-200 to-neutral-400 py-4 bg-clip-text text-center text-4xl md:text-7xl !leading-[1.15] font-medium font-heading tracking-tight text-transparent mt-8">
                                Crafting Success Stories, One Pixel at a Time
                            </h2>
                            <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                                We combine creative design, innovative development, and strategic marketing to help your brand thrive in the digital world.
                            </p>
                            <div className="mt-6">
                                <Button>
                                    Get Started
                                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </div>
                    </LampContainer>
                </AnimationContainer>
            </MaxWidthWrapper>
        </div>
    )
};

export default HomePage;
