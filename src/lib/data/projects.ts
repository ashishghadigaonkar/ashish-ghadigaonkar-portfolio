export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  techStack: string[];
  thumbnail: string;
  videoPreview?: string;
  caseStudy: {
    problem: string;
    idea: string;
    solution: string;
    architecture: string;
    features: string[];
    challenges: string;
    futureScope: string;
    liveDemoUrl?: string;
    githubUrl?: string;
    screenshots: string[];
  };
}

export const projects: Project[] = [
  {
    id: "p1",
    slug: "anomatrix",
    title: "Anomatrix",
    shortDescription: "Financial Anomaly Detection System processing 1M+ transactions.",
    category: "Featured Projects",
    techStack: ["Python", "Node.js", "PostgreSQL", "Machine Learning"],
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Detecting fraudulent or anomalous financial transactions in large datasets is highly manual and error-prone.",
      idea: "Build a scalable, real-time machine learning pipeline capable of processing massive transactional datasets.",
      solution: "Developed and deployed Anomatrix, which processes over 1M+ financial records with backend APIs and scalable data pipelines.",
      architecture: "Python-based ML models integrated with a Node.js API and PostgreSQL database for persistent storage and reporting.",
      features: [
        "Processed 1M+ financial transactions",
        "Real-time anomaly detection",
        "Automated reporting workflows",
        "Backend APIs and scalable pipelines",
        "Improved detection accuracy by 35%",
        "Reduced manual effort by 40%"
      ],
      challenges: "Handling real-time data ingestion and scaling the ML model to evaluate transactions within tight latency constraints.",
      futureScope: "Integrating adaptive learning to dynamically adjust to new fraud patterns.",
      screenshots: []
    }
  },
  {
    id: "p2",
    slug: "groceryshopone",
    title: "GroceryShopONE",
    shortDescription: "AI-Driven Grocery Management System with advanced analytics.",
    category: "Featured Projects",
    techStack: ["MERN Stack", "Python", "Analytics"],
    thumbnail: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Grocery stores struggle with inventory management, demand forecasting, and understanding customer lifetime value.",
      idea: "Create an all-in-one management platform equipped with AI-driven analytics for segmentation and forecasting.",
      solution: "Engineered a robust MERN stack application augmented with Python analytics for RFM segmentation and CLV computation.",
      architecture: "MERN stack handling the core platform with Python microservices running the predictive analytics and forecasting models.",
      features: [
        "JWT Authentication and Multi-role access",
        "RFM segmentation",
        "Demand forecasting",
        "CLV computation",
        "Analytics dashboards",
        "Automated workflows and Data-driven insights"
      ],
      challenges: "Synchronizing data between the operational MongoDB database and the analytical Python environment.",
      futureScope: "Implementing real-time supply chain adjustments based on localized demand trends.",
      screenshots: []
    }
  },
  {
    id: "p3",
    slug: "hvac-analytics",
    title: "HVAC Analytics & Chiller Optimization",
    shortDescription: "Industrial analytics platform for HVAC performance optimization.",
    category: "Featured Projects",
    techStack: ["Python", "Power BI", "Analytics"],
    thumbnail: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Industrial HVAC systems often run inefficiently, leading to excessive energy consumption and high operational costs.",
      idea: "Leverage data analytics and KPI dashboards to uncover operational inefficiencies and simulate ROI for improvements.",
      solution: "Developed an analytics platform that models operational performance and identifies energy optimization opportunities.",
      architecture: "Python for data preprocessing and analysis, connected to Power BI for interactive KPI dashboards and ROI simulations.",
      features: [
        "KPI dashboards",
        "ROI simulation models",
        "Energy optimization",
        "Industrial analytics",
        "Operational performance analysis"
      ],
      challenges: "Cleaning and structuring messy, high-frequency sensor data from industrial chiller units.",
      futureScope: "Integrating predictive maintenance alerts to prevent equipment failure.",
      screenshots: []
    }
  },
  {
    id: "p4",
    slug: "skillcollab",
    title: "SkillCollab",
    shortDescription: "A platform for developers and teams to collaborate effectively.",
    category: "Startup Products",
    techStack: ["MongoDB", "Express", "React", "Node.js"],
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Teams lack a unified platform that seamlessly combines project showcase with task management.",
      idea: "Build a comprehensive collaboration suite with secure access, kanban workflows, and project sharing.",
      solution: "Designed and implemented SkillCollab using the MERN stack to foster team collaboration.",
      architecture: "Standard MERN stack architecture with a robust authentication layer and real-time capable data structures.",
      features: [
        "Team collaboration",
        "Secure authentication",
        "Kanban workflow system",
        "Project showcase platform"
      ],
      challenges: "Creating an intuitive and responsive kanban board interface.",
      futureScope: "Adding real-time chat and video collaboration tools.",
      screenshots: []
    }
  },
  {
    id: "p5",
    slug: "smart-job-portal",
    title: "Smart Job Portal",
    shortDescription: "AI-powered job matching and screening engine.",
    category: "AI/ML Systems",
    techStack: ["AI", "MERN Stack"],
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Recruiters spend too much time manually screening resumes that don't match job requirements.",
      idea: "Implement an AI-based recommendation system to score and rank resumes against job descriptions.",
      solution: "Built a Smart Job Portal that improved screening efficiency by 60% using an AI matching engine.",
      architecture: "MERN stack frontend/backend integrated with an AI inference service for document analysis.",
      features: [
        "Resume-job matching engine",
        "AI-based recommendations",
        "Improved screening efficiency by 60%"
      ],
      challenges: "Extracting structured data accurately from various unstructured resume formats.",
      futureScope: "Adding automated interview scheduling based on candidate ranking.",
      screenshots: []
    }
  },
  {
    id: "p6",
    slug: "ai-interview-chatbot",
    title: "AI Interview Chatbot",
    shortDescription: "NLP chatbot achieving 90%+ intent accuracy.",
    category: "AI/ML Systems",
    techStack: ["NLP", "LLM"],
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Initial HR screening interviews are repetitive and difficult to scale.",
      idea: "Deploy an NLP-powered chatbot to conduct initial technical and behavioral screenings.",
      solution: "Engineered an AI interview assistant that parses candidate intent with 90%+ accuracy.",
      architecture: "LLM backend customized with NLP techniques to evaluate candidate responses dynamically.",
      features: [
        "AI interview assistant",
        "NLP chatbot",
        "High intent accuracy (90%+)"
      ],
      challenges: "Fine-tuning the LLM to ask relevant follow-up questions instead of following a rigid script.",
      futureScope: "Voice integration for real-time audio interviews.",
      screenshots: []
    }
  },
  {
    id: "p7",
    slug: "rock-vs-mine",
    title: "Rock vs Mine Classifier",
    shortDescription: "Machine learning prediction system for sonar signals.",
    category: "Experimental Builds",
    techStack: ["Python", "Machine Learning"],
    thumbnail: "https://images.unsplash.com/photo-1507682531662-421b17ac4f83?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Need reliable classification of sonar returns to differentiate between rocks and submerged mines.",
      idea: "Train a machine learning model on labeled sonar frequencies.",
      solution: "Developed a predictive classification model using Python and machine learning algorithms.",
      architecture: "Jupyter notebook-based exploratory analysis exported to a standalone prediction script.",
      features: [
        "Sonar signal classification",
        "Machine learning prediction system"
      ],
      challenges: "Preventing model overfitting on limited sonar dataset.",
      futureScope: "Deploying the model to edge devices for real-time inference.",
      screenshots: []
    }
  },
  {
    id: "p8",
    slug: "sales-performance-dashboard",
    title: "Sales Performance Dashboard",
    shortDescription: "SQL & Power BI analytics dashboard for revenue and profit tracking.",
    category: "Analytics Platforms",
    techStack: ["SQL", "Power BI"],
    thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Lack of visibility into sales performance metrics and revenue trends.",
      idea: "Create an interactive dashboard fed by a structured SQL database.",
      solution: "Built a comprehensive Power BI dashboard for real-time tracking of sales data.",
      architecture: "SQL data warehouse connected to Power BI for dynamic visualization.",
      features: [
        "Revenue analysis",
        "Profit tracking",
        "SQL analytics",
        "Dashboard visualization"
      ],
      challenges: "Writing complex DAX queries to calculate dynamic growth rates.",
      futureScope: "Integrating predictive forecasting models.",
      screenshots: []
    }
  },
  {
    id: "p9",
    slug: "customer-churn-analysis",
    title: "Customer Churn Analysis",
    shortDescription: "Predictive analytics to identify and reduce customer churn.",
    category: "Analytics Platforms",
    techStack: ["Python", "Analytics"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "High customer attrition rates with no clear understanding of the underlying causes.",
      idea: "Analyze customer interaction data to predict and prevent churn.",
      solution: "Developed a Python-based pattern analysis script that identifies high-risk customers.",
      architecture: "Python scripts utilizing Pandas and Scikit-learn for predictive modeling.",
      features: [
        "Churn prediction",
        "Customer retention insights",
        "Pattern analysis"
      ],
      challenges: "Dealing with imbalanced datasets where churned customers were a small minority.",
      futureScope: "Automating retention emails for high-risk cohorts.",
      screenshots: []
    }
  },
  {
    id: "p10",
    slug: "inventory-management-system",
    title: "Inventory Management System",
    shortDescription: "Reduced supply inefficiency by 25% via demand forecasting.",
    category: "Analytics Platforms",
    techStack: ["Analytics", "Forecasting"],
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    caseStudy: {
      problem: "Excess inventory holding costs and frequent stockouts.",
      idea: "Implement statistical forecasting to optimize supply chain operations.",
      solution: "Built an inventory optimization model that reduced inefficiency by 25%.",
      architecture: "Data-driven analytical models forecasting demand across various time horizons.",
      features: [
        "Demand forecasting",
        "Supply optimization",
        "Reduced inefficiency by 25%"
      ],
      challenges: "Accounting for seasonal trends and external supply chain disruptions.",
      futureScope: "Integrating directly with supplier APIs for automated reordering.",
      screenshots: []
    }
  }
];

export const getProjectsByCategory = () => {
  const grouped = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);
  
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    items
  }));
};

export const getProjectBySlug = (slug: string) => {
  return projects.find((p) => p.slug === slug);
};
