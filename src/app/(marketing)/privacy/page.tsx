import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";

const Privacy = () => {
  return (
    <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
          Privacy Policy
        </h1>
        <p className="text-sm mb-2 italic mt-20">
          Last updated: 14th August 2025
        </p>
        <p className="mt-4">
          At <strong>Schmooze Media</strong>, your privacy matters to us.
          Whether you’re browsing our site, exploring our services, or becoming
          a client, we’re committed to safeguarding your data and being fully
          transparent about how it’s collected, used, and protected.
        </p>

        <h2 className="text-xl font-medium mt-8">Information We Collect</h2>

        <h3 className="text-lg mt-4">Personal Information</h3>
        <p className="mt-8 text-muted-foreground">
          When you inquire about our services, request a quote, or become a
          client, we may collect personal information such as your name, email
          address, phone number, business details, and payment information.
        </p>

        <h3 className="text-lg font-medium mt-12">Non-Personal Information</h3>
        <p className="mt-8 text-muted-foreground">
          We also collect non-personal information like browser type, device
          information, IP address, and pages visited to help us understand how
          our website is used and improve your experience.
        </p>

        <h3 className="text-lg font-medium mt-8">
          Cookies and Tracking Technologies
        </h3>
        <p className="mt-8">
          We use cookies and similar technologies to keep our site running
          smoothly, personalize content, and measure marketing performance.
          You can manage or disable cookies via your browser settings.
        </p>

        <h2 className="text-xl font-medium mt-12">
          How We Use Your Information
        </h2>

        <h3 className="text-lg mt-8">To Provide and Improve Services</h3>
        <div className="mt-8">
          We use your information to:
          <ul className="list-disc ml-8 text-muted-foreground">
            <li>Deliver our marketing, development, and MarTech services.</li>
            <li>Improve and customize your experience with us.</li>
            <li>Process payments and manage client accounts.</li>
          </ul>
        </div>

        <h3 className="text-xl font-medium mt-12">Communication</h3>
        <div className="mt-8">
          We may use your contact details to:
          <ul className="list-disc text-muted-foreground ml-8">
            <li>
              Send project updates, proposals, and service-related information.
            </li>
            <li>Share insights, resources, or offers relevant to your goals.</li>
            <li>Respond to your inquiries and provide support.</li>
          </ul>
        </div>

        <h3 className="text-lg mt-8">Analytics and Research</h3>
        <div className="mt-8">
          We use aggregated, non-personal data for:
          <ul className="list-disc text-muted-foreground ml-8">
            <li>Measuring campaign performance and ROI.</li>
            <li>Improving our strategies and technical solutions.</li>
          </ul>
        </div>

        <h2 className="text-xl font-medium mt-12">
          How We Share Your Information
        </h2>

        <h3 className="text-lg mt-8">Service Providers</h3>
        <p className="mt-8 text-muted-foreground">
          We work with trusted third-party providers—such as payment processors,
          hosting services, analytics platforms, and email marketing tools—who
          only receive the data they need to perform their services.
        </p>

        <h3 className="text-lg mt-8">Legal Requirements</h3>
        <p className="mt-8 text-muted-foreground">
          We may disclose information if required by law, regulation, or legal
          request, or to protect the rights and safety of Schmooze Media, our
          clients, and others.
        </p>

        <h3 className="text-lg mt-8">Business Transfers</h3>
        <p className="mt-8 text-muted-foreground">
          If Schmooze Media undergoes a merger, acquisition, or sale of assets,
          your information may be transferred as part of that process.
        </p>

        <h2 className="text-xl font-medium mt-12">Data Security</h2>
        <p className="mt-8 text-muted-foreground">
          We implement strong security measures—including encryption,
          restricted access, and regular system monitoring—to protect your
          information. However, no online system is completely risk-free.
        </p>

        <h2 className="text-xl font-medium mt-12">Data Retention</h2>
        <p className="mt-8 text-muted-foreground">
          We keep your information for as long as it’s needed to provide
          services, meet legal obligations, resolve disputes, or enforce
          agreements.
        </p>

        <h2 className="text-xl font-medium mt-12">Your Rights and Choices</h2>

        <h3 className="text-lg mt-8">Access and Update</h3>
        <p className="mt-8 text-muted-foreground">
          You can access, update, or correct your personal information by
          contacting us directly.
        </p>

        <h3 className="text-lg mt-8">Opt-Out</h3>
        <p className="mt-8 text-muted-foreground">
          You can opt out of marketing communications at any time using the
          unsubscribe link in our emails or by contacting us.
        </p>

        <h3 className="text-lg mt-8">Data Deletion</h3>
        <p className="mt-8 text-muted-foreground">
          You may request the deletion of your personal data by emailing
          support@schmoozemedia.com.
        </p>

        <h2 className="text-xl font-medium mt-12">Children&apos;s Privacy</h2>
        <p className="mt-8 text-muted-foreground">
          Our services are intended for businesses and individuals aged 18 and
          over. We do not knowingly collect data from minors.
        </p>

        <h2 className="text-xl font-medium mt-12">
          International Data Transfers
        </h2>
        <p className="mt-8 text-muted-foreground">
          If your data is transferred outside your country, we ensure
          appropriate protections are in place, consistent with applicable
          privacy laws.
        </p>

        <h2 className="text-xl font-medium mt-12">
          Changes to This Privacy Policy
        </h2>
        <p className="mt-8 text-muted-foreground">
          We may update this policy to reflect changes in laws, technology, or
          our services. Updates will be posted on this page with a revised
          &quot;Last updated&quot; date.
        </p>

        <h2 className="text-xl font-medium mt-12">Contact Us</h2>
        <p className="mt-8 text-muted-foreground">
          If you have any questions about this Privacy Policy or how your data
          is handled, please email us at support@schmoozemedia.com.
        </p>

        <p className="mt-8 font-medium">
          By using Schmooze Media’s services, you acknowledge that you have read
          and agree to this Privacy Policy.
        </p>
      </AnimationContainer>
    </MaxWidthWrapper>
  );
};

export default Privacy;
