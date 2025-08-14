import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const HelpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      {/* Header Section */}
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          Help
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Need help? We got you.
        </p>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          If you have any questions or need assistance, feel free to reach out to our
          support team.
        </p>
      </AnimationContainer>

      {/* Scroll Text Section */}
      <ScrollArea className="mt-4 max-w-4xl">
        <TextReveal className="text-foreground text-center text-lg md:text-xl lg:text-2xl font-medium font-heading z-10">
          Your brand deserves better. Built to impress and designed with intention,
          each website is a digital signature crafted to reflect identity, evoke
          trust, and hold attention. It’s where clarity meets beauty, and every
          interaction feels seamless, refined, and undeniably you.
        </TextReveal>
      </ScrollArea>

      {/* Contact Section */}
      <MaxWidthWrapper className="mt-14">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold font-heading text-center mb-4">
          Got an idea? Drop us a message.
        </h2>
        <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto">
          We're excited to work with you soon! Please drop an email with your
          details & requirements to{" "}
          <a
            href="mailto:ashish@schmoozemedia.com"
            className="text-primary underline hover:no-underline transition"
          >
            ashish@schmoozemedia.com
          </a>
          .
        </p>

        <p className="text-base md:text-lg text-center text-muted-foreground max-w-2xl mx-auto mt-4">
          You can also fill this form & we'll get back in 2 business days.
        </p>

        {/* Embed Container */}
        <div className="flex justify-center mt-10">
          <div className="w-full max-w-3xl rounded-2xl shadow-lg border border-gray-200 bg-white overflow-hidden">
            <iframe
              className="w-full"
              src="https://airtable.com/embed/appwU9Q8kL4MYbpk7/pag9Ve2D5eqGZYfKM/form"
              frameBorder="0"
              height="533"
              style={{ background: "transparent" }}
            ></iframe>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HelpPage;
