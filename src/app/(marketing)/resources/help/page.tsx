"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React, { useState } from "react";
import { TextReveal } from "@/components/magicui/text-reveal";
import { ScrollArea } from "@radix-ui/react-scroll-area";

const HelpPage = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg(null);

    const form = e.currentTarget as HTMLFormElement & {
      name: { value: string };
      organization: { value: string };
      email: { value: string };
      number: { value: string };
      website: { value: string };
      message: { value: string };
      hearAbout: { value: string };
      services: { value: string };
      otherSource: { value: string };
      _hp: { value: string };
    };

    const payload = {
      name: form.name.value.trim(),
      organization: form.organization.value.trim(),
      email: form.email.value.trim(),
      number: form.number.value.trim(),
      website: form.website.value.trim(),
      message: form.message.value.trim(),
      hearAbout: form.hearAbout.value,
      services: form.services.value,
      otherSource: form.otherSource.value.trim(),
      _hp: form._hp.value,
    };

    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    if (data.ok) setMsg("Thanks! We'll get back to you shortly.");
    else setMsg(data.error || "Something went wrong");
    setLoading(false);
    if (data.ok) (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 min-h-screen bg-gradient-to-br from-background via-background to-muted/20">

     

     
      {/* Contact Section */}
      <MaxWidthWrapper className="w-full">
        <AnimationContainer delay={0.1} className="text-center space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Got an idea? Drop us a message.
          </h2>
          <div className="space-y-4">
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
              We're excited to work with you soon! Please drop an email with your
              details & requirements to{" "}
              <a
                href="mailto:ashish@schmoozemedia.com"
                className="text-primary hover:text-primary/80 underline hover:no-underline transition-all duration-200 font-medium"
              >
                ashish@schmoozemedia.com
              </a>
              .
            </p>
            <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              You can also fill this form & we'll get back in 2 business days.
            </p>
          </div>
        </AnimationContainer>

        {/* Contact Form */}
        <AnimationContainer delay={0.3} className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-3xl blur-3xl"></div>
              
              <div className="relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-3xl shadow-2xl shadow-primary/5 overflow-hidden">
                {/* Form header */}
                <div className="bg-gradient-to-r from-muted/30 to-muted/10 px-8 py-6 border-b border-border/30">
                  <h3 className="text-xl font-semibold text-foreground">Let's start the conversation</h3>
                  <p className="text-sm text-muted-foreground mt-1">Tell us about your project and we'll get back to you.</p>
                </div>

                <form onSubmit={onSubmit} className="p-8 space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Full Name *</label>
                      <input
                        name="name"
                        placeholder="Enter your full name"
                        required
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Organization</label>
                      <input
                        name="organization"
                        placeholder="Your company or organization"
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        required
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone Number</label>
                      <input
                        name="number"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Website or Social Media</label>
                    <input
                      name="website"
                      placeholder="https://yourwebsite.com or @yoursocial"
                      className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Message *</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      required
                      rows={5}
                      className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80 resize-none"
                    />
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">How did you find us? *</label>
                      <select
                        name="hearAbout"
                        required
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80 appearance-none cursor-pointer"
                      >
                        <option value="">Select an option</option>
                        <option value="Referral">Referral from a friend</option>
                        <option value="Media & News">Media & News</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Instagram/Facebook">Instagram/Facebook</option>
                        <option value="Emails/Newsletter">Email/Newsletter</option>
                        <option value="Search">Google Search</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Services Interested In *</label>
                      <select
                        name="services"
                        required
                        className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80 appearance-none cursor-pointer"
                      >
                        <option value="">Choose a service</option>
                        <option value="Marketing">Marketing</option>
                        <option value="MarTech">MarTech</option>
                        <option value="Development">Development</option>
                        <option value="Idea to First 10K Users">Idea to First 10K Users</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Additional Sources</label>
                    <input
                      name="otherSource"
                      placeholder="Any other relevant information or sources"
                      className="w-full border border-border/60 bg-background/80 backdrop-blur-sm p-4 rounded-xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all duration-200 hover:border-border/80"
                    />
                  </div>

                  {/* Honeypot field (hidden) */}
                  <input
                    name="_hp"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                  />

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 px-8 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 shadow-lg hover:shadow-xl hover:shadow-primary/20 transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      {loading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                          <span>Sending your message...</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>

                  {msg && (
                    <AnimationContainer delay={0.1}>
                      <div
                        className={`text-center p-4 rounded-xl text-sm font-medium border transition-all duration-200 ${
                          typeof msg === "string" && msg.includes("Thanks")
                            ? "bg-green-50/80 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200/60 dark:border-green-800/60 shadow-lg shadow-green-500/10"
                            : "bg-red-50/80 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-200/60 dark:border-red-800/60 shadow-lg shadow-red-500/10"
                        }`}
                      >
                        {typeof msg === "string" ? msg : JSON.stringify(msg)}
                      </div>
                    </AnimationContainer>
                  )}
                </form>
              </div>
            </div>
          </div>
        </AnimationContainer>
      </MaxWidthWrapper>
    </div>
  );
};

export default HelpPage;