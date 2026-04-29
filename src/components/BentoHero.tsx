"use client";
import { Reveal } from "./reveal";
import { Cpu, Cloud, Shield, Zap, Mail, MapPin, Phone, Sparkles, Star } from "lucide-react";

const skillGroups = [
  { icon: Cpu, label: "Backend", tech: "Java 8/11/17/21, Spring Boot, Spring MVC, WebFlux, Hibernate, JPA, Batch", accent: "text-[#FDC830]", hoverAccent: "group-hover:text-white", glow: "bg-[#F37335]/20" },
  { icon: Cloud, label: "Cloud & DevOps", tech: "AWS EC2, S3, RDS, Lambda, SQS/SNS, IAM, CloudFormation, Docker, Kubernetes", accent: "text-cyan-100", hoverAccent: "group-hover:text-white", glow: "bg-cyan-400/20" },
  { icon: Shield, label: "Quality & Security", tech: "Spring Security, OAuth2, JWT, JUnit, Mockito, Cucumber, Selenium, SonarQube", accent: "text-white", hoverAccent: "group-hover:text-white", glow: "bg-white/12" },
  { icon: Zap, label: "Data & Streaming", tech: "Kafka, Spark, AWS Kinesis, MongoDB, Oracle, PostgreSQL, SQL Server, Redis", accent: "text-[#96c93d]", hoverAccent: "group-hover:text-white", glow: "bg-[#00b09b]/20" }
];

const milestones = [
  { 
    company: "State Street", date: "May 2024 - Present", role: "Software Engineer",
    accent: "bg-[#FDC830] border-[#FDC830] shadow-[#F37335]/30", dot: "bg-[#FDC830]", text: "text-[#FDC830]", chip: "bg-[#F37335]/15 border-white/10 text-orange-50",
    details: ["Designed Spring Boot microservices and REST APIs deployed across Tomcat, PCF, and cloud environments.", "Built Angular 14 frontend services/components and Kafka/Spark real-time streaming workflows.", "Automated Jenkins/Docker delivery pipelines with JUnit, Mockito, DevSecOps checks, and AWS/GCP integrations."]
  },
  { 
    company: "AT&T", date: "Sep 2022 - Apr 2024", role: "Software Developer",
    accent: "bg-[#00d2ff] border-[#00d2ff] shadow-[#3a7bd5]/30", dot: "bg-[#00d2ff]", text: "text-[#00d2ff]", chip: "bg-[#00d2ff]/15 border-white/10 text-cyan-50",
    details: ["Built Spring Boot, Spring MVC, and WebFlux APIs secured with OAuth2 and JWT.", "Delivered Angular/React dashboards and reusable UI components for high-throughput microservices.", "Provisioned AWS infrastructure with Terraform and CloudFormation while monitoring with CloudWatch, Grafana, Splunk, and Dynatrace."]
  },
  { 
    company: "MidFirst Bank", date: "Feb 2020 - Aug 2022", role: "Java Developer",
    accent: "bg-[#96c93d] border-[#96c93d] shadow-[#00b09b]/30", dot: "bg-[#96c93d]", text: "text-[#96c93d]", chip: "bg-[#00b09b]/15 border-white/10 text-lime-50",
    details: ["Migrated Java applications and microservices to AWS using EC2, RDS, S3, ECS, CloudFormation, and Elastic Beanstalk.", "Implemented Angular 11, Spring Boot, Spring Batch, OAuth2, Apigee APIs, Kafka, and AWS Kinesis workflows.", "Built GitLab/Jenkins CI/CD pipelines with Docker, JUnit 5, Mockito, TestNG, and Sonar quality checks."]
  },
  { 
    company: "Closing Lock", date: "Feb 2019 - Jan 2020", role: "Java Engineer",
    accent: "bg-white border-white shadow-white/30", dot: "bg-white", text: "text-white", chip: "bg-white/10 border-white/10 text-white",
    details: ["Developed AngularJS/Node.js and Spring MVC features backed by Hibernate, DAO patterns, and Oracle PL/SQL.", "Designed integration components with JMS, MQ Series, Spring Kafka, and Zookeeper.", "Created Selenium WebDriver regression suites and JUnit/Mockito tests for service-layer reliability."]
  }
];

export function BentoHero() {
  return (
    <div className="w-full max-w-none min-h-screen mx-auto p-0 flex flex-col justify-center">
      <div className="mesh-bg" />
      <div className="noise-overlay" />

      {/* THE MASTER DASHBOARD CARD */}
      <div className="bento-card shadow-floating relative overflow-hidden flex flex-col bg-transparent flex-grow">
        
        {/* Section 1: Identity & Profile */}
        <div className="px-6 py-14 md:px-10 lg:px-14 xl:px-20 relative flex items-center justify-center bg-transparent">
          <div className="w-full max-w-6xl mx-auto">
            <div className="space-y-6 pt-2 text-left max-w-4xl">
              <Reveal>
                <div className="mb-4 flex justify-start">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.28em] text-[#FDC830] ring-1 ring-white/10">
                    Full Stack Java Developer
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[0.92]">
                  Rajin <span className="text-[#00d2ff]">Panthee</span>
                </h1>

                <p className="text-lg md:text-xl xl:text-2xl text-white/82 font-light mt-6 max-w-3xl leading-relaxed">
                  Building enterprise Java microservices, responsive Angular/React interfaces, cloud infrastructure, and event-driven systems across banking, telecom, and financial platforms.
                </p>

                <div className="flex flex-wrap justify-start gap-3 mt-7 text-white/78">
                  <span className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-widest ring-1 ring-white/10">
                    <MapPin size={16} className="text-[#96c93d]" /> NC, USA
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-widest ring-1 ring-white/10">
                    <Mail size={16} className="text-cyan-200" /> pantheerajin@gmail.com
                  </span>
                  <span className="flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-xs font-bold uppercase tracking-widest ring-1 ring-white/10">
                    <Phone size={16} className="text-white/80" /> (469) 210-9620
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Section 2: Integrated Technical Skills Bar */}
        <div className="px-6 md:px-10 lg:px-14 xl:px-20 py-8 bg-transparent">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-10 gap-y-7 max-w-6xl mx-auto">
          {skillGroups.map((group) => (
            <div key={group.label} className="flex flex-col items-center text-center gap-3 group relative">
              <div className={`flex items-center justify-center gap-2 text-white/76 ${group.hoverAccent} transition-colors duration-500`}>
                <span className={`h-8 w-8 rounded-xl ${group.glow} ${group.accent} flex items-center justify-center`}>
                  <group.icon size={14} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                </span>
                <h3 className="text-[9px] font-black uppercase tracking-[0.25em]">{group.label}</h3>
              </div>
              <p className="text-[11px] text-cyan-50/72 font-medium leading-relaxed tracking-tight max-w-[15rem] group-hover:text-white transition-colors duration-500">
                {group.tech}
              </p>
            </div>
          ))}
          </div>
        </div>

        {/* Section 3: The Deep Dive Split */}
        <div className="grid grid-cols-1 xl:grid-cols-[0.85fr_1.15fr] gap-10 px-6 py-12 md:px-10 lg:px-14 xl:px-20 bg-transparent max-w-7xl mx-auto w-full">
          <div className="space-y-8 flex flex-col justify-between bg-transparent">
            <div className="space-y-6">
              <div className="flex items-center justify-center xl:justify-start gap-3 text-[#FDC830] mb-2">
                <Sparkles size={20} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Narrative</h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight text-center xl:text-left">6+ Years of <br />Technical Mastery.</h3>
              <p className="text-base text-cyan-50/82 leading-relaxed font-regular text-center xl:text-left">
                I am a Full Stack Java Developer with 6+ years of experience designing, developing, testing, and deploying Java/J2EE applications in enterprise environments. My work centers on Spring Boot microservices, REST/SOAP APIs, distributed patterns, secure authentication, and responsive frontend delivery with Angular, React, TypeScript, and JavaScript.
                <br /><br />
                I have hands-on depth across AWS, GCP, PCF, Docker, Kubernetes, Kafka, Spark, MongoDB, Oracle, PostgreSQL, and CI/CD automation. I also focus heavily on reliability through JUnit, Mockito, Cucumber, Selenium, Splunk, Grafana, Dynatrace, and production monitoring practices.
              </p>
            </div>
            
            <div className="pt-4 space-y-4">
              <div className="flex items-center justify-center xl:justify-start gap-3 text-white/85"><Star size={16} /><p className="text-[10px] font-black uppercase tracking-widest text-white/62">Core Disciplines</p></div>
              <div className="flex flex-wrap justify-center xl:justify-start gap-3 text-[11px] font-black uppercase tracking-wider text-cyan-50/82">
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#FDC830]" /> Java Microservices</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-white" /> Cloud CI/CD</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#96c93d]" /> Streaming Systems</div>
              </div>
            </div>
          </div>

          <div className="bg-transparent">
            <div className="flex items-center justify-center xl:justify-start mb-10">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/85">Professional Journey</h2>
            </div>

            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#FDC830] via-[#00d2ff] to-[#96c93d] opacity-70" />
              {milestones.map((milestone, i) => (
                <div key={i} className="relative group">
                  <div className={`absolute -left-[27px] top-1.5 h-[12px] w-[12px] rounded-full border-2 z-10 shadow-lg ${milestone.accent}`} />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-black text-white">{milestone.company}</h4>
                      <span className={`text-[10px] font-black font-mono px-2 py-0.5 rounded shadow-sm border ${milestone.chip}`}>{milestone.date}</span>
                    </div>
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${milestone.text}`}>{milestone.role}</p>
                      <ul className="space-y-3">
                        {milestone.details.map((detail, idx) => (
                          <li key={idx} className="text-[11px] text-cyan-50/78 flex items-start gap-3 leading-relaxed">
                            <div className={`mt-1.5 h-1 w-1 rounded-full flex-shrink-0 ${milestone.dot}`} />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
