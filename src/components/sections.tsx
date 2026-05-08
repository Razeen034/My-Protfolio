"use client";
import { Cpu, Cloud, Shield, Zap, ArrowUpRight } from "lucide-react";
import { Reveal } from "./reveal";

const skillGroups = [
  {
    icon: Cpu,
    label: "Backend",
    tech: "Java 8/11/17/21, Spring Boot, Spring MVC, WebFlux, Hibernate, JPA, Spring Batch.",
  },
  {
    icon: Cloud,
    label: "Cloud & DevOps",
    tech: "AWS EC2, S3, RDS, Lambda, SQS/SNS, IAM, CloudFormation, Docker, Kubernetes.",
  },
  {
    icon: Shield,
    label: "Quality & Security",
    tech: "Spring Security, OAuth2, JWT, JUnit, Mockito, Cucumber, Selenium, SonarQube.",
  },
  {
    icon: Zap,
    label: "Data & Streaming",
    tech: "Kafka, Spark, AWS Kinesis, MongoDB, Oracle, PostgreSQL, SQL Server, Redis.",
  },
];

const milestones = [
  {
    company: "State Street",
    date: "May 2024 — Present",
    role: "Software Engineer",
    details: [
      "Designed Spring Boot microservices and REST APIs deployed across Tomcat, PCF, and cloud environments.",
      "Built Angular 14 frontend services and Kafka/Spark real-time streaming workflows.",
      "Automated Jenkins/Docker delivery pipelines with JUnit, Mockito, DevSecOps checks, and AWS/GCP integrations.",
    ],
  },
  {
    company: "AT&T",
    date: "Sep 2022 — Apr 2024",
    role: "Software Developer",
    details: [
      "Built Spring Boot, Spring MVC, and WebFlux APIs secured with OAuth2 and JWT.",
      "Delivered Angular and React dashboards and reusable UI for high-throughput microservices.",
      "Provisioned AWS infrastructure with Terraform and CloudFormation; monitored with CloudWatch, Grafana, Splunk, and Dynatrace.",
    ],
  },
  {
    company: "MidFirst Bank",
    date: "Feb 2020 — Aug 2022",
    role: "Java Developer",
    details: [
      "Migrated Java applications and microservices to AWS using EC2, RDS, S3, ECS, CloudFormation, and Elastic Beanstalk.",
      "Implemented Angular 11, Spring Boot, Spring Batch, OAuth2, Apigee, Kafka, and AWS Kinesis workflows.",
      "Built GitLab/Jenkins CI/CD pipelines with Docker, JUnit 5, Mockito, TestNG, and SonarQube quality checks.",
    ],
  },
  {
    company: "Closing Lock",
    date: "Feb 2019 — Jan 2020",
    role: "Java Engineer",
    details: [
      "Developed AngularJS, Node.js, and Spring MVC features backed by Hibernate, DAO patterns, and Oracle PL/SQL.",
      "Designed integration components with JMS, MQ Series, Spring Kafka, and Zookeeper.",
      "Created Selenium WebDriver regression suites and JUnit/Mockito tests for service-layer reliability.",
    ],
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="section min-h-screen flex items-center"
    >
      <div className="section-inner w-full">
        <Reveal width="100%">
          <p className="eyebrow mb-6">Full Stack Java Developer</p>
          <h1 className="h-display mb-8">
            Rajin <span className="accent">Panthee</span>
          </h1>
          <p className="body-lg max-w-2xl mb-10">
            I build enterprise Java microservices, responsive Angular and
            React interfaces, and event-driven cloud systems for banking,
            telecom, and financial platforms.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] t-muted">
            <span>NC, USA</span>
            <span className="t-faint">·</span>
            <a
              href="mailto:pantheerajin@gmail.com"
              className="link-underline"
            >
              pantheerajin@gmail.com
            </a>
            <span className="t-faint">·</span>
            <span>(469) 210-9620</span>
          </div>

          <div className="mt-14 flex items-center gap-6 text-[13px]">
            <a
              href="#experience"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-white transition-colors"
            >
              View experience
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
            <a
              href="#contact"
              className="t-muted hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <p className="eyebrow md:pt-2">About</p>
          <div className="max-w-2xl space-y-6">
            <h2 className="h-section">
              Six years building systems that don&apos;t go down.
            </h2>
            <p className="body-lg">
              I&apos;m a full stack Java developer with 6+ years designing,
              developing, and deploying enterprise applications. My work
              centers on Spring Boot microservices, REST and SOAP APIs,
              distributed patterns, secure auth, and responsive frontends with
              Angular, React, and TypeScript.
            </p>
            <p className="body-lg">
              I have hands-on depth across AWS, GCP, Docker, Kubernetes, Kafka,
              Spark, MongoDB, and Postgres. Reliability matters — JUnit,
              Mockito, Selenium, Splunk, Grafana, and production monitoring
              are part of every system I ship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <p className="eyebrow md:pt-2">Experience</p>
          <div>
            <h2 className="h-section mb-14 max-w-xl">
              Where I&apos;ve shipped real systems.
            </h2>

            <div className="space-y-14">
              {milestones.map((m) => (
                <article
                  key={m.company}
                  className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-10"
                >
                  <div className="space-y-1">
                    <p className="text-[12px] t-faint tracking-wide">
                      {m.date}
                    </p>
                    <p className="text-[12px] t-muted">{m.role}</p>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-white mb-4">
                      {m.company}
                    </h3>
                    <ul className="space-y-2.5">
                      {m.details.map((d, j) => (
                        <li key={j} className="body flex gap-3">
                          <span className="t-faint mt-2 shrink-0 text-[10px]">
                            ●
                          </span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-3 md:gap-12">
          <p className="eyebrow md:pt-2">Skills</p>
          <div>
            <h2 className="h-section mb-14 max-w-xl">
              The technical foundation behind the work.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {skillGroups.map((g) => {
                const Icon = g.icon;
                return (
                  <div key={g.label}>
                    <div className="flex items-center gap-3 mb-3">
                      <Icon
                        size={16}
                        strokeWidth={1.5}
                        className="t-accent"
                      />
                      <h3 className="text-[15px] font-medium tracking-tight text-white">
                        {g.label}
                      </h3>
                    </div>
                    <p className="body">{g.tech}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <p className="eyebrow mb-6">Contact</p>
        <h2 className="h-display mb-12 max-w-3xl">
          Let&apos;s build something <span className="accent">dependable</span>.
        </h2>

        <a
          href="mailto:pantheerajin@gmail.com"
          className="inline-block text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-white link-underline"
        >
          pantheerajin@gmail.com
        </a>

        <p className="body mt-4">(469) 210-9620 · NC, USA</p>

        <div className="mt-16 flex items-center gap-6 text-[13px]">
          <a
            href="https://github.com/rajinpanthee"
            target="_blank"
            rel="noreferrer"
            className="t-muted hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            GitHub
            <ArrowUpRight size={12} strokeWidth={1.75} />
          </a>
          <a
            href="https://linkedin.com/in/rajinpanthee"
            target="_blank"
            rel="noreferrer"
            className="t-muted hover:text-white transition-colors inline-flex items-center gap-1.5"
          >
            LinkedIn
            <ArrowUpRight size={12} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FooterRule() {
  return (
    <footer className="px-6 py-10 border-t border-white/[0.05]">
      <div className="section-inner flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-[12px] t-faint">
          © {new Date().getFullYear()} Rajin Panthee
        </p>
        <p className="text-[12px] t-faint">Built with Next.js</p>
      </div>
    </footer>
  );
}
