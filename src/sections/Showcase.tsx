import React from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { Github, ExternalLink, X } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  stack: string[];
  image: string | null;
  github: string | null;
  live: string | null;
  details: {
    overview: string;
    features: string[];
    technical: string[];
  };
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const projects: Project[] = [
  {
    id: 1,
    name: "WOVEN",
    description:
      "A full-stack bookmark and link management platform built with Next.js and PostgreSQL. Supports authenticated, user-specific collections, favorites, search, smart link previews, and file attachments.",
    stack: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "Zod",
      "Cheerio",
      "Cloudinary",
    ],
    image: "/images/woven.png",
    github: "https://github.com/vvvasavii/woven",
    live: "https://woven-mu-nine.vercel.app/",
    details: {
      overview:
        "Woven was built to solve a simple but common problem: the web is full of useful articles, documentation, research papers, tutorials, and other resources, but saving and organizing them becomes difficult over time. Browser bookmarks quickly turn into a long, unstructured list, while important resources often need to be grouped by subject, project, or purpose. Woven provides a centralized way to save, organize, search, revisit, and manage those resources in structured collections, while also allowing users to attach related files such as PDFs and images directly to their bookmarks.",
      features: [
        "User authentication with Clerk and protected routes so each user's bookmarks, collections, favorites, and attachments remain private.",
        "Bookmark management with full CRUD operations, favorites, search, and user-specific collections for organizing saved resources by topic, project, or purpose.",
        "Smart link previews using Cheerio to extract Open Graph metadata from saved URLs, making bookmarks easier to identify and revisit.",
        "File attachments for resources such as PDFs and images, with Cloudinary handling file storage and PostgreSQL storing the associated metadata and relationships.",
        "Relational collections that allow bookmarks to be organized into meaningful groups instead of relying on one large, unstructured bookmark list.",
        "Search functionality for quickly finding saved bookmarks and navigating organized collections.",
      ],
      technical: [
        "Next.js and TypeScript for the full-stack application and application architecture.",
        "React and Tailwind CSS for building the responsive user interface and reusable UI components.",
        "Clerk for authentication, user identity, and protected application routes.",
        "Node.js and Next.js API routes for backend functionality and REST API design.",
        "PostgreSQL for persistent relational data storage.",
        "Prisma ORM for database access and relational data modeling across users, bookmarks, collections, and attachments.",
        "Zod for request schema validation and safer API input handling.",
        "Cheerio for server-side HTML parsing and Open Graph metadata extraction for smart link previews.",
        "Cloudinary for storing uploaded PDF and image attachments while PostgreSQL stores their metadata and relationships.",
        "20+ REST API endpoints covering bookmarks, favorites, link previews, and file attachments.",
        "Relationship-aware deletion and database cascading to keep related records consistent when resources are removed.",
      ],
    },
  },
  {
    id: 2,
    name: "BLOOMIN",
    description:
      "A full-stack storefront platform built to help small shopkeepers establish and manage an online presence without requiring technical expertise, large upfront costs, or outside web-development support. Provides a shopkeeper-focused interface for product management, customer orders, storefront access, and bilingual usage.",
    stack: ["Next.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL"],
    image: "/images/bloomin.png",
    github: "https://github.com/mystic0l/bloomin-fe",
    live: "https://bloomin-virid.vercel.app/",
    details: {
      overview:
        "BloomIn was built to address a common barrier faced by small shopkeepers: establishing an online presence can be difficult when they lack the technical expertise to build a storefront themselves, cannot afford to hire a developer, do not know where to find reliable technical help, or may not yet understand the value of having a digital presence for their business. BloomIn aims to make that transition simpler by giving small businesses an accessible digital storefront and management platform designed around the shopkeeper's needs rather than only the customer's shopping experience.",
      features: [
        "Shopkeeper-focused product management with a deliberately simple interface designed to make adding and managing products easier for users with limited technical experience.",
        "Customer-facing storefront where products can be browsed and accessed through a dedicated digital shop.",
        "Cart and checkout workflows for customers to place orders through the online storefront.",
        "Seller-side order management and tracking workflows to help shopkeepers manage incoming orders.",
        "QR-based storefront access, allowing customers to reach a shop's digital storefront more easily.",
        "Bilingual English and Hindi support to make the platform more accessible to a wider range of small shopkeepers and customers.",
        "A low-complexity workflow designed to provide small businesses with useful digital capabilities while minimizing the technical effort required from the shopkeeper.",
      ],
      technical: [
        "Built the frontend with Next.js and TypeScript.",
        "Implemented backend functionality using Node.js and Express.js.",
        "Used PostgreSQL for persistent relational application data.",
        "Developed both customer-facing and shopkeeper-facing workflows as a full-stack application.",
        "Designed the product management experience with simplicity and ease of use as a primary consideration for non-technical shopkeepers.",
        "Implemented storefront, cart, checkout, order, and seller-management workflows across the application.",
      ],
    },
  },
  {
    id: 3,
    name: "PAWSITIVE PURSUIT",
    description:
      "A narrative-driven browser game built as a passion project to explore branching gameplay, state-dependent outcomes, and interactive decision-making. Features custom illustrations, animated UI interactions, and 6 possible endings shaped by player choices and in-game events.",
    stack: ["JavaScript", "HTML", "CSS"],
    image: "/images/cat-game.png",
    github: "https://github.com/vvvasavii/mini-game",
    live: "https://pawy.vercel.app/",
    details: {
      overview:
        "Pawsitive Pursuit is a passion project created while exploring how branching flows can be translated into an interactive browser experience. The game follows a choice-driven structure where player decisions, attempt count, and in-game events influence how the experience unfolds and which of 6 possible endings is reached. Built around a playful cat-themed concept, the project focuses on experimentation with interactive storytelling, game logic, and state-dependent outcomes.",
      features: [
        "Branching gameplay with 6 possible endings based on player decisions and in-game state.",
        "Choice-driven flow where player actions influence subsequent events and outcomes.",
        "State-dependent gameplay that tracks attempt count and in-game events to determine outcomes.",
        "Custom illustrations designed specifically for the game's visual experience.",
        "Animated UI interactions that make transitions and player actions feel more responsive.",
        "Responsive browser experience designed to work across different screen sizes.",
      ],
      technical: [
        "Implemented the game's branching logic and state-dependent outcomes using JavaScript.",
        "Structured gameplay around player choices, tracked attempts, and in-game events.",
        "Designed multiple gameplay paths that converge into 6 distinct endings.",
        "Built the interface using semantic HTML and CSS.",
        "Implemented responsive layouts and animated UI interactions to enhance the gameplay experience.",
        "Integrated custom illustrations into the game to support the overall visual and interactive experience.",
      ],
    },
  },
];

const Showcase: React.FC = () => {
  const [activeProject, setActiveProject] = React.useState(0);
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null,
  );

  const project = projects[activeProject];

  React.useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const rightColRef = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: rightColRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      projects.length - 1,
      Math.max(0, Math.floor(latest * projects.length)),
    );

    setActiveProject((prev) => (prev === index ? prev : index));
  });

  return (
    <section
      id="works"
      className="max-w-6xl mx-auto px-0 lg:px-6 py-12 sm:py-16 lg:py-0 min-w-0"
      style={{ overflowX: "clip", overflowY: "visible" }}
    >
      {/* DESKTOP */}
      <div className="hidden lg:flex" style={{ alignItems: "flex-start" }}>
        {/* LEFT - Sticky Info Panel */}
        <div
          className="w-[45%] relative flex flex-col"
          style={{
            position: "sticky",
            top: 0,
            height: "100svh",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: EASE,
                },
              },
            }}
            className="absolute top-0 left-0 right-0 pt-16 pb-4 border-b border-white/10 z-10"
          >
            <div className="flex items-center justify-between pr-8">
              <h2 className="text-xl md:text-2xl font-bold tracking-[0.3em] text-[#aaa] uppercase font-poppins">
               PROJECTS
              </h2>

              <span className="text-xs text-white/30 tracking-widest uppercase font-mono">
                / PORTFOLIO
              </span>
            </div>
          </motion.div>

          <div className="flex-1 flex flex-col justify-center pr-12">
            <div className="flex flex-col">
              {/* Ticker Counter */}
              <div className="flex items-center text-sm tracking-[0.3em] text-white/40 font-mono mb-3">
                <span>[</span>

                <div
                  className="overflow-hidden flex items-center justify-center px-3"
                  style={{ height: "1.4em" }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial={{ y: 24 }}
                      animate={{
                        y: 0,
                        transition: {
                          duration: 0.3,
                          ease: EASE,
                        },
                      }}
                      exit={{
                        y: -24,
                        transition: {
                          duration: 0.15,
                          ease: "easeIn",
                        },
                      }}
                      className="whitespace-nowrap"
                    >
                      0{activeProject + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <span>/</span>
                <span className="px-3">03</span>
                <span>]</span>
              </div>

              {/* Title */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.2,
                      ease: "easeIn",
                    },
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="group mb-4 inline-flex items-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-left text-2xl xl:text-3xl font-bold text-white tracking-tight uppercase leading-tight break-words shadow-[0_6px_0px_rgba(100,150,170,0.55),0_10px_24px_rgba(80,130,150,0.3)] transition-all duration-200 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_0px_rgba(100,150,170,0.65),0_14px_30px_rgba(80,130,150,0.4)] active:translate-y-1 active:shadow-[0_2px_0px_rgba(100,150,170,0.55),0_5px_12px_rgba(80,130,150,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                    aria-label={`View details for ${project.name}`}
                  >
                    {project.name}
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* Description */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${activeProject}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      duration: 0.6,
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.25,
                      ease: "easeIn",
                    },
                  }}
                >
                  <p className="mb-6 text-sm text-white/60 leading-relaxed max-w-[90%]">
                    {project.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Stack Tags */}
              <div className="pt-2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`tags-${activeProject}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.4,
                        ease: EASE,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -6,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                    className="flex flex-wrap gap-2"
                  >
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1 uppercase rounded-full font-medium hover:-translate-y-0.5 hover:shadow-md hover:shadow-white/5 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT - Image Column */}
        <div className="w-[55%]" ref={rightColRef}>
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-end px-8"
              style={{ minHeight: "100svh" }}
            >
              <div className="relative w-full max-w-full">
                <div className="absolute -inset-3 border border-moonstone/20 rounded-2xl" />

                <div className="relative z-10 w-full rounded-xl overflow-hidden shadow-2xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5 flex items-center justify-center">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto block"
                    />
                  ) : (
                    <div className="w-full h-64 bg-neutral-900/50 flex items-center justify-center">
                      <span className="text-white/5 text-[10px] tracking-widest uppercase">
                        No Preview Available
                      </span>
                    </div>
                  )}

                  {/* Desktop Hover Overlay */}
                  <div className="absolute inset-0 z-30 flex items-center justify-center gap-3 bg-black/40 opacity-0 hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                    {item.github !== null && (
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300"
                      >
                        <Github size={18} className="text-white" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                          GitHub
                        </span>
                      </a>
                    )}

                    {item.live !== null && (
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md transform translate-y-2 hover:translate-y-0 transition-transform duration-300"
                      >
                        <ExternalLink size={18} className="text-white" />
                        <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
                          Live
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex lg:hidden flex-col items-center w-full min-w-0 text-center">
        {/* Heading */}
        <div className="w-full pb-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-3 min-w-0">
            <h2 className="text-lg sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase font-poppins truncate">
              PET PROJECTS
            </h2>

            <span className="text-[10px] sm:text-xs text-white/30 tracking-widest uppercase font-mono flex-shrink-0">
              / PORTFOLIO
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center gap-12 sm:gap-16 pt-10 sm:pt-12 w-full">
          {projects.map((item, index) => (
            <article
              key={item.id}
              className="flex flex-col items-center gap-5 sm:gap-6 min-w-0 w-full max-w-lg mx-auto"
            >
              <div className="flex flex-col items-center gap-3 sm:gap-4">
                <div className="text-xs tracking-[0.2em] sm:tracking-[0.3em] text-white/40 font-mono">
                  [ 0{index + 1} / {String(projects.length).padStart(2, "0")} ]
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(item)}
                  className="group inline-flex items-center rounded-lg border border-white/25 bg-white/10 px-5 py-3 text-left text-xl sm:text-2xl font-bold text-white tracking-tight uppercase leading-snug break-words shadow-[0_6px_0px_rgba(100,150,170,0.55),0_10px_24px_rgba(80,130,150,0.3)] transition-all duration-200 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_8px_0px_rgba(100,150,170,0.65),0_14px_30px_rgba(80,130,150,0.4)] active:translate-y-1 active:scale-[0.98] active:shadow-[0_2px_0px_rgba(100,150,170,0.55),0_5px_12px_rgba(80,130,150,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  {item.name}
                </button>
              </div>

              {item.image !== null && (
                <div className="relative w-full min-w-0 max-w-full mx-auto">
                  <div className="absolute -inset-1.5 sm:-inset-2 border border-moonstone/10 rounded-xl pointer-events-none" />

                  <div className="relative z-10 w-full rounded-lg overflow-hidden shadow-xl bg-zinc-900/20 backdrop-blur-3xl border border-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-auto max-w-full block object-contain"
                    />
                  </div>
                </div>
              )}

              <p className="text-sm sm:text-base text-white/60 leading-relaxed break-words">
                {item.description}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] tracking-widest text-white/50 border border-white/20 px-3 py-1.5 uppercase rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(item.github !== null || item.live !== null) && (
                <div className="flex flex-wrap justify-center gap-3 pt-1">
                  {item.github !== null && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                    >
                      <Github size={18} aria-hidden="true" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        GitHub
                      </span>
                    </a>
                  )}

                  {item.live !== null && (
                    <a
                      href={item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-11 px-5 rounded-full bg-white/10 border border-white/20 text-white/80 hover:text-white hover:bg-white/15 transition-colors duration-300"
                    >
                      <ExternalLink size={18} aria-hidden="true" />
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                        Live
                      </span>
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>

      {/* PROJECT DETAILS MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/75 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProject.name} project details`}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[92svh] overflow-hidden rounded-2xl border border-white/10 bg-[#080d13] shadow-2xl"
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.35,
                ease: EASE,
              }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/40 text-white/60 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Close project details"
              >
                <X size={18} />
              </button>

              <div className="max-h-[92svh] overflow-y-auto">
                <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                  {/* Project Visual */}

                  <div
                    className="
    relative overflow-hidden
    border-b border-white/10
    lg:border-b-0 lg:border-r
    lg:sticky lg:top-0
    h-[420px] lg:h-[92svh]
  "
                  >
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden bg-[#080d13]">
                      {/* Moving grid */}
                      <motion.div
                        className="absolute inset-[-100%] opacity-[0.35]"
                        style={{
                          backgroundImage: `
          linear-gradient(
            rgba(120, 210, 220, 0.35) 2px,
            transparent 2px
          ),
          linear-gradient(
            90deg,
            rgba(120, 210, 220, 0.35) 2px,
            transparent 2px
          )
        `,
                          backgroundSize: "80px 80px",
                        }}
                        animate={{
                          x: [0, 80],
                          y: [0, 80],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Diagonal layer */}
                      <motion.div
                        className="absolute inset-[-100%] opacity-[0.3]"
                        style={{
                          backgroundImage: `
          repeating-linear-gradient(
            45deg,
            transparent 0px,
            transparent 35px,
            rgba(255,255,255,0.35) 36px,
            transparent 38px
          )
        `,
                          backgroundSize: "80px 80px",
                        }}
                        animate={{
                          x: [0, 160],
                          y: [0, -160],
                        }}
                        transition={{
                          duration: 7,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Opposite diagonal layer */}
                      <motion.div
                        className="absolute inset-[-100%] opacity-[0.25]"
                        style={{
                          backgroundImage: `
          repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 45px,
            rgba(100, 220, 230, 0.4) 46px,
            transparent 48px
          )
        `,
                          backgroundSize: "100px 100px",
                        }}
                        animate={{
                          x: [0, -180],
                          y: [0, -180],
                        }}
                        transition={{
                          duration: 9,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      {/* Moving glow */}
                      <motion.div
                        className="absolute h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[80px]"
                        animate={{
                          x: ["-40%", "100%", "-40%"],
                          y: ["-20%", "60%", "-20%"],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Second moving glow */}
                      <motion.div
                        className="absolute h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[90px]"
                        animate={{
                          x: ["100%", "-30%", "100%"],
                          y: ["70%", "-20%", "70%"],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />

                      {/* Center glow */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_15%,#080d13_80%)]" />
                    </div>

                    {/* Project label */}
                    <div className="absolute bottom-6 left-6 z-10">
                      <p className="text-[10px] font-mono tracking-[0.3em] text-white/35 uppercase">
                        PROJECT {String(selectedProject.id).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="p-6 sm:p-8 lg:p-10">
                    <div className="mb-8">
                      <p className="mb-3 text-[10px] font-mono tracking-[0.3em] text-white/30 uppercase">
                        PROJECT {String(selectedProject.id).padStart(2, "0")}
                      </p>

                      <h2 className="pr-12 text-3xl sm:text-4xl font-bold tracking-tight text-white uppercase">
                        {selectedProject.name}
                      </h2>

                      <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/60">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-8">
                      <h3 className="mb-3 text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">
                        Tech Stack
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/15 px-3 py-1.5 text-[10px] font-medium tracking-widest text-white/55 uppercase"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                      {/* Overview */}
                      <section>
                        <h3 className="mb-3 text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">
                          Overview
                        </h3>

                        <p className="text-sm leading-7 text-white/65">
                          {selectedProject.details.overview}
                        </p>
                      </section>

                      {/* Features */}
                      <section>
                        <h3 className="mb-3 text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">
                          Key Features
                        </h3>

                        <ul className="space-y-3">
                          {selectedProject.details.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-3 text-sm leading-6 text-white/65"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/45" />

                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      {/* Technical Implementation */}
                      <section>
                        <h3 className="mb-3 text-[10px] font-bold tracking-[0.25em] text-white/35 uppercase">
                          Technical Implementation
                        </h3>

                        <ul className="space-y-3">
                          {selectedProject.details.technical.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-white/65"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/45" />

                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    {/* Links */}
                    {(selectedProject.github || selectedProject.live) && (
                      <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
                        {selectedProject.github && (
                          <a
                            href={selectedProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white/75 uppercase transition-all duration-300 hover:bg-white/10 hover:text-white"
                          >
                            <Github size={16} aria-hidden="true" />
                            GitHub
                          </a>
                        )}

                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[10px] font-bold tracking-[0.2em] text-white/75 uppercase transition-all duration-300 hover:bg-white/10 hover:text-white"
                          >
                            <ExternalLink size={16} aria-hidden="true" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Showcase;
