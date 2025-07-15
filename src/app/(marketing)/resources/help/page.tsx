import { AnimationContainer } from "@/components";
import React from 'react'
import { TextReveal } from "@/components/magicui/text-reveal";

const HelpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Help
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Need help? We got you.
                </p>
            </AnimationContainer>

            <TextReveal className="text-foreground text-center text-5xl md:text-xl lg:text-2xl font-medium font-heading z-10">
                Your brand deserves better.
                Built to impress and designed with intention,
                Each website is a digital signature crafted to reflect identity, evoke trust, and hold attention.
                It’s where clarity meets beauty, and every interaction feels seamless, refined, and undeniably you.
            </TextReveal>
        </div>
    )
};

export default HelpPage
