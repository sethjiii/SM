import { AnimationContainer, MaxWidthWrapper } from "@/components";
import Link from "next/link";

const TermsPage = () => {
    return (
        <MaxWidthWrapper className="max-w-3xl mx-auto px-8 mb-40">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-4xl md:text-6xl font-heading font-bold my-12 text-center w-full">
                    Terms and Conditions
                </h1>
                <p className="text-sm mb-2 italic mt-20">
                    Last updated: 14th August 2025
                </p>
                <p className="mt-4">
                    Welcome to Schmooze Media. These terms and conditions outline the rules and regulations for the use of Schmooze Media&apos;s website, applications, and services.
                </p>

                <h2 className="text-xl font-medium mt-8">
                    Acceptance of Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    By accessing and using Schmooze Media, you agree to be bound by these terms and conditions. If you do not agree, you must discontinue use of our services immediately.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Changes to Terms
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Schmooze Media may update these terms at any time. We will post updates on this page and revise the &quot;Last updated&quot; date. Your continued use of our services after changes indicates your acceptance of the revised terms.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Use of Services
                </h2>

                <h3 className="text-lg mt-8">
                    Eligibility
                </h3>
                <p className="mt-8">
                    You must be at least 18 years old or have the consent of a legal guardian to use Schmooze Media.
                </p>

                <h3 className="text-lg mt-8">
                    Account Registration
                </h3>
                <div className="mt-8">
                    <ul className="list-disc ml-8 text-muted-foreground">
                        <li>You must provide accurate and up-to-date information when creating an account.</li>
                        <li>You are responsible for safeguarding your login credentials and any activity under your account.</li>
                        <li>You must notify us immediately of any unauthorized access to your account.</li>
                    </ul>
                </div>

                <h3 className="text-lg mt-8">
                    Acceptable Use
                </h3>
                <div className="mt-8">
                    You agree not to use Schmooze Media for illegal, harmful, or abusive activities, including but not limited to:
                    <ul className="list-disc text-muted-foreground ml-8">
                        <li>Posting or sharing content that is unlawful, defamatory, obscene, or infringing on others’ rights.</li>
                        <li>Spamming, phishing, or distributing malicious software.</li>
                        <li>Attempting to hack, exploit, or disrupt our services or other users.</li>
                    </ul>
                </div>

                <h2 className="text-xl font-medium mt-12">
                    Content and Intellectual Property
                </h2>

                <h3 className="text-lg mt-8">
                    Your Content
                </h3>
                <p className="mt-8 text-muted-foreground">
                    You retain ownership of the content you post on Schmooze Media. By posting, you grant us a worldwide, non-exclusive, royalty-free license to use, display, and distribute your content solely to operate and improve our services.
                </p>

                <h3 className="text-lg mt-8">
                    Our Content
                </h3>
                <p className="mt-8 text-muted-foreground">
                    All trademarks, logos, and content provided by Schmooze Media remain our intellectual property and may not be used without our written consent.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Privacy
                </h2>
                <p className="mt-8 text-muted-foreground">
                    Your privacy is important to us. Please review our <Link href="/privacy" className="underline">Privacy Policy</Link> to learn how we collect, use, and protect your information.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Termination
                </h2>
                <p className="mt-8 text-muted-foreground">
                    We may suspend or terminate your account at any time for violations of these terms, unlawful behavior, or any other reason at our discretion.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Disclaimers and Limitations of Liability
                </h2>

                <h3 className="text-lg mt-8">
                    No Warranties
                </h3>
                <p className="mt-8 text-muted-foreground">
                    Schmooze Media is provided &quot;as is&quot; and &quot;as available&quot; without any warranties of any kind, express or implied.
                </p>

                <h3 className="text-lg mt-8">
                    Limitation of Liability
                </h3>
                <p className="mt-8 text-muted-foreground">
                    We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Governing Law
                </h2>
                <p className="mt-8 text-muted-foreground">
                    These terms are governed by the laws of India, without regard to conflict of law principles.
                </p>

                <h2 className="text-xl font-medium mt-12">
                    Contact Us
                </h2>
                <p className="mt-8 text-muted-foreground">
                    If you have any questions about these Terms and Conditions, please contact us at support@schmoozemedia.com.
                </p>

                <p className="mt-8 font-medium">
                    By using Schmooze Media, you acknowledge that you have read, understood, and agree to these Terms and Conditions.
                </p>
            </AnimationContainer>
        </MaxWidthWrapper>
    );
};

export default TermsPage;
