import { BrainCircuitIcon, Code2Icon, HelpCircleIcon, LineChartIcon, Link2Icon, LockIcon, MegaphoneIcon, NewspaperIcon, QrCodeIcon } from "lucide-react";

export const NAV_LINKS = [
    {
        title: "Features",
        href: "/features",
        menu: [
            {
                title: "Marketing",
                tagline: "Unleash growth with strategies that sell and stories that stick.",
                href: "/features/link-shortening",
                icon: MegaphoneIcon,
            },
            {
                title: "Development",
                tagline: "Build robust, scalable applications with cutting-edge technologies.",
                href: "/features/password-protection",
                icon: Code2Icon,
            },
            {
                title: "MarkTech",
                tagline: "Integrate marketing and technology for seamless user experiences.",
                href: "/features/analytics",
                icon: BrainCircuitIcon,
            },
        ],
    },
    {
        title: "Enterprise Solution",
        href: "/enterprise",
    },
    {
        title: "Resources",
        href: "/resources",
        menu: [
            {
                title: "Blog",
                tagline: "Read articles on the latest trends in tech.",
                href: "/resources/blog",
                icon: NewspaperIcon,
            },
            {
                title: "Help",
                tagline: "Get answers to your questions.",
                href: "/resources/help",
                icon: HelpCircleIcon,
            },
        ]
    },
    {
        title: "Changelog",
        href: "/changelog",
    },
];
