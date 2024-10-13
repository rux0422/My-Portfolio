import Container from "@/components/Container";
import { useEffect, useRef, Suspense, useState } from "react";
import styles from "@/styles/Home.module.css";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  Github,
  Linkedin,
  Download,
  Phone,
  Mail
} from "lucide-react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import Spline from "@splinetool/react-spline";
import Link from "next/link";
import { cn, scrollTo } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

// Updated projects
const projects = [
  {
    title: "EcoCoin - An Incentivized Method to Go Green",
    description:
      "A college student app promoting sustainability using AWS services. The app rewards students for eco-friendly actions with redeemable coins. The app utilizes AWS cloud services for secure facial recognition from the photo they upload in the portal and the video of the sustainable activity they perform to ensure authenticity in rewarding eco-friendly activities (github code below).",
    href: "https://github.com/rux0422/EcoCoin/tree/main/ecocoin/EcoCoin",
  },
  {
    title: "SparkleScript AI",
    description:
      "An AI-powered content generator that automates blog writing, YouTube scripts, Instagram posts, and more.  Next.js handles the front-end with server-side rendering and static site generation. Prisma ORM and Supabase are employed for backend and database operations. Gemini API 1.5 Flash was integrated to deliver advanced AI capabilities (deployed website and github code below).",
    href: "https://sparklescript-ai.vercel.app",
    githubHref: "https://github.com/rux0422/SparkleScript-AI"
  },
  {
    title: "Airbnb Homepage Replica",
    description: "A replica of the Airbnb homepage with login and real-time chat functionality. Next.js and Tailwind CSS were used to develop the frontend (github code below).",
    href: "https://github.com/rux0422/airbnb-clone-test/tree/main",
  },
  {
    title: "Health Monitoring System",
    description:
      "Developed an ensemble ML algorithm to monitor vital parameters combining Explainable Boost Classifier, CatBoost and LightGBM, achieving 99.89% accuracy (github code with certificate and research paper can be viewed below).",
    href: "https://github.com/rux0422/IEEE-WCONF-24-Presentation-Health-Monitoring-System",
    paperHref: "https://ieeexplore.ieee.org/document/10692251"
  },
  {
  title: "Figma UI/UX Screen Design Prototype for a UPI Payment App",
  description: "Designed a Figma prototype for a UPI payment mobile app",
 
  href: "https://www.figma.com/design/sTySzEg8nsa1Jd7GTfQOav/Untitled?node-id=0-1&node-type=canvas",
  },
];

// New skills data
const skills = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "Express.js", "MongoDB", "PostgreSQL", "AWS", "Docker",
  "Git", "CI/CD", "Agile Methodologies", "RESTful APIs",
   "TailwindCSS", "Python", "Java", "C++"
];

// Updated experience data with GitHub certificate link
const experiences = [
  {
    company: "Publicis Sapient",
    role: "Associate Software Developer Intern",
    duration: "June 2023 - July 2023",
    description: "Built and deployed a performance dashboard for Marriott Bonvoy Homes and Villas. Automated URL extraction and reporting using Lighthouse, Puppeteer. Used AWS S3, DynamoDB for storage, React.js for frontend. Automated with Jenkins, deployed via Docker",
    certificateHref: "https://github.com/rux0422/Certifications/blob/main/Publicis%20Sapient%20Internship%20certificate.PNG"
  },
  {
    company: "Innodatatics",
    role: "Data Science Intern",
    duration: "October 2024 - Present",
    description: "Working on various projects utilizing cutting-edge technologies to deliver innovative solutions for clients.",
  },
];

// New achievements data
const achievements = [
  {
    title: "IEEE WCONF 24' Paper Presentation and Publication",
    description: "My paper titled 'Health Monitoring System based on LightGBM, CatBoost and Explainable Boost Classifier' was presented and published at the international IEEE conference, WCONF 24' The published paper can be viewed below.",
    href: "https://ieeexplore.ieee.org/document/10692251"
  },
  {
    title: "IEEE TENCON 24' Paper Acceptance",
    description: "My paper titled 'EcoCoin-An incentivised way to go Green using Amazon Rekognition' has been accepted for the IEEE international conference at Singapore, TENCON 24' (research paper can be viewed below).",
    href: "https://github.com/rux0422/EcoCoin/blob/main/ecocoin/EcoCoin/EcoCoin%20Research%20Paper.pdf.pdf"
  },
  {
    title: "Kaggle Notebook Expert",
    description: "Became a Kaggle Notebook expert by utilising Machine Learning algorithms for performing predictive analysis on datasets.",
    href: "https://www.kaggle.com/amruthasriram"
  },
  {
    title: "Summer Analytics Course - IIT Guwahati",
    description: "Completed the Summer Analytics Course offered by the Consulting and Analytics Club of IIT Guwahati.",
    href: "https://certificate.givemycertificate.com/c/8d13b576-9501-4a1a-b539-feda9298527b"
  }
];

export default function Home() {
  const refScrollContainer = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  // handle scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    async function getLocomotive() {
      const Locomotive = (await import("locomotive-scroll")).default;
      new Locomotive({
        el: refScrollContainer.current ?? new HTMLElement(),
        smooth: true,
      });
    }

    function handleScroll() {
      let current = "";
      setIsScrolled(window.scrollY > 0);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 250) {
          current = section.getAttribute("id") ?? "";
        }
      });

      navLinks.forEach((li) => {
        li.classList.remove("nav-active");

        if (li.getAttribute("href") === `#${current}`) {
          li.classList.add("nav-active");
        }
      });
    }

    void getLocomotive();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    setCount(carouselApi.scrollSnapList().length);
    setCurrent(carouselApi.selectedScrollSnap() + 1);

    carouselApi.on("select", () => {
      setCurrent(carouselApi.selectedScrollSnap() + 1);
    });
  }, [carouselApi]);

  // card hover effect
  useEffect(() => {
    const tilt: HTMLElement[] = Array.from(document.querySelectorAll("#tilt"));
    VanillaTilt.init(tilt, {
      speed: 300,
      glare: true,
      "max-glare": 0.1,
      gyroscope: true,
      perspective: 900,
      scale: 0.9,
    });
  }, []);

  return (
    <Container>
      <div ref={refScrollContainer}>
        <Gradient />

        {/* Navigation Bar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold">AS</div>
              <div className="space-x-4">
                <a href="#home" className="nav-link">Home</a>
                <a href="#projects" className="nav-link">Projects</a>
                <a href="#skills" className="nav-link">Skills</a>
                <a href="#experience" className="nav-link">Experience</a>
                <a href="#achievements" className="nav-link">Achievements</a>
                <a href="#contact" className="nav-link">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Intro */}
        <section
          id="home"
          data-scroll-section
          className="mt-40 flex w-full flex-col items-center xl:mt-0 xl:min-h-screen xl:flex-row xl:justify-between"
        >
          <div className={styles.intro}>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed=".09"
              className="flex flex-row items-center space-x-1.5"
            >
              <Link href="https://github.com/rux0422?tab=repositories" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/amruthasriram/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div>
              <h1
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                data-scroll-direction="horizontal"
              >
                <span className="text-6xl tracking-tighter text-foreground 2xl:text-8xl">
                  Hello, I&apos;m
                  <br />
                </span>
                <span className="clash-grotesk text-gradient text-6xl 2xl:text-8xl">
                  Amruthavarshini Sriram.
                </span>
              </h1>
              <p
                data-scroll
                data-scroll-enable-touch-speed
                data-scroll-speed=".06"
                className="mt-1 max-w-lg tracking-tight text-muted-foreground 2xl:text-xl"
              >
             I am an enthusiastic and results-driven individual with a passion for leveraging cutting-edge technology such as AI, ML and Cloud to deliver meaningful and scalable solutions that drive business value. With a strong foundation in web development, I am constantly seeking opportunities to grow and apply my skills in real-world scenarios. My curiosity and eagerness to learn have pushed me to dive deep into various technologies, from frontend frameworks to backend architecture, and cloud services. My primary interests include AI (Generative AI), ML and Cloud and I&apos;m looking forward to upskill myself in such technologies. I usually develop a holistic approach to problem-solving—ensuring that I don&apos;t just focus on functionality, but also on scalability, performance, and user experience.
              </p>
            </div>
            <span
              data-scroll
              data-scroll-enable-touch-speed
              data-scroll-speed=".06"
              className="flex flex-row items-center space-x-1.5 pt-6"
            >
              <Button onClick={() => window.open('https://drive.google.com/file/d/12lKwui3cUfbF5EaRYbr4lrd4CF42lM5l/view?usp=sharing', '_blank')}>
                Download Resume <Download className="ml-1 h-4 w-4" />
              </Button>
            </span>

            <div
              className={cn(
                styles.scroll,
                isScrolled && styles["scroll--hidden"]
              )}
            >
              Scroll to discover{" "}
              <TriangleDownIcon className="mt-1 animate-bounce" />
            </div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-.01"
            id={styles["canvas-container"]}
            className="mt-14 h-full w-full xl:mt-0"
          >
            <Suspense fallback={<span>Loading...</span>}>
              <Spline scene="/assets/scene.splinecode" />
            </Suspense>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" data-scroll-section>
          <div className="my-20">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              ✨ Projects
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Innovative solutions for modern challenges.
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Here are some of the projects I&apos;ve worked on:
            </p>

            <div className="mt-14 space-y-8">
              {projects.map((project) => (
                <div key={project.title}>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-lg text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-2 space-x-2">
                    <Link href={project.href} target="_blank">
                      <Button>View Project</Button>
                    </Link>
                    {project.githubHref && (
                      <Link href={project.githubHref} target="_blank">
                        <Button variant="outline">GitHub</Button>
                      </Link>
                    )}
                    {project.paperHref && (
                      <Link href={project.paperHref} target="_blank">
                        <Button variant="outline">Read Paper</Button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Skills */}
        <section id="skills" data-scroll-section>
          <div className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🚀 Skills
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Technologies I've Mastered
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Here are some of the key technologies and skills I've acquired:
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" data-scroll-section>
          <div className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              💼 Experience
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              My Professional Journey
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Here's a glimpse into my professional experience:
            </p>

            <div className="mt-8 space-y-8">
              {experiences.map((exp) => (
                <div key={exp.company} className="rounded-lg bg-card p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold">{exp.company}</h3>
                  <p className="text-lg font-medium text-primary">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.duration}</p>
                  <p className="mt-2 text-base">{exp.description}</p>
                  {exp.certificateHref && (
                    <Link href={exp.certificateHref} target="_blank">
                      <Button className="mt-2">View Certificate</Button>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section id="achievements" data-scroll-section>
          <div className="my-64">
            <span className="text-gradient clash-grotesk text-sm font-semibold tracking-tighter">
              🏆 Achievements
            </span>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight tracking-tighter xl:text-6xl">
              Milestones and Recognitions
            </h2>
            <p className="mt-1.5 text-base tracking-tight text-muted-foreground xl:text-lg">
              Here are some of my notable achievements:
            </p>

            <div className="mt-8 space-y-8">
              {achievements.map((achievement) => (
                <div key={achievement.title} className="rounded-lg bg-card p-6 shadow-sm">
                  <h3 className="text-2xl font-semibold">{achievement.title}</h3>
                  <p className="mt-2 text-base">{achievement.description}</p>
                  <Link href={achievement.href} target="_blank">
                    <Button className="mt-2">Learn More</Button>
                  </Link>
                </div>
              ))}
            </div>

           {/* Updated Certifications Link */}
           <div className="mt-40">
              <Link href="https://github.com/rux0422/Certifications" target="_blank">
                <Button variant="default" className="w-full py-6 text-lg font-semibold">
                  View All Certifications
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Updated Contact Me Section */}
        <section id="contact" data-scroll-section className="my-64">
          <div
            data-scroll
            data-scroll-speed=".4"
            data-scroll-position="top"
            className="flex flex-col items-center justify-center rounded-lg bg-gradient-to-br from-primary/[6.5%] to-white/5 px-8 py-16 text-center xl:py-24"
          >
            <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
            <div className="flex flex-col items-center space-y-4">
              <Link href="tel:+91-7305249607" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+91-7305249607</span>
              </Link>
              <Link href="mailto:ruxstudent@gmail.com" className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>ruxstudent@gmail.com</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
function Gradient() {
  return (
    <>
      <div className="absolute -top-40 right-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7980fe" />
              <stop offset={1} stopColor="#f0fff7" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".1"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9A70FF" />
              <stop offset={1} stopColor="#838aff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}
