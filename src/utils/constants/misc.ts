import { BarChart3Icon, CloudIcon, Code, CodeIcon, Code2Icon, FolderOpenIcon, WandSparklesIcon, ComputerIcon, BrainCircuit, Search, Megaphone } from "lucide-react";

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

