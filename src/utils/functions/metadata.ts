import { Metadata } from "next";

export const generateMetadata = ({
    title = `Schmooze Media – From Idea to First 10K Users & Beyond`,
    description = `Schmooze Media is your full-stack growth partner. We combine MVP development, data-driven marketing, and MarTech automation to take your idea from zero to scalable traction.`,
    image = "/og-image.jpg",
    icons = [
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-touch-icon.png"
        },
        {
            rel: "icon",
            sizes: "32x32",
            url: "/favicon.ico"
        },
        {
            rel: "icon",
            sizes: "16x16",
            url: "/favicon.ico"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    icons,
    openGraph: {
        title,
        description,
        ...(image && { images: [{ url: image }] }),
        type: "website",
        locale: "en_US",
        siteName: "Schmooze Media"
    },
    twitter: {
        title,
        description,
        ...(image && { card: "summary_large_image", images: [image] }),
        creator: "@SchmoozeMedia",
    },
    metadataBase: new URL("https://schmoozemedia.com"),
    ...(noIndex && { robots: { index: false, follow: false } }),
});
