import { meta, shopify, nm   } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    python,
    pytorch,
    Rprog,
    tensorflow,
    scikitlearn,
    opencv,
    docker,
    gymnasium,
    linux,
    matlab1,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    sql,
    psql,
    cpp,
    kdc, 
    utp
   
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Machine Learning",
    },
    {
        imageUrl: pytorch,
        name: "Pytorch",
        type: "Machine Learning",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "Machine Learning",
    },
    {
        imageUrl: scikitlearn,
        name: "scikit-learn",
        type: "Machine Learning",
    },

    {
        imageUrl: psql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: opencv,
        name: "opencv",
        type: "MAchine Learning",
    },
    {
        imageUrl: gymnasium,
        name: "gymnasium",
        type: "Reinforcement Learning",
    },
    {
        imageUrl: matlab1,
        name: "Matlab",
        type: "Machine Learning",
    },
    
    
    {
        imageUrl: Rprog,
        name: "r",
        type: "Machine Learning",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",
    },
   
    {
        imageUrl: cpp,
        name: "c++",
        type: "Programming Language",
    },
    {
        imageUrl: docker,
        name: "docker",
        type: "Programming Language",
    }
];

export const experiences = [
    {
        title: "Graduate Research Assistant",
        company_name: "Universiti Teknologi Petronas",
        icon: utp,
        iconBg: "white",
        date: "Feb. 2023 – April 2025",
        points: [
            "Developed and taught technical curricula for 200+ students in Object-Oriented Programming, Algorithms, AI, and Statistics using Python, MATLAB, and Linux environments.",
            "Authored technical research articles and presentations using LaTeX, reproducible Python data workflows, and live coding demonstrations.",
            "Research Interests- Machine Learning, Deep Learning, Reinforcement Learning.",
        ],
    },
    {
        title: "Freelance Research Aide as Media Developer & Data Analyst",
        company_name: "Kothiwal Dental College & Research Centre, India",
        icon: kdc,
        iconBg: "#486f4d",
        date: "Nov. 2021 – Aug. 2022",
        points: [
            "Worked as part of research project in India which entailed photography and editing of dental images for selected research subjects.",
            "Did data analysis for the first part of same research study and also created data visualizations.",
            "Tools used – Python, Krita, Photoshop, Jupyter notebook.",
      
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "Nexus Mediaworks Sdn Bhd, Puchong, Malaysia",
        icon: nm,
        iconBg: "#da9197",
        date: "June 2020 – Dec. 2020",
        points: [
   
            "Developed and maintained 50+ websites using HTML, CSS, JavaScript, PHP, jQuery, MySQL, and managed deployments via cPanel and Cloudflare.",
            "Debugged and resolved front‑end, back‑end issues using cPanel logs and Cloudflare diagnostics.",
            "Learned how to employ basic SEO to websites.",
            

        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];