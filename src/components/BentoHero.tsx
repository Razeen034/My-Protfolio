"use client";
import { useState } from "react";
import { Reveal } from "./reveal";
import { Cpu, Cloud, Shield, Zap, Mail, MapPin, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const skillGroups = [
  { icon: Cpu, label: "Core Backend", tech: "Java 8-21, Spring Boot, Hibernate, Microservices, Python" },
  { icon: Cloud, label: "Infrastructure", tech: "AWS, GCP, PCF, Docker, Kubernetes, Terraform, Jenkins" },
  { icon: Shield, label: "Security", tech: "Spring Security, OAuth2, JWT Auth, IAM, DevSecOps" },
  { icon: Zap, label: "Streaming", tech: "Apache Kafka, Spark, AWS Kinesis, JMS" }
];

const milestones = [
  { 
    company: "State Street", date: "2024 - 2025", role: "Software Engineer",
    details: ["Architected REST Microservices with Spring Boot & Java 17.", "Engineered real-time streaming with Kafka & Spark.", "Optimized CI/CD pipelines via Jenkins & Docker."]
  },
  { 
    company: "AT&T", date: "2022 - 2024", role: "Software Developer",
    details: ["Built reactive APIs using Spring Web Flux & OAuth2.", "Provisioned infra using Terraform & CloudFormation.", "Developed high-performance SPAs with Angular & RxJS."]
  },
  { 
    company: "MidFirst Bank", date: "2020 - 2022", role: "Java Developer",
    details: ["Migrated on-premise Java systems to AWS Cloud.", "Developed event-driven apps with AWS Kinesis.", "Automated infra using GitLab CI & Docker."]
  },
  { 
    company: "Closing Lock", date: "2019 - 2020", role: "Java Engineer",
    details: ["Designed secure messaging via JMS & MQ Series.", "Implemented persistence using Hibernate & DAO.", "Built automated test suites with Selenium WebDriver."]
  }
];

export function BentoHero() {
  return (
    <div className="w-full max-w-[1440px] min-h-[calc(100vh-100px)] mx-auto px-4 py-8 md:py-16 flex flex-col justify-center">
      <div className="mesh-bg" />
      <div className="noise-overlay" />

      {/* THE MASTER DASHBOARD CARD */}
      <div className="bento-card shadow-floating relative overflow-hidden flex flex-col bg-white/40 flex-grow">
        
        {/* Section 1: Identity & Profile */}
        <div className="p-8 md:p-12 relative flex-grow flex items-center bg-blue-50/5">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-12 w-full">
            
            <div className="flex flex-col items-center md:items-start gap-6 flex-shrink-0 z-20 w-44 lg:w-48">
              {/* Profile Picture */}
              <div className="relative w-44 h-44 lg:w-48 lg:h-48 group">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-125" />
                <div className="h-full w-full rounded-[2.5rem] overflow-hidden border-8 border-[#fdfdfd] shadow-premium rotate-[-2deg] hover:rotate-0 transition-transform duration-500 bg-white relative z-10">
                  <Image src="/1732050172944.jpg" alt="Rajin Panthee" fill className="object-cover scale-110 hover:scale-100 transition-transform duration-700" />
                </div>
                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10 scale-75" />
              </div>
            </div>

            <div className="flex-1 text-center md:text-left space-y-4 pt-2">
              <Reveal>
                <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[0.9]">Rajin Panthee</h1>
                <p className="text-xl md:text-2xl text-slate-500 font-light mt-4 max-w-2xl leading-relaxed">
                  Architecting <span className="text-slate-900 font-bold italic underline decoration-blue-500/30">high-scale enterprise systems</span> and cloud-native solutions with 6+ years of specialized Java mastery.
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6 text-slate-400">
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><MapPin size={16} className="text-blue-500" /> NC, USA</span>
                  <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest"><Mail size={16} className="text-blue-500" /> rajin.panthee@example.com</span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Section 2: Integrated Technical Skills Bar */}
        <div className="px-8 md:px-12 py-12 border-t border-slate-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-10">
          {skillGroups.map((group, i) => (
            <div key={i} className="flex flex-col gap-3 group relative">
              {i !== 0 && <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-slate-100/50" />}
              <div className="flex items-center gap-2 text-slate-400 group-hover:text-blue-600 transition-colors duration-500">
                <group.icon size={14} strokeWidth={2} className="group-hover:rotate-12 transition-transform" />
                <h3 className="text-[9px] font-black uppercase tracking-[0.25em]">{group.label}</h3>
              </div>
              <p className="text-[11px] text-slate-500 font-medium leading-relaxed tracking-tight group-hover:text-slate-900 transition-colors duration-500">
                {group.tech}
              </p>
            </div>
          ))}
        </div>

        {/* Section 3: The Deep Dive Split */}
        <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          <div className="lg:w-1/3 p-8 md:p-12 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-blue-600 mb-2">
                <Sparkles size={20} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">The Narrative</h2>
              </div>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">6+ Years of <br />Technical Mastery.</h3>
              <p className="text-base text-slate-600 leading-relaxed font-regular">
                My journey in software engineering has been defined by a deep commitment to architecting high-performance, resilient systems within complex enterprise ecosystems. With over **6 years of specialized expertise** in Java and the Spring Framework, I have evolved from developing core persistence layers to orchestrating large-scale, cloud-native microservices for industry leaders like **State Street** and **AT&T**.
                <br /><br />
                I specialize in bridging the gap between robust backend logic and fluid user experiences, leveraging technologies like **Kafka** for real-time streaming and **Spring WebFlux** for high-throughput reactive APIs. My architectural philosophy centers on the implementation of mission-critical patterns.
              </p>
            </div>
            
            <div className="pt-10 border-t border-slate-50 space-y-4">
              <div className="flex items-center gap-3 text-blue-500/80"><Star size={16} /><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Core Disciplines</p></div>
              <div className="space-y-3 text-[11px] font-black uppercase tracking-wider text-slate-600">
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Scale-First Design</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Cloud Orchestration</div>
                <div className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-blue-500" /> Reactive Ecosystems</div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-8 md:p-12 bg-white/40">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Professional Journey</h2>
            </div>

            <div className="relative pl-8 space-y-12">
              <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-slate-200" />
              {milestones.map((milestone, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-[27px] top-1.5 h-[12px] w-[12px] rounded-full border-2 bg-blue-600 border-blue-600 z-10 shadow-sm" />
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h4 className="text-lg font-black text-slate-800">{milestone.company}</h4>
                      <span className="text-[10px] font-black font-mono text-slate-400 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100">{milestone.date}</span>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-3">{milestone.role}</p>
                      <ul className="space-y-3">
                        {milestone.details.map((detail, idx) => (
                          <li key={idx} className="text-[11px] text-slate-600 flex items-start gap-3 leading-relaxed">
                            <div className="mt-1.5 h-1 w-1 rounded-full bg-blue-500/50 flex-shrink-0" />
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
