import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  type: string;
  credential?: string;
  certificateHref?: string;
  verifyHref?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "Free Full Stack Developer Course",
    issuer: "Simplilearn SkillUp",
    date: "21 September 2026",
    type: "Course Completion",
    credential: "Certificate Code: 10763932",
    certificateHref: "/certificates/simplilearn-full-stack-developer.pdf",
  },
  {
    id: 2,
    title: "Java Course - Mastering the Fundamentals",
    issuer: "Scaler Topics",
    date: "25 September 2026",
    type: "Course Completion",
    certificateHref: "/certificates/scalar-java.png",
  },
  {
    id: 3,
    title: "Java (Basic)",
    issuer: "HackerRank",
    date: "6 March 2026",
    type: "Skill Certification",
    credential: "ID: 35406368A631",
    certificateHref: "/certificates/hackerrank-java-basic.pdf",
  },
  {
    id: 4,
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    date: "16 July 2025",
    type: "Digital Credential",
    certificateHref: "/certificates/ibm-getting-started-ai.pdf",
    verifyHref:
      "https://www.credly.com/badges/3cfcc91f-694a-4d71-8955-2da588624f26",
  },
  {
    id: 5,
    title: "Full Stack Development using MERN Stack",
    issuer: "Academy of Skill Development",
    date: "23 June - 4 August 2025",
    type: "Industrial Internship",
    credential: "Certificate ID: ASD/FUL/SHR/NEO/84045",
    certificateHref: "/certificates/asd-full-stack-mern.pdf",
  },
  {
    id: 6,
    title: "Object Detection using OpenCV",
    issuer: "Google Developer Student Clubs / DevTown",
    date: "2024",
    type: "7-Day Bootcamp",
    certificateHref: "/certificates/gdsc-object-detection-opencv.pdf",
    verifyHref: "https://cert.devtown.in/verify/Z2uHen1",
  },
  {
    id: 7,
    title: "JavaScript & React.js from A to Z",
    issuer: "AWS Community Builders / DevTown",
    date: "20 March 2024",
    type: "7-Day Free Bootcamp",
    certificateHref: "/certificates/aws-javascript-react.pdf",
    verifyHref: "https://cert.devtown.in/verify/Z4e0ML",
  },
];

const Certifications: React.FC = () => {
  return (
    <section
      id="certificates"
      className="relative max-w-6xl mx-auto px-0 lg:px-6 py-20 sm:py-24"
    >
      {/* Section heading */}
      <div className="mb-14 sm:mb-20">
        <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="mb-10 sm:mb-12 lg:mb-20 border-b border-white/10 pb-4"
              >
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-[#aaa] uppercase">
                  CERTIFICATIONS AND CREDENTIALS
                </h2>
              </motion.div>
      </div>

      {/* Credential archive */}
      <div className="relative">
        {/* Vertical archive line */}
        <div className="absolute left-[23px] top-0 bottom-0 hidden sm:block w-px bg-white/[0.08]" />

        <div className="divide-y divide-white/[0.09]">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
              }}
              className="group relative"
            >
              {/* Hover background */}
              <div className="absolute inset-0 -z-10 bg-white/[0.018] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Moving scan line */}
              <motion.div
                className="absolute left-0 top-0 h-px w-0 bg-moonstone shadow-[0_0_14px_rgba(100,220,220,0.5)] group-hover:w-full"
                transition={{ duration: 0.65, ease: "easeOut" }}
              />

              <div className="relative grid gap-6 py-7 sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center sm:py-9">
                {/* Index */}
                <div className="relative hidden sm:flex h-12 items-center justify-center">
                  <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#080d13] font-mono text-[10px] text-white/35 transition-all duration-500 group-hover:border-moonstone/50 group-hover:text-moonstone">
                    {String(cert.id).padStart(2, "0")}
                  </span>

                  {/* Glow */}
                  <span className="absolute h-9 w-9 rounded-full bg-moonstone/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                {/* Main content */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-[9px] tracking-[0.2em] text-moonstone uppercase">
                      {cert.type}
                    </span>

                    <span className="h-px w-5 bg-white/15" />

                    <span className="font-mono text-[9px] tracking-[0.15em] text-white/30 uppercase">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="mt-3 text-xl sm:text-2xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-moonstone">
                    {cert.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="text-white/55">{cert.issuer}</span>

                    {cert.credential && (
                      <>
                        <span className="hidden sm:block text-white/15">/</span>
                        <span className="font-mono text-[10px] text-white/30">
                          {cert.credential}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                  {cert.certificateHref && (
                    <a
                      href={cert.certificateHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-white/45 uppercase transition-colors duration-300 hover:text-moonstone"
                    >
                      <span className="relative">
                        View Certificate
                        <span className="absolute -bottom-1 left-0 h-px w-0 bg-moonstone transition-all duration-300 group-hover/link:w-full" />
                      </span>

                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>
                  )}

                  {cert.verifyHref && (
                    <a
                      href={cert.verifyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-moonstone/20 bg-moonstone/[0.06] px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-moonstone/80 uppercase transition-all duration-300 hover:border-moonstone/50 hover:bg-moonstone/10 hover:text-moonstone"
                    >
                      Verify
                      <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>

              {/* Mobile index */}
              <div className="absolute right-0 top-7 font-mono text-[9px] text-white/20 sm:hidden">
                {String(cert.id).padStart(2, "0")}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Footer metadata */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex items-center justify-between border-t border-white/[0.07] pt-5"
      >
        <span className="font-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">
          Credential archive
        </span>

        <span className="font-mono text-[9px] tracking-[0.2em] text-white/20 uppercase">
          2024 — 2026
        </span>
      </motion.div>
    </section>
  );
};

export default Certifications;