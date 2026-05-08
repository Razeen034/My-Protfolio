"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Shield,
  Zap,
  ArrowUpRight,
  ChevronDown,
  Copy,
  Check,
  Mail,
} from "lucide-react";
import { Reveal } from "./reveal";
import { Magnetic, StaggerLetters } from "./effects";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};
const fadeUpEase = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

const EMAIL = "pantheerajin@gmail.com";

type Color = "indigo" | "cyan" | "fuchsia" | "amber" | "lime";

type SkillGroup = {
  icon: typeof Cpu;
  label: string;
  years: string;
  color: Color;
  primary: string[];
  secondary: string[];
};

const skillGroups: SkillGroup[] = [
  {
    icon: Cpu,
    label: "Backend",
    years: "6 yrs",
    color: "indigo",
    primary: ["Java 8/11/17/21", "Spring Boot", "Spring MVC"],
    secondary: ["WebFlux", "Hibernate", "JPA", "Spring Batch", "REST", "SOAP"],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    years: "5 yrs",
    color: "cyan",
    primary: ["AWS", "Docker", "Kubernetes"],
    secondary: ["EC2", "S3", "RDS", "Lambda", "SQS/SNS", "CloudFormation", "Terraform", "Jenkins"],
  },
  {
    icon: Shield,
    label: "Quality & Security",
    years: "5 yrs",
    color: "fuchsia",
    primary: ["Spring Security", "OAuth2", "JUnit"],
    secondary: ["JWT", "Mockito", "Cucumber", "Selenium", "SonarQube"],
  },
  {
    icon: Zap,
    label: "Data & Streaming",
    years: "4 yrs",
    color: "amber",
    primary: ["Kafka", "PostgreSQL", "MongoDB"],
    secondary: ["Spark", "AWS Kinesis", "Oracle", "SQL Server", "Redis"],
  },
];

type Milestone = {
  company: string;
  date: string;
  role: string;
  color: Color;
  details: string[];
};

const milestones: Milestone[] = [
  {
    company: "State Street",
    date: "May 2024 — Present",
    role: "Software Engineer",
    color: "amber",
    details: [
      "Designed Spring Boot microservices and REST APIs across Tomcat, PCF, and cloud environments.",
      "Built Angular 14 services and Kafka/Spark real-time streaming workflows.",
      "Automated Jenkins and Docker delivery pipelines with DevSecOps checks across AWS and GCP.",
    ],
  },
  {
    company: "AT&T",
    date: "Sep 2022 — Apr 2024",
    role: "Software Developer",
    color: "cyan",
    details: [
      "Built Spring Boot, Spring MVC, and WebFlux APIs secured with OAuth2 and JWT.",
      "Delivered Angular and React dashboards and reusable UI for high-throughput microservices.",
      "Provisioned AWS with Terraform and CloudFormation; monitored via Grafana, Splunk, and Dynatrace.",
    ],
  },
  {
    company: "MidFirst Bank",
    date: "Feb 2020 — Aug 2022",
    role: "Java Developer",
    color: "lime",
    details: [
      "Migrated Java microservices to AWS using ECS, RDS, S3, and Elastic Beanstalk.",
      "Implemented Angular 11, Spring Boot, Spring Batch, OAuth2, Apigee, and Kafka workflows.",
      "Built GitLab and Jenkins CI/CD pipelines with Docker and SonarQube quality gates.",
    ],
  },
  {
    company: "Closing Lock",
    date: "Feb 2019 — Jan 2020",
    role: "Java Engineer",
    color: "fuchsia",
    details: [
      "Developed AngularJS, Node.js, and Spring MVC features over Hibernate and Oracle PL/SQL.",
      "Designed integration components with JMS, MQ Series, Spring Kafka, and Zookeeper.",
      "Created Selenium regression suites and JUnit/Mockito tests for service-layer reliability.",
    ],
  },
];

const tColor: Record<Color, string> = {
  indigo:  "t-indigo",
  cyan:    "t-cyan",
  fuchsia: "t-fuchsia",
  amber:   "t-amber",
  lime:    "t-lime",
};

const ghColor: Record<Color, string> = {
  indigo:  "gh-indigo",
  cyan:    "gh-cyan",
  fuchsia: "gh-fuchsia",
  amber:   "gh-amber",
  lime:    "gh-lime",
};

const tagColor: Record<Color, string> = {
  indigo:  "tg-indigo",
  cyan:    "tg-cyan",
  fuchsia: "tg-fuchsia",
  amber:   "tg-amber",
  lime:    "tg-indigo",
};

/* ---------------- HERO ---------------- */
export function HeroSection() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center relative"
    >
      <div className="section-inner w-full">
        <motion.div
          className="flex items-center gap-4 mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 0.05 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 320, damping: 16 }}
            className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-white/10 shadow-[0_0_30px_-6px_rgba(129,140,248,0.55)] hover:ring-white/30 hover:shadow-[0_0_40px_-4px_rgba(244,114,182,0.85)] transition-shadow cursor-pointer"
          >
            <Image
              src="/1732050172944.jpg"
              alt="Rajin Panthee"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="flex flex-col gap-1.5">
            <p className="eyebrow eb-fuchsia">Full Stack Java Developer</p>
            <div className="flex items-center gap-2 text-[12px] t-muted font-display">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="status-ring absolute inset-0 rounded-full bg-emerald-400" />
                <span className="status-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <span>Available for new opportunities</span>
            </div>
          </div>
        </motion.div>

        <h1 className="h-display mb-10">
          <StaggerLetters text="Rajin " baseDelay={0.18} perChar={0.045} />
          <span className="accent">
            <StaggerLetters text="Panthee" baseDelay={0.5} perChar={0.045} />
          </span>
        </h1>

        <motion.p
          className="body-lg max-w-2xl mb-12"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 1.05 }}
        >
          I build enterprise <span className="hl-fuchsia">Java</span>{" "}
          microservices, responsive <span className="hl-cyan">Angular</span>{" "}
          and <span className="hl-cyan">React</span> interfaces, and
          event-driven <span className="hl-indigo">cloud</span> systems for
          banking, telecom, and financial platforms.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] t-muted font-display"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 1.2 }}
        >
          <span>NC, USA</span>
          <span className="t-faint">·</span>
          <a href={`mailto:${EMAIL}`} className="link-underline">
            {EMAIL}
          </a>
          <span className="t-faint">·</span>
          <span>(469) 210-9620</span>
        </motion.div>

        <motion.div
          className="mt-12 flex flex-wrap items-center gap-3"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 1.35 }}
        >
          <Magnetic strength={0.28}>
            <a href="#experience" className="btn-primary">
              View experience
              <ArrowUpRight size={15} strokeWidth={2.25} />
            </a>
          </Magnetic>
          <Magnetic strength={0.2}>
            <a href="#contact" className="btn-ghost">
              Get in touch
            </a>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="hidden md:flex scroll-cue absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-1 t-faint hover:text-white/80 transition-colors"
      >
        <span className="font-display text-[10px] tracking-[0.22em] uppercase font-semibold">
          Scroll
        </span>
        <ChevronDown size={14} strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <Reveal width="100%">
            <p className="eyebrow eb-cyan md:pt-2">About</p>
          </Reveal>
          <div className="max-w-2xl space-y-6">
            <Reveal width="100%" delay={0.1}>
              <h2 className="h-section">
                Six years building systems that{" "}
                <span className="pop pop-cyan">don&apos;t go down</span>.
              </h2>
            </Reveal>
            <Reveal width="100%" delay={0.18}>
              <p className="body-lg">
                I&apos;m a full stack Java developer with{" "}
                <span className="hl-fuchsia">6+ years</span> designing,
                developing, and deploying enterprise applications. My work
                centers on Spring Boot microservices, REST and SOAP APIs,
                distributed patterns, secure auth, and responsive frontends with
                Angular, React, and TypeScript.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.24}>
              <p className="body-lg">
                I have hands-on depth across{" "}
                <span className="hl-indigo">AWS</span>,{" "}
                <span className="hl-indigo">GCP</span>, Docker, Kubernetes,{" "}
                <span className="hl-amber">Kafka</span>, Spark, MongoDB, and
                Postgres. Reliability matters — JUnit, Mockito, Selenium,
                Splunk, Grafana, and production monitoring are part of every
                system I ship.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPERIENCE ---------------- */
export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <Reveal width="100%">
            <p className="eyebrow eb-amber md:pt-2">Experience</p>
          </Reveal>
          <div>
            <Reveal width="100%" delay={0.1}>
              <h2 className="h-section mb-14 max-w-xl">
                Where I&apos;ve shipped{" "}
                <span className="pop pop-amber">real systems</span>.
              </h2>
            </Reveal>

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={m.company} width="100%" delay={0.05 + i * 0.06}>
                  <article className="group grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-10">
                    <div className="space-y-1 sm:pt-1">
                      <p
                        className={`font-display text-[12px] tracking-wide font-semibold ${tColor[m.color]}`}
                      >
                        {m.date}
                      </p>
                      <p className="font-display text-[12px] t-muted">
                        {m.role}
                      </p>
                    </div>
                    <div>
                      <h3
                        className={`font-display text-2xl sm:text-3xl font-bold tracking-tight text-white ${ghColor[m.color]} transition-colors mb-4`}
                      >
                        {m.company}
                      </h3>
                      <ul className="space-y-2.5">
                        {m.details.map((d, j) => (
                          <li key={j} className="body flex gap-3">
                            <span
                              className={`mt-2 shrink-0 text-[10px] ${tColor[m.color]}`}
                            >
                              ●
                            </span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <Reveal width="100%">
            <p className="eyebrow eb-fuchsia md:pt-2">Skills</p>
          </Reveal>
          <div>
            <Reveal width="100%" delay={0.1}>
              <h2 className="h-section mb-14 max-w-xl">
                The technical foundation behind the{" "}
                <span className="pop pop-fuchsia">work</span>.
              </h2>
            </Reveal>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
            >
              {skillGroups.map((g) => {
                const Icon = g.icon;
                const tags = [
                  ...g.primary.map((tech) => ({ tech, primary: true })),
                  ...g.secondary.map((tech) => ({ tech, primary: false })),
                ];
                return (
                  <motion.div
                    key={g.label}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.6,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Icon
                          size={18}
                          strokeWidth={2}
                          className={tColor[g.color]}
                        />
                        <h3 className="font-display text-base font-semibold tracking-tight text-white">
                          {g.label}
                        </h3>
                      </div>
                      <span
                        className={`font-display text-[11px] font-semibold tracking-wide ${tColor[g.color]}`}
                      >
                        {g.years}
                      </span>
                    </div>
                    <motion.div
                      className="flex flex-wrap gap-1.5"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.035,
                            delayChildren: 0.18,
                          },
                        },
                      }}
                    >
                      {tags.map(({ tech, primary }) => (
                        <motion.span
                          key={tech}
                          variants={{
                            hidden: { opacity: 0, scale: 0.85, y: 6 },
                            visible: {
                              opacity: 1,
                              scale: 1,
                              y: 0,
                              transition: {
                                duration: 0.4,
                                ease: [0.16, 1, 0.3, 1],
                              },
                            },
                          }}
                          className={`tag ${primary ? "tag-primary " : ""}${tagColor[g.color]}`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard may be unavailable in some contexts; silently ignore.
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <Reveal width="100%">
          <p className="eyebrow eb-lime mb-6">Contact</p>
        </Reveal>
        <Reveal width="100%" delay={0.1}>
          <h2 className="h-display mb-10 max-w-3xl">
            Let&apos;s build something{" "}
            <span className="accent">dependable</span>.
          </h2>
        </Reveal>

        <Reveal width="100%" delay={0.18}>
          <p className="body-lg max-w-xl mb-10">
            Open to senior and staff roles in{" "}
            <span className="hl-fuchsia">Java</span>,{" "}
            <span className="hl-indigo">Spring</span>, and{" "}
            <span className="hl-cyan">cloud-native</span> engineering. The
            fastest way to reach me is email.
          </p>
        </Reveal>

        <Reveal width="100%" delay={0.24}>
          <motion.a
            href={`mailto:${EMAIL}`}
            whileHover={{ scale: 1.02, letterSpacing: "0.005em" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="gradient-text inline-block text-3xl sm:text-5xl md:text-6xl tracking-tight mb-10 leading-none"
          >
            {EMAIL}
          </motion.a>
        </Reveal>

        <Reveal width="100%" delay={0.3}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-10">
            <Magnetic strength={0.28}>
              <a href={`mailto:${EMAIL}`} className="btn-primary">
                <Mail size={15} strokeWidth={2.25} />
                Send me an email
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <button
                type="button"
                onClick={onCopy}
                className="btn-ghost"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-emerald-300"
                    />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} strokeWidth={2} />
                    Copy email
                  </>
                )}
              </button>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal width="100%" delay={0.36}>
          <p className="body font-display">(469) 210-9620 · NC, USA</p>
        </Reveal>

        <Reveal width="100%" delay={0.42}>
          <div className="mt-14 flex items-center gap-6 font-display text-[13px] font-medium">
            <a
              href="https://github.com/rajinpanthee"
              target="_blank"
              rel="noreferrer"
              className="t-muted lh-fuchsia transition-colors inline-flex items-center gap-1.5"
            >
              GitHub
              <ArrowUpRight size={12} strokeWidth={2} />
            </a>
            <a
              href="https://linkedin.com/in/rajinpanthee"
              target="_blank"
              rel="noreferrer"
              className="t-muted lh-cyan transition-colors inline-flex items-center gap-1.5"
            >
              LinkedIn
              <ArrowUpRight size={12} strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
export function FooterRule() {
  return (
    <footer className="px-6 py-10 border-t border-white/[0.05]">
      <div className="section-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="font-display text-[12px] t-faint">
          © {new Date().getFullYear()} Rajin Panthee
        </p>
        <p className="font-display text-[12px] t-faint">Built with Next.js</p>
      </div>
    </footer>
  );
}
