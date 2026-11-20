const projects: Project[] = [
  {
    title:
      "InsightFlow-Your Intelligent Data Analysis Agent. From Files to Insights, Instantly",
    description:
      "An agentic AI tool that helps you obtain insights and information from the files you upload. Simply upload your CSV, Excel, or PDF files, and get instant insights or answers to your questions. Built with Deno runtime and powered by Anthropic's Claude AI through the Zypher Agent framework. Processes PDFs using pdf-parse library and CSV and Excel files with Papa Parse. JavaScript/HTML5/CSS3 is used for the frontend. (github source code and video demo link below)",
    githubhref:
      "https://github.com/rux0422/InsightFlow-Intelligent-Data-Analysis-Agent",
    vidhref:
      "https://drive.google.com/file/d/1PiBnqeybZKg1kKqh_YzmHRbBYJ2XMKZF/view",
  },
  {
    title: "SparkleScript AI",
    description:
      "An AI-powered content generator that automates blog writing, YouTube scripts, Instagram posts, and more. Next.js and Next.js API routes (Clerk for authentication) for API endpoints handles the front-end and backend with server-side rendering and static site generation. Drizzle ORM is employed to handle database operations. Gemini API 2.5 Flash was integrated to deliver advanced AI capabilities. (deployed website, demo video and github code below)",
    githubhref: "https://github.com/rux0422/SparkleScript-AI",
    vidhref:
      "https://drive.google.com/file/d/1X1oMWBpn-lsfBultCxO4MihbEi4bdYOZ/view?usp=sharing",
    href: "https://sparklescript-ai.vercel.app",
  },
  {
    title: "QueryBuddy",
    description:
      "A RAG (Retrieval-Augmented Generation) bot that answers questions based on your uploaded document in pdf format. Pinecone is used for storing and retrieving embeddings of the PDF chunks based on similarity to the query and Cohere is used for generating natural language answers by combining the retrieved context from Pinecone with the user's query. (github source code, video demo link and deployed website below)",
    githubhref: "https://github.com/rux0422/QueryBuddy-RAG-Bot",
    vidhref: "https://www.youtube.com/watch?v=TnIAl9ICmtk",
    href: "https://ruxquerybuddy.streamlit.app/",
  },
  {
    title: "3D Word Cloud Visualizer",
    description:
      "An interactive web application that visualizes article topics as a stunning 3D word cloud. Enter any article URL and watch as keywords, named entities, and statistics come to life in an immersive 3D space. (github source code and video demo link below)",
    githubhref: "https://github.com/rux0422/3D-Word-Cloud-Amrutha",
    vidhref:
      "https://drive.google.com/file/d/1D81BBw3MKkHFDnywkbbr9mOf0Rn6kj9t/view?usp=sharing",
  },
  {
    title: "EcoCoin: A Mobile App for Sustainable Actions (IEEE TENCON 24')",
    description:
      "A college student app (prototype) promoting sustainability using AWS services. The app rewards students for eco-friendly actions with redeemable coins. The app utilizes AWS cloud services for secure facial recognition from the photo they upload in the portal and the video of the sustainable activity they perform to ensure authenticity in rewarding eco-friendly activities (github code below).",
    githubhref: "https://github.com/rux0422/EcoCoin/tree/main/ecocoin/EcoCoin",
    paperHref: "https://ieeexplore.ieee.org/document/10902972",
  },
  {
    title: "Health Monitoring System (IEEE WCONF 24')",
    description:
      "Developed an ensemble ML algorithm to monitor vital parameters combining Explainable Boost Classifier, CatBoost and LightGBM, achieving 99.89% accuracy (github code with certificate and research paper can be viewed below).",
    githubhref:
      "https://github.com/rux0422/IEEE-WCONF-24-Presentation-Health-Monitoring-System",
    paperHref: "https://ieeexplore.ieee.org/document/10692251",
  },
  {
    title:
      "Onboarding and Authentication (statefarm.com) — Screen Designs (Figma)",
    description:
      "Four concept case studies: registration & onboarding, AI assistant & claims triage, dashboard, and coverage recommendations. Designed 23 mobile screens across 4 case studies in Figma, built on a reusable component library (variants, auto layout) grounded in statefarm.com's IA and brand. (Figma file and case study document below)",
    figmaHref:
      "https://www.figma.com/design/5ugk0W6wW69tKXiZ9rl4mw/Statefarm-UI-UX-Case-studies?node-id=1-2138",
    docHref:
      "https://drive.google.com/file/d/1Ji-fytONd6TNjmozQXJqcldzPLGnTaaG/view?usp=sharing",
  },
  {
    title: "UPI Payment App — Figma UI/UX Design Prototype",
    description:
      "Designed mobile UI screens and payment flows in Figma for a UPI payment application prototype. (Figma file below)",
    figmaHref:
      "https://www.figma.com/design/sTySzEg8nsa1Jd7GTfQOav/Untitled?node-id=0-1",
  },
  {
    title: "Airbnb Homepage Replica",
    description:
      "A replica of the Airbnb homepage with login and real-time chat functionality. Next.js and Tailwind CSS were used to develop the frontend (github code below).",
    githubhref: "https://github.com/rux0422/airbnb-clone-test/tree/main",
  },
  {
    title: "Scaleup App Prototype",
    description: "Built a frontend prototype of an educational app",
    githubhref: "https://github.com/rux0422/ScaleUp-App",
  },
];
