export type IndustryInfo = {
    title: string;
    slug: string;
    image: string;
    galleryImages: string[];
    description: string;
    longDescription: string;
    features: string[];
};

export const industriesData: IndustryInfo[] = [
    {
        title: "Automotive",
        slug: "automotive",
        image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Driving innovation in vehicle manufacturing, electric mobility, and automotive services.",
        longDescription: "The automotive industry is undergoing a massive transformation driven by connectivity, autonomous driving, and electrification. We help automotive leaders navigate this shift by providing digital solutions that enhance manufacturing efficiency, improve supply chain visibility, and deliver superior customer experiences. From connected car platforms to smart factory implementations, our expertise bridges the gap between traditional engineering and modern digital capabilities.",
        features: [
            "Connected Vehicle Solutions",
            "Smart Manufacturing & Industry 4.0",
            "Supply Chain Optimization",
            "Digital Dealership Experiences",
            "EV Charging Infrastructure Management",
        ],
    },
    {
        title: "Farm Equipment",
        slug: "farm-equipment",
        image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://plus.unsplash.com/premium_photo-1661963820931-b9eef1b417b3?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1696441567861-6761b9e503a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1687066564004-ff0bd74090fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhcm0lMjBlcXVpcG1lbnR8ZW58MHx8MHx8fDA%3D",
        ],
        description: "Modernizing agriculture with advanced machinery and smart farming solutions.",
        longDescription: "Agriculture is embracing technology to meet the growing global food demand sustainably. Our solutions for the farm equipment sector focus on precision agriculture, equipment telemetry, and data-driven farming. We enable manufacturers to offer smart machinery that provides real-time insights to farmers, maximizing yield and minimizing resource wastage.",
        features: [
            "Precision Agriculture Platforms",
            "Equipment Telemetry & Predictive Maintenance",
            "Farm Management Software",
            "IoT in Agriculture",
            "Supply Chain Traceability",
        ],
    },
    {
        title: "Financial Services",
        slug: "financial-services",
        image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Transforming banking, fintech, and investment platforms for the digital age.",
        longDescription: "In a world of digital-first banking and decentralized finance, trust and speed are paramount. We partner with financial institutions to build secure, scalable, and user-centric digital platforms. Whether it's modernizing legacy core banking systems, developing seamless mobile payment apps, or implementing AI-driven risk assessment tools, we ensure our clients stay ahead of the curve.",
        features: [
            "Digital Banking & Payments",
            "Fintech App Development",
            "Blockchain & Distributed Ledger Technology",
            "Risk Management & Compliance",
            "Customer Data Analytics",
        ],
    },
    {
        title: "Technology Services",
        slug: "technology-services",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Providing cutting‑edge IT consulting, cloud, and software development solutions.",
        longDescription: "The technology landscape is ever-evolving, and businesses must adapt to survive. We offer comprehensive technology services ranging from cloud migration and cybersecurity to custom software development and IT consulting. Our goal is to empower organizations with the right tools and infrastructure to foster innovation and achieve operational excellence.",
        features: [
            "Cloud Migration & Management",
            "Cybersecurity Solutions",
            "Custom Software Development",
            "IT Consulting & Strategy",
            "AI & Machine Learning Integration",
        ],
    },
    {
        title: "Hospitality",
        slug: "hospitality",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Elevating guest experiences in hotels, restaurants, and travel services.",
        longDescription: "The hospitality industry thrives on exceptional guest experiences. We help hotels, resorts, and travel companies leverage digital technology to personalize services, streamline booking processes, and optimize operations. From innovative loyalty programs to smart room controls, we create digital touchpoints that delight guests and build lasting relationships.",
        features: [
            "Booking & Reservation Systems",
            "Guest Experience Platforms",
            "Loyalty Program Management",
            "Smart Hotel Solutions",
            "Revenue Management Systems",
        ],
    },
    {
        title: "Logistics",
        slug: "logistics",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Optimizing supply chain, freight, and last‑mile delivery operations.",
        longDescription: "Efficiency and visibility are the cornerstones of modern logistics. Our solutions tackle complex supply chain challenges by providing real-time tracking, route optimization, and automated inventory management. We help logistics companies reduce costs, improve delivery times, and enhance overall network resilience.",
        features: [
            "Supply Chain Visibility",
            "Fleet Management & Telematics",
            "Warehouse Management Systems (WMS)",
            "Last-Mile Delivery Optimization",
            "Freight Forwarding Solutions",
        ],
    },
    {
        title: "Real Estate",
        slug: "real-estate",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Innovative property development, management, and proptech solutions.",
        longDescription: "Proptech is revolutionizing how we buy, sell, and manage property. We develop platforms that simplify property transactions, enhance facility management, and provide virtual tours. Our solutions cater to real estate developers, property managers, and agencies, helping them showcase properties effectively and streamline administrative tasks.",
        features: [
            "Property Management Software",
            "Virtual Tours & AR/VR",
            "Real Estate Marketplaces",
            "Smart Building Management",
            "Tenant Engagement Apps",
        ],
    },
    {
        title: "Renewable Energy",
        slug: "renewable-energy",
        image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Sustainable power generation through solar, wind, and green technologies.",
        longDescription: "The transition to renewable energy is critical for a sustainable future. We support energy companies with digital tools for asset management, grid optimization, and energy trading. Our solutions help maximize the efficiency of solar, wind, and hydro assets while facilitating the integration of distributed energy resources.",
        features: [
            "Energy Management Systems",
            "Grid Modernization",
            "Asset Performance Management",
            "Renewable Energy Trading Platforms",
            "Sustainability Reporting",
        ],
    },
    {
        title: "Other Emerging Businesses",
        slug: "other-emerging-businesses",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
        galleryImages: [
            "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80",
        ],
        description: "Supporting innovative startups and niche market ventures.",
        longDescription: "Innovation knows no boundaries. We work with emerging businesses and startups across various niche sectors to bring disruptive ideas to life. From MVP development to scaling strategies, we provide the agile technical partnership needed to navigate the challenges of early-stage growth and market entry.",
        features: [
            "MVP Development",
            "Agile Product Management",
            "Growth Hacking Strategies",
            "Digital Transformation for SMBs",
            "Niche Market Solutions",
        ],
    },
];
