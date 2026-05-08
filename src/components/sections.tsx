"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cpu,
  Cloud,
  Shield,
  Zap,
  Activity,
  GraduationCap,
  Quote,
  ArrowUpRight,
  ChevronDown,
  Copy,
  Check,
  Mail,
  MapPin,
} from "lucide-react";
import { Reveal } from "./reveal";
import { Magnetic, StaggerLetters } from "./effects";

const EMAIL = "pantheerajin@gmail.com";

type Color = "indigo" | "cyan" | "fuchsia" | "amber" | "lime";

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
const ebColor: Record<Color, string> = {
  indigo:  "eb-indigo",
  cyan:    "eb-cyan",
  fuchsia: "eb-fuchsia",
  amber:   "eb-amber",
  lime:    "eb-lime",
};
const blColor: Record<Color, string> = {
  indigo:  "bl-indigo",
  cyan:    "bl-cyan",
  fuchsia: "bl-fuchsia",
  amber:   "bl-amber",
  lime:    "bl-lime",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};
const fadeUpEase = { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

/* ---------------- DATA ---------------- */

const languages = [
  "Java 8/11/17/21",
  "JavaScript",
  "TypeScript",
  "Python",
  "SQL / PL-SQL",
];

const monitoring = [
  "Splunk",
  "Grafana",
  "Prometheus",
  "Dynatrace",
  "New Relic",
  "CloudWatch",
  "Log4J",
  "SLF4J",
];

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
    label: "Backend & Frameworks",
    years: "6 yrs",
    color: "indigo",
    primary: ["Spring Boot", "Spring MVC", "Spring WebFlux"],
    secondary: [
      "Spring Security",
      "Spring Batch",
      "Spring Cloud",
      "Hibernate",
      "JPA",
      "JDBC",
      "REST",
      "SOAP",
      "Apache CXF",
      "Eureka",
      "Zuul",
    ],
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    years: "5 yrs",
    color: "cyan",
    primary: ["AWS", "Docker", "Kubernetes"],
    secondary: [
      "GCP",
      "EC2",
      "S3",
      "Lambda",
      "RDS",
      "EKS",
      "OpenShift",
      "PCF",
      "Terraform",
      "CloudFormation",
      "Jenkins",
      "GitLab CI",
      "Maven",
      "Gradle",
    ],
  },
  {
    icon: Shield,
    label: "Quality & Security",
    years: "5 yrs",
    color: "fuchsia",
    primary: ["OAuth2", "JWT", "JUnit 5"],
    secondary: [
      "Spring Security",
      "Mockito",
      "Cucumber",
      "Selenium",
      "RestAssured",
      "TestNG",
      "Karma / Jasmine",
      "SonarQube",
      "DevSecOps",
    ],
  },
  {
    icon: Zap,
    label: "Data & Streaming",
    years: "5 yrs",
    color: "amber",
    primary: ["Kafka", "MongoDB", "PostgreSQL"],
    secondary: [
      "Spark",
      "AWS Kinesis",
      "Oracle",
      "DynamoDB",
      "Cassandra",
      "Redis",
      "SQL Server",
      "DB2",
      "JMS",
      "MQ Series",
    ],
  },
];

type Milestone = {
  company: string;
  role: string;
  via?: string;
  location: string;
  date: string;
  color: Color;
  details: string[];
  tags: string[];
};

const milestones: Milestone[] = [
  {
    company: "State Street",
    role: "Software Engineer",
    via: "Digitech Inc",
    location: "Boston, MA",
    date: "May 2024 — Present",
    color: "amber",
    details: [
      "Designed REST microservices with Spring Boot and Maven, deployed across Tomcat, PCF, and AWS / GCP environments.",
      "Built Angular 14 services and components with HTTP integration, Angular CLI scaffolding, and Jasmine/Karma TDD.",
      "Configured Kafka and Spark for real-time streaming and MongoDB replica sets for high-availability storage.",
      "Automated Jenkins pipelines with Docker images, JUnit/Mockito gates, and DevSecOps scanning across staging and prod.",
    ],
    tags: [
      "Spring Boot",
      "Microservices",
      "Angular 14",
      "Kafka",
      "Spark",
      "MongoDB",
      "AWS",
      "GCP",
      "Docker",
      "Jenkins",
      "PCF",
      "CloudFormation",
    ],
  },
  {
    company: "AT&T",
    role: "Software Developer",
    via: "ThothIt LLC",
    location: "Plano, TX",
    date: "Sep 2022 — Apr 2024",
    color: "cyan",
    details: [
      "Built Spring Boot, Spring MVC, and WebFlux APIs secured with OAuth2 and JWT for high-throughput microservices.",
      "Delivered Angular SPAs with TypeScript, RxJS, and Angular Material plus React (Hooks) dashboards.",
      "Provisioned AWS infrastructure with Terraform and CloudFormation; deployed containers to AWS EKS and OpenShift.",
      "Refactored JUnit 4 → 5, added Cucumber BDD scenarios, RestAssured contract tests, and Mockito-based fallback verification.",
    ],
    tags: [
      "Spring Boot",
      "Spring WebFlux",
      "Angular",
      "React",
      "OAuth2",
      "JWT",
      "Kafka",
      "MongoDB",
      "Terraform",
      "AWS EKS",
      "Cucumber",
      "Dynatrace",
      "Splunk",
    ],
  },
  {
    company: "MidFirst Bank",
    role: "Java Developer",
    via: "ThothIt LLC",
    location: "Oklahoma City, OK",
    date: "Feb 2020 — Aug 2022",
    color: "lime",
    details: [
      "Built Java 11 microservices on Spring Boot / Batch / Security, exposed via Apigee API Gateway with rate-limit policies.",
      "Modeled MongoDB aggregation pipelines for dashboard analytics and used Apache Kafka for fraud and payment events.",
      "Delivered Angular 11 frontends with reusable typed components and Spring Cloud Config / Eureka service discovery.",
      "Achieved 90%+ unit test coverage with JUnit 5 / Mockito; ran GitLab + Jenkins CI/CD with Docker on AWS EC2 / ECS.",
    ],
    tags: [
      "Java 11",
      "Spring Boot",
      "Spring Batch",
      "Angular 11",
      "MongoDB",
      "Kafka",
      "Apigee",
      "AWS Kinesis",
      "OAuth2",
      "Spring Cloud",
      "GitLab CI",
      "JUnit 5",
      "Prometheus",
    ],
  },
  {
    company: "Closing Lock",
    role: "Java Engineer",
    via: "ThothIt LLC",
    location: "Austin, TX",
    date: "Feb 2019 — Jan 2020",
    color: "fuchsia",
    details: [
      "Built Spring MVC features over Hibernate POJOs and Oracle PL/SQL stored procedures, triggers, and batch jobs.",
      "Designed integration components with JMS, MQ Series, Spring Kafka, and Zookeeper for asynchronous workflows.",
      "Tuned MongoDB performance via shard-key analysis, query plans, and collection refactors for higher throughput.",
      "Built Selenium WebDriver regression suites and parameterized JUnit tests, cutting test cycle time by 40%.",
    ],
    tags: [
      "AngularJS",
      "Node.js",
      "Spring MVC",
      "Hibernate",
      "Oracle PL/SQL",
      "JMS",
      "MQ Series",
      "Spring Kafka",
      "Zookeeper",
      "Selenium",
      "JUnit",
      "Mockito",
    ],
  },
];

const stats = [
  { number: "6+", label: "Years building", color: "indigo" as Color },
  { number: "4", label: "Enterprise clients", color: "cyan" as Color },
  { number: "90%+", label: "Test coverage", color: "fuchsia" as Color },
  { number: "40%", label: "Faster release cycles", color: "amber" as Color },
];

const education = [
  {
    degree: "M.S., Computer Science",
    school: "University of West Florida",
    when: "Dec 2025 (expected)",
  },
  {
    degree: "B.S., Computer Science",
    school: "East Central University",
    when: "December 2019",
  },
];

/* ---------------- HELPERS ---------------- */

function SectionHeader({
  eyebrow,
  color,
}: {
  eyebrow: string;
  color: Color;
}) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${tColor[color]}`}>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] w-12 origin-left rounded-full bg-current"
      />
      <p className={`eyebrow ${ebColor[color]}`}>{eyebrow}</p>
    </div>
  );
}

/* ---------------- HERO ---------------- */
export function HeroSection() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center relative pt-32 md:pt-28"
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
          className="body-lg max-w-2xl mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 1.05 }}
        >
          I build enterprise <span className="hl-fuchsia">Java</span>{" "}
          microservices, responsive <span className="hl-cyan">Angular</span>{" "}
          and <span className="hl-cyan">React</span> interfaces, and
          event-driven <span className="hl-indigo">cloud</span> systems for{" "}
          <span className="hl-amber">banking</span>,{" "}
          <span className="hl-amber">telecom</span>, and{" "}
          <span className="hl-amber">financial</span> platforms.
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] t-muted font-display"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...fadeUpEase, delay: 1.2 }}
        >
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={13} strokeWidth={1.75} className="t-indigo" />
            NC, USA
          </span>
          <span className="t-faint">·</span>
          <a href={`mailto:${EMAIL}`} className="link-underline">
            {EMAIL}
          </a>
          <span className="t-faint">·</span>
          <span>(469) 210-9620</span>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-3"
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

/* ---------------- STATS STRIP ---------------- */
export function StatsStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015] backdrop-blur-[2px]">
      <div className="section-inner section-strip grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
        {stats.map((s, i) => (
          <Reveal key={s.label} width="100%" delay={i * 0.08}>
            <div>
              <p className={`stat-num ${tColor[s.color]}`}>{s.number}</p>
              <p className="font-display text-[11px] uppercase tracking-[0.18em] t-muted mt-2">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeader eyebrow="About" color="cyan" />

        <Reveal width="100%" delay={0.1}>
          <h2 className="h-section mb-10 max-w-3xl">
            Six years building systems that{" "}
            <span className="pop pop-cyan">don&apos;t go down</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-14">
          <div className="space-y-6">
            <Reveal width="100%" delay={0.18}>
              <p className="body-lg">
                I&apos;m a full stack Java developer with{" "}
                <span className="hl-fuchsia">6+ years</span> designing,
                developing, and deploying enterprise applications. My work
                centers on <span className="hl-indigo">Spring Boot</span>{" "}
                microservices, REST and SOAP APIs, distributed patterns
                (circuit breaker, service discovery, distributed transactions),
                secure auth, and responsive frontends with Angular, React, and
                TypeScript.
              </p>
            </Reveal>
            <Reveal width="100%" delay={0.24}>
              <p className="body-lg">
                I have hands-on depth across{" "}
                <span className="hl-indigo">AWS</span> and{" "}
                <span className="hl-indigo">GCP</span>, Docker, Kubernetes
                (EKS, OpenShift),{" "}
                <span className="hl-amber">Kafka</span>, Spark, MongoDB,
                Postgres, and Oracle. Reliability matters — JUnit 5, Mockito,
                Cucumber, Selenium, plus production observability via Splunk,
                Grafana, Prometheus, and Dynatrace are part of every system I
                ship.
              </p>
            </Reveal>
          </div>

          <aside className="space-y-10 lg:pl-10 lg:border-l lg:border-white/[0.07]">
            <Reveal width="100%" delay={0.3}>
              <div>
                <div className={`flex items-center gap-2 mb-3 t-fuchsia`}>
                  <Quote size={14} strokeWidth={1.75} />
                  <p className="eyebrow eb-fuchsia">Philosophy</p>
                </div>
                <p className="font-serif italic text-xl sm:text-2xl leading-snug text-white/90">
                  Reliability is the only feature your users notice when
                  it&apos;s missing.
                </p>
              </div>
            </Reveal>

            <Reveal width="100%" delay={0.38}>
              <div>
                <div className={`flex items-center gap-2 mb-3 t-lime`}>
                  <GraduationCap size={14} strokeWidth={1.75} />
                  <p className="eyebrow eb-lime">Education</p>
                </div>
                <ul className="space-y-4">
                  {education.map((e) => (
                    <li key={e.degree}>
                      <p className="font-display font-semibold text-[15px] text-white">
                        {e.degree}
                      </p>
                      <p className="font-display text-[13px] t-muted mt-0.5">
                        {e.school}
                      </p>
                      <p className="font-display text-[12px] t-faint mt-1">
                        {e.when}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </aside>
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
        <SectionHeader eyebrow="Experience" color="amber" />

        <Reveal width="100%" delay={0.1}>
          <h2 className="h-section mb-12 max-w-2xl">
            Where I&apos;ve shipped{" "}
            <span className="pop pop-amber">real systems</span>.
          </h2>
        </Reveal>

        <div className="space-y-8">
          {milestones.map((m, i) => (
            <Reveal key={m.company} width="100%" delay={0.05 + i * 0.06}>
              <article
                className={`group relative border-l-2 ${blColor[m.color]} pl-6 sm:pl-10 py-3 transition-all duration-300 hover:bg-white/[0.012] hover:translate-x-[2px]`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <h3
                    className={`font-display text-2xl sm:text-3xl font-bold tracking-tight text-white ${ghColor[m.color]} transition-colors`}
                  >
                    {m.company}
                  </h3>
                  <p
                    className={`font-display text-[12px] tracking-wide font-semibold ${tColor[m.color]}`}
                  >
                    {m.location} · {m.date}
                  </p>
                </div>
                <p className="font-display text-[13px] t-muted mb-5">
                  {m.role}
                  {m.via && (
                    <span className="t-faint"> · via {m.via}</span>
                  )}
                </p>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 mb-5">
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

                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag ${tagColor[m.color]}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
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
        <SectionHeader eyebrow="Skills" color="fuchsia" />

        <Reveal width="100%" delay={0.1}>
          <h2 className="h-section mb-12 max-w-2xl">
            The technical foundation behind the{" "}
            <span className="pop pop-fuchsia">work</span>.
          </h2>
        </Reveal>

        {/* Languages row */}
        <Reveal width="100%" delay={0.18}>
          <div className="mb-12 pb-10 border-b border-white/[0.06]">
            <p className="eyebrow eb-fuchsia mb-4">Languages</p>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((l) => (
                <span key={l} className="tag tag-primary tg-fuchsia">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Skill categories */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12"
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
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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

        {/* Monitoring row */}
        <Reveal width="100%" delay={0.2}>
          <div className="mt-12 pt-10 border-t border-white/[0.06]">
            <div className={`flex items-center gap-3 mb-4 t-lime`}>
              <Activity size={16} strokeWidth={2} />
              <p className="eyebrow eb-lime">Monitoring & Observability</p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {monitoring.map((m) => (
                <span key={m} className="tag tg-cyan">
                  {m}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
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
        <SectionHeader eyebrow="Contact" color="lime" />

        <Reveal width="100%" delay={0.1}>
          <h2 className="h-display mb-8 max-w-3xl">
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
          <div className="mt-12 flex items-center gap-6 font-display text-[13px] font-medium">
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
              href="https://linkedin.com/in/rajin-panthee/"
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
