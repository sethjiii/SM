import { IconAutomaticGearbox, IconChartLine, IconGrowth } from "@tabler/icons-react";
import { BarChartIcon, BarChart3Icon, SmartphoneIcon, CloudIcon, Code, CloudCogIcon, CodeIcon, Code2Icon, CheckCircleIcon, LayersIcon, FolderOpenIcon, WandSparklesIcon, ComputerIcon, BrainCircuit, Search, Megaphone, StepBackIcon, Brain, TrendingUpIcon, ZapIcon, ShieldCheck, LayoutIcon, RocketIcon, NetworkIcon, ShoppingCartIcon, RefreshCcwIcon, DatabaseIcon, ServerIcon, CreditCardIcon, BlocksIcon, Dice1Icon } from "lucide-react";
import { FaChartBar, FaChartLine, FaDiagnoses } from "react-icons/fa";

export const DEFAULT_AVATAR_URL = "https://api.dicebear.com/8.x/initials/svg?backgroundType=gradientLinear&backgroundRotation=0,360&seed=";

export const PAGINATION_LIMIT = 10;

export const COMPANIES = [
    {
        name: "Asana",
        logo: "/assets/company-01.svg",
    },
    {
        name: "Tidal",
        logo: "/assets/company-02.svg",
    },
    {
        name: "Innovaccer",
        logo: "/assets/company-03.svg",
    },
    {
        name: "Linear",
        logo: "/assets/company-04.svg",
    },
    {
        name: "Raycast",
        logo: "/assets/company-05.svg",
    },
    {
        name: "Labelbox",
        logo: "/assets/company-06.svg",
    }
] as const;

export const PROCESS = [
    {
        title: "SaaS Development",
        description: "Scalable SaaS apps for side income and business efficiency.",
        icon: CloudIcon,
    },
    {
        title: "Website Development",
        description: "Create concise, branded links that are easy to share and track.",
        icon: Code2Icon,
    },
    {
        title: "API Development",
        description: "Build robust APIs for seamless integration with your applications.",
        icon: ComputerIcon,
    },
    {
        title: "AI Agent Development",
        description: "Develop AI agents for automation and enhanced user experiences.",
        icon: BrainCircuit,
    },
    {
        title: "Search Engine Optimization",
        description: "Optimize your brand for better visibility and engagement.",
        icon: Search,
    },
    {
        title: "Digital Marketing",
        description: "Gain insights into link performance and optimize for better engagement.",
        icon: Megaphone,
    },
] as const;

export const DEVSERVICES = [
    {
        title: "SaaS Development",
        description: "Scalable SaaS apps for side income and business efficiency.",
        icon: CloudIcon,
    },
    {
        title: "Website Development",
        description: "Create concise, branded links that are easy to share and track.",
        icon: Code2Icon,
    },
    {
        title: "API Development",
        description: "Build robust APIs for seamless integration with your applications.",
        icon: ComputerIcon,
    },
    {
        title: "AI Agent Development",
        description: "Develop AI agents for automation and enhanced user experiences.",
        icon: BrainCircuit,
    },
    {
        title: "Custom Web Applications",
        description: "From SaaS to internal tools, we craft solutions tailored to your needs.",
        icon: LayoutIcon,
    },
    {
        title: "MVP Development",
        description: "Launch fast, learn faster with rapid prototyping and iteration.",
        icon: RocketIcon,
    },
    {
        title: "API Development & Integrations",
        description: "Connecting your ecosystem with seamless data and service flows.",
        icon: NetworkIcon,
    },
    {
        title: "E-Commerce Platforms",
        description: "Conversion-focused & scalable online stores that grow with you.",
        icon: ShoppingCartIcon,
    },
    {
        title: "Mobile-Ready Solutions",
        description: "Progressive web apps & responsive design for every device.",
        icon: SmartphoneIcon,
    },
    {
        title: "AI/ML Powered Analytics",
        description: "Unlock insights with AI/ML-driven data analytics and predictions.",
        icon: BarChartIcon,
    },
    {
        title: "Digital Transformation",
        description: "End-to-end strategies to modernize and grow your business.",
        icon: RefreshCcwIcon,
    },
    {
        title: "Data Migration & Automation",
        description: "Seamless migration and automation for efficiency and accuracy.",
        icon: DatabaseIcon,
    },
    {
        title: "Data Engineering",
        description: "Build reliable pipelines and architectures for large-scale data.",
        icon: ServerIcon,
    },
    {
        title: "Point Of Sale",
        description: "Smart, integrated POS solutions for streamlined transactions.",
        icon: CreditCardIcon,
    },
    {
        title: "Blockchain",
        description: "Secure and transparent blockchain-based solutions.",
        icon: BlocksIcon,
    },
    {
        title: "ERP & ECM",
        description: "Comprehensive systems for managing business processes and content.",
        icon: LayersIcon,
    },
    {
        title: "Quality Assurance",
        description: "Rigorous testing to ensure performance, reliability, and usability.",
        icon: CheckCircleIcon,
    },
    {
        title: "3D/AR/VR",
        description: "Immersive experiences that engage and inspire.",
        icon: Dice1Icon,
    },
    {
        title: "DevOps & Cloud Consulting",
        description: "Optimize deployment pipelines and scale with cloud-native solutions.",
        icon: CloudCogIcon,
    },
] as const;


export const MarTechProcess = [
    {
        title: "Diagnose",
        description: "We map your existing stack & customer journey",
        icon: FaDiagnoses,
    },
    {
        title: "Architect",
        description: "Custom Martech stack that aligns tech with revenue.",
        icon: WandSparklesIcon,
    },
    {
        title: "Automate",
        description: "Lead funnels, sequences, CRO, AI personalization.",
        icon: IconAutomaticGearbox,
    },
    {
        title: "Optimize",
        description: "Dashboards, heatmaps, A/B testing, KPI loops.",
        icon: BrainCircuit,
    },
] as const;

export const DevelopmentPhilosophy = [
    {
        title: "Scalable First",
        description: "Architected to grow with your business.",
        icon: TrendingUpIcon,
    },
    {
        title: "Performance-Driven",
        description: "Optimized for speed & responsiveness.",
        icon: ZapIcon,
    },
    {
        title: "Future-Proof",
        description: "Built on modern, proven stacks.",
        icon: ShieldCheck,
    },

] as const;

export const Ideato10KPillar = [
    {
        title: "Technology",
        description: "MVPs That Scale Like They Matter. We don't build demo apps. We build lean, loud, and launch-ready products — with architecture that doesn’t panic when your tweet goes viral. Think clean code, real performance, and features your users actually touch.",
        icon: CodeIcon,
    },
    {
        title: "Growth",
        description: "Go-to-Market With Teeth We don't Forget “soft launches.” We build noise-generating, funnel-optimizing, conversion-obsessing systems that turn visitors into users, and users into fans. Launch campaigns, viral loops, creator collabs — all custom to your niche, all measurable.",
        icon: IconChartLine,
    },
    {
        title: "MarTech",
        description: "MarTech Lead funnels, sequences, CRO, AI personalization. Most agencies ignore what happens after the click. Not us. We wire up every touchpoint with analytics, heatmaps, behavioral triggers, and lifecycle flows that work while you sleep. You get clarity, not guesswork.",
        icon: Brain,
    },
] as const;

export const FEATURES = [
    {
        title: "Marketing",
        description: "Unleash growth with strategies that sell and stories that stick.",
    },
    {
        title: "Development",
        description: "Build robust, scalable applications with cutting-edge technologies.",
    },
    {
        title: "MarkTech",
        description: "Integrate marketing and technology for seamless user experiences.",
    },

] as const;

export const data = [
    {
        title: "Week 1–2: Pressure Test",
        content: (

            "We rip your idea apart. Rebuild the value prop. Test assumptions with Typeform + survey ads."

        ),
    },
    {
        title: "Week 3–5: Build for Launch, Not Perfection",
        content: (

            "We ship fast. MVP is mobile-ready, branded, and built to capture feedback and emails."

        ),
    },
    {
        title: "Week 6–7: Loud Launch",
        content: (
            "Product Hunt drop, pre-warm email list, performance ads, waitlist trigger sequences, influencers in niche communities."
        ),
    },
    {
        title: "Week 8–12: The Feedback Flywheel",
        content: (
            "Track. Retarget. Email based on behavior. Feature requests. A/B test headlines. Turn users into ambassadors."
        ),
    },
] as const;

export const developmentSteps = [
    {
        title: "Step 1: Discovery",
        content: ("Deep dive into your problem."),
    },
    {
        title: "Step 2: Architecture",
        content: ("Decide on stack, flow, and integrations."),
    },
    {
        title: "Step 3: Design",
        content: ("UX first, UI that sings."),
    },
    {
        title: "Step 4: Development",
        content: ("Clean, modular, test-driven code."),
    },
    {
        title: "Step 5: Launch",
        content: ("Deploy with tracking and monitoring."),
    },
    {
        title: "Step 6: Support",
        content: ("Updates, improvements, and scaling."),
    },
] as const;


export const Testimonials = [
    {
        img: "https://randomuser.me/api/portraits/men/1.jpg", // This is the avatar
        quote: "This tool is a lifesaver! Managing and tracking my links has never been easier. A must-have for anyone dealing with numerous links.", // Review text
        name: "Sanskar Seth", // Name of the reviewer
        role: "User", // You can set a default role or add the actual role if available
        username: "@michaelsmith", // Username of the reviewer
    },
    {
        img: "https://randomuser.me/api/portraits/women/1.jpg",
        quote: "Very useful app! It has streamlined my workflow considerably. A few minor bugs, but overall a great experience.",
        name: "Ankit Tanwar",
        role: "User",
        username: "@ankittanwar",
    },
    {
        img: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "I've been using this app daily for months. The insights and analytics it provides are invaluable. Highly recommend it!",
        name: "Ashish Trivedi",
        role: "User",
        username: "@ashishtrivedi",
    },

    // Add other reviews similarly...
] as const;

