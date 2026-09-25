export const servicesData = [
    {
        title: "AI Evaluation & Benchmarks",
        description:
            "I design long-horizon agentic tasks for frontier models and the graders that score them. Every task ships with a reference solution, a deterministic verifier and a Docker environment, calibrated against measured pass rates.",
        items: [
            {
                title: "Agentic task design",
                description: "(Task environments, reference solutions, Harbor)",
            },
            {
                title: "Verifiers & rubrics",
                description: "(Trajectory graders, partial credit, pytest)",
            },
            {
                title: "Difficulty calibration",
                description: "(Pass-rate bands across models and reasoning effort)",
            },
        ],
    },
    {
        title: "Full-Stack Development",
        description:
            "Production React and Next.js frontends on top of Node.js services and clean APIs, built to stay fast and reliable under real traffic.",
        items: [
            {
                title: "Frontend",
                description: "(React, Next.js, TypeScript, Radix UI)",
            },
            {
                title: "Backend & APIs",
                description: "(Node.js, REST, GraphQL, real-time)",
            },
            {
                title: "Data",
                description: "(PostgreSQL, MongoDB, Redis)",
            },
        ],
    },
    {
        title: "DevOps & Quality",
        description:
            "Reproducible builds, tests that catch regressions before users do, and monitoring once it ships.",
        items: [
            {
                title: "CI/CD",
                description: "(GitHub Actions, Docker, preview environments)",
            },
            {
                title: "Testing",
                description: "(Jest, Playwright, React Testing Library)",
            },
            {
                title: "Monitoring",
                description: "(Sentry, Core Web Vitals)",
            },
        ],
    },
    {
        title: "Delivery & ITSM",
        description:
            "Five years administering Jira, Zendesk and ServiceNow: workflows, automations and dashboards that keep engineering, product and support in sync.",
        items: [
            {
                title: "Jira",
                description: "(Workflows, boards, automation)",
            },
            {
                title: "Zendesk",
                description: "(Support queues, macros, SLAs)",
            },
            {
                title: "ServiceNow",
                description: "(Incident and change management)",
            },
        ],
    },
];

export const projects = [
    {
        id: 1,
        name: "Splitpoint",
        description:
            "Where did the failing agent run go wrong? Aligns passing and failing SWE-agent runs step by step and marks the split, with an LLM judge scored against blind human labels.",
        href: "https://github.com/samyyy2423/splitpoint",
        image: "/assets/projects/splitpoint.webp",
        bgImage: "/assets/backgrounds/map.webp",
        frameworks: [
            { id: 1, name: "Python" },
            { id: 2, name: "DuckDB" },
            { id: 3, name: "Claude API" },
            { id: 4, name: "Next.js" },
            { id: 5, name: "TypeScript" },
        ],
    },
    {
        id: 2,
        name: "Creative Asset Platform",
        description:
            "TopCoder challenge: upload one creative and batch-generate every platform format, with a canvas editor and pluggable AI providers.",
        href: "https://github.com/samyyy2423/topcoder",
        image: "/assets/projects/creative-asset-platform.webp",
        bgImage: "/assets/backgrounds/poster.webp",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Flask" },
            { id: 3, name: "Fabric.js" },
            { id: 4, name: "Python" },
        ],
    },
    {
        id: 3,
        name: "Dependency Checker",
        description:
            "TypeScript CLI that finds outdated npm packages, runs npm audit, applies safe fixes and writes JSON and Markdown reports. Monorepo-aware.",
        href: "https://github.com/samyyy2423/dependency_checker",
        image: "/assets/projects/dependency-checker.webp",
        bgImage: "/assets/backgrounds/table.webp",
        frameworks: [
            { id: 1, name: "TypeScript" },
            { id: 2, name: "Node.js" },
            { id: 3, name: "CLI" },
        ],
    },
    {
        id: 4,
        name: "Web Server in C",
        description:
            "An HTTP server from scratch in C: TCP sockets, request-line parsing, BST routing, HTML templates and static files.",
        href: "https://github.com/samyyy2423/webserver_with_C",
        image: "/assets/projects/c-web-server.webp",
        bgImage: "/assets/backgrounds/curtains.webp",
        frameworks: [
            { id: 1, name: "C" },
            { id: 2, name: "Sockets" },
            { id: 3, name: "Make" },
        ],
    },
    {
        id: 5,
        name: "Apple landing page",
        description:
            "An online store specializing in phone accessories including cases, chargers, cables, and power banks with MagSafe compatibility.",
        href: "https://applebysamyak.vercel.app/",
        image: "/assets/projects/apple.webp",
        bgImage: "/assets/backgrounds/blanket.webp",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Vite" },
            { id: 3, name: "GSAP" },
            { id: 4, name: "Three.js" },
            { id: 5, name: "Tailwind CSS" },
        ],
    },
    {
        id: 6,
        name: "Zen",
        description:
            "A website where gaming meets advance technology",
        href: "https://zenbysamyak.vercel.app/",
        image: "/assets/projects/zen.webp",
        bgImage: "/assets/backgrounds/curtains.webp",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Vite" },
            { id: 3, name: "GSAP" },
            { id: 4, name: "Tailwind CSS" },
        ],
    },
    {
        id: 7,
        name: "Mojito",
        description:
            "Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes designed to delight your senses.",
        href: "https://mojitobysamyak.vercel.app/",
        image: "/assets/projects/mojito.webp",
        bgImage: "/assets/backgrounds/map.webp",
        frameworks: [
            { id: 1, name: "React" },
            { id: 2, name: "Three.js" },
            { id: 3, name: "Vite" },
            { id: 4, name: "Tailwindcss" },
            { id: 5, name: "GSAP" },
        ],
    },
    {
        id: 8,
        name: "Cote Royale",
        description:
            "An expression of quiet luxury, Côte Royale is designed for the man who commands attention without seeking it. A reflection of nature’s raw beauty.",
        href: "https://fragrancebysamyak.vercel.app/",
        image: "/assets/projects/cote-royale.webp",
        bgImage: "/assets/backgrounds/poster.webp",
        frameworks: [
            { id: 1, name: "GSAP" },
            { id: 2, name: "Next.js" },
            { id: 3, name: "React" },
            { id: 4, name: "Tailwindcss" },
        ],
    },
    {
        id: 9,
        name: "Fizzi",
        description:
            "Made with only the best natural ingredients, our soda is free from artificial sweeteners and flavors. It’s a crisp, clean taste that feels as good as it tastes, giving you a boost of real, natural refreshment.",
        href: "https://fizzibysamyak.vercel.app/",
        image: "/assets/projects/fizzi.webp",
        bgImage: "/assets/backgrounds/table.webp",
        frameworks: [
            { id: 1, name: "Three.js" },
            { id: 2, name: "GSAP" },
            { id: 3, name: "Next.js" },
            { id: 4, name: "Tailwindcss" },
        ],
    },
    ];

export const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/samyakpudke/" },
    { name: "GitHub", href: "https://github.com/samyyy2423" },
];
