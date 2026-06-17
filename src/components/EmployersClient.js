"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Users, Award, Headset, HardHat } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function EmployersClient() {
  const corePillars = [
    { title: "Vast Candidate Pool", value: "25k+ Database", icon: Users },
    { title: "Corporate Support Team", value: "24/7 Operations", icon: Headset },
    { title: "Sourcing Corridors", value: "Pan-India & Africa", icon: Award },
  ];

  const solutions = [
    {
      title: "Overseas Recruitment",
      desc: "End-to-end international recruitment solutions delivering skilled and compliant manpower across multiple industrial sectors.",
      href: "/services/recruitment",
    },
    {
      title: "Bulk Manpower Supply",
      desc: "Rapid deployment of large workforce volumes for civil construction, heavy engineering, manufacturing, and logistics.",
      href: "/services/labour-contracting",
    },
    {
      title: "Post-Deployment Support",
      desc: "Continuous coordination, statutory wage compliance records monitoring, and crew replacement support.",
      href: "/services/hr-outsourcing",
    },
  ];

  const employerSteps = [
    {
      step: "01",
      title: "Requirement Audit",
      desc: "Understanding your technical positions, certifications, visa categories, and target deployment schedule.",
    },
    {
      step: "02",
      title: "Candidate Sourcing",
      desc: "Shortlisting candidates through our pan-India databases, regional partners, and advertising channels.",
    },
    {
      step: "03",
      title: "Vetting & Selection",
      desc: "Managing trade test center evaluations, interviews, credentials verification, and GCC health checks.",
    },
    {
      step: "04",
      title: "Deployment & Onboarding",
      desc: "Executing emigration stamps, flight bookings, and post-placement coordination on site.",
    },
  ];

  const achievements = [
    { value: "25,000+", label: "Candidates Deployed" },
    { value: "97%", label: "Employer Satisfaction Rate" },
    { value: "100+", label: "Corporate Partners" },
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Hiring Partners
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            Employers
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Employers</span>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left intro text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6 text-left"
            >
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Solutions for Business
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Scale Your Workforces with Vetted, Compliant Talent
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We support employers with structured, ethical, and efficient manpower recruitment by supplying skilled, semi-skilled, and unskilled workforce tailored to project and industry requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center mt-2 border-t border-white/5 pt-6">
                <Link
                  href="/contact"
                  className="bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold py-3.5 px-6 rounded-full inline-block"
                >
                  Hire Manpower Now
                </Link>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                  <Phone size={14} className="text-gold-500" /> +91 97696 29783
                </span>
              </div>
            </motion.div>

            {/* Right Pillars list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col gap-6"
            >
              {corePillars.map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-primary-dark border border-white/5 rounded-2xl p-5 shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0">
                      <Icon className="text-gold-500 w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{pillar.title}</h4>
                      <p className="text-sm font-bold text-white mt-0.5">{pillar.value}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-primary-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Recruitment Frameworks
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Manpower Solutions Designed for Employers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary border border-white/5 rounded-2xl p-8 hover:border-gold-500/25 transition-all flex flex-col gap-4 shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <HardHat className="text-gold-500 w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mt-1">{sol.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{sol.desc}</p>
                <Link
                  href={sol.href}
                  className="mt-auto text-xs font-bold text-gold-500 hover:text-gold-400 flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Employer Workflow */}
      <section className="py-24 bg-primary border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
            Operational Protocol
          </span>
          <h2 className="text-3xl font-serif font-black text-white mb-16">
            Our Sourcing Workflow for Employers
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-6xl mx-auto">
            {employerSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-primary-dark border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 transition-all flex flex-col gap-3 shadow-lg"
              >
                <span className="font-mono text-3xl font-black text-gold-500/10 absolute top-4 right-5 select-none">
                  {item.step}
                </span>
                <div className="w-8 h-8 rounded-lg bg-gold-500/5 border border-gold-500/15 flex items-center justify-center font-bold text-gold-500 text-xs shrink-0">
                  {item.step}
                </div>
                <h3 className="text-sm font-bold text-white mt-2">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-primary-dark border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gradient-gold mb-10">
            Our Achievements from 18+ Years of Trusted Manpower Recruitment
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {achievements.map((item, i) => (
              <div key={i} className="flex flex-col gap-1.5 p-6 rounded-2xl bg-primary border border-white/5">
                <div className="text-3xl font-extrabold text-white tracking-tight">{item.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-primary border-t border-white/5 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Recruitment Intake
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Submit Sourcing Requisition
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Detail your vacancy counts, positions, required trade testing, and deployment locations. Our manager will follow up.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
