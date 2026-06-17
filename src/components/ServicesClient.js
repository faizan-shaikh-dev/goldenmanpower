"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Users2,
  FileText,
  UserCheck,
  Building,
  HardHat,
  ArrowRight,
} from "lucide-react";

export default function ServicesClient() {
  const serviceList = [
    {
      slug: "executive-search",
      name: "Executive Search",
      desc: "Specialized recruitment of senior, mid-level, and leadership professionals aligned with organizational strategy and culture.",
      icon: Search,
      color: "from-blue-600/10 to-blue-500/0",
    },
    {
      slug: "labour-contracting",
      name: "Labour Contracting",
      desc: "Flexible supply of certified blue-collar and semi-skilled manpower for industrial, infrastructure, and project-based roles.",
      icon: HardHat,
      color: "from-amber-600/10 to-amber-500/0",
    },
    {
      slug: "document-attestation",
      name: "Document Attestation",
      desc: "Complete verification and attestation of educational, personal, and professional documents for overseas employment.",
      icon: FileText,
      color: "from-emerald-600/10 to-emerald-500/0",
    },
    {
      slug: "domestic-recruitment",
      name: "Domestic Recruitment",
      desc: "Permanent, temporary, and contract hiring solutions across India for diverse industries and job roles.",
      icon: UserCheck,
      color: "from-indigo-600/10 to-indigo-500/0",
    },
    {
      slug: "hr-outsourcing",
      name: "HR Outsourcing",
      desc: "End-to-end HR services including payroll execution, statutory compliance filings, and workforce administration.",
      icon: Building,
      color: "from-purple-600/10 to-purple-500/0",
    },
    {
      slug: "recruitment",
      name: "Recruitment",
      desc: "Large-scale manpower sourcing and rapid deployment for infrastructure, construction, logistics, and heavy engineering.",
      icon: Users2,
      color: "from-rose-600/10 to-rose-500/0",
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Requirement Analysis",
      desc: "Deep assessment of corporate environment, target skill levels, compliance standards, and project schedule.",
    },
    {
      num: "02",
      title: "Candidate Sourcing",
      desc: "Multi-channel sourcing leveraging our database, partner offices in India & abroad, and job portals.",
    },
    {
      num: "03",
      title: "Screening & Trade Selection",
      desc: "Conducting trade tests, medical examinations, and background verification to validate expertise.",
    },
    {
      num: "04",
      title: "Deployment & Support",
      desc: "Managing emigration clearances, visa stamping, flight booking, and ongoing post-placement monitoring.",
    },
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            What We Do
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            Our Services
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Services</span>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Corporate Capabilities
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Professional Manpower Offerings
            </h2>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Delivering comprehensive recruitment and manpower solutions tailored to global workforce requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-primary-dark border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col gap-5 shadow-lg overflow-hidden gold-shadow-hover"
                >
                  {/* Decorative background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="w-12 h-12 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0 relative z-10">
                    <Icon className="text-gold-500 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                      {service.desc}
                    </p>
                  </div>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-auto text-xs font-bold text-gold-500 hover:text-gold-400 flex items-center gap-1.5 hover:gap-2.5 transition-all relative z-10"
                  >
                    Read Details <ArrowRight size={13} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-24 bg-primary-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
            Workflow Execution
          </span>
          <h2 className="text-3xl font-serif font-black text-white mb-16">
            Our Structured Recruitment Process
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left max-w-6xl mx-auto">
            {workflowSteps.map((item, index) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-primary border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 transition-all flex flex-col gap-4 shadow-lg"
              >
                <span className="font-mono text-3xl font-black text-gold-500/10 absolute top-4 right-5 select-none">
                  {item.num}
                </span>
                <div className="w-9 h-9 rounded-lg bg-gold-500/5 border border-gold-500/15 flex items-center justify-center font-bold text-gold-500 text-xs shrink-0">
                  {item.num}
                </div>
                <h3 className="text-sm font-bold text-white mt-2">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-primary text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-gold rounded-3xl p-10 sm:p-16 border border-gold-500/15 max-w-4xl mx-auto shadow-2xl relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-white mb-4">
              Let’s Build Your Workforce With Us!
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Partner with Golden Manpower Consultants for reliable recruitment solutions, timely manpower deployment, and end-to-end compliance support for your projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold py-3.5 px-8 rounded-full shadow-md shadow-gold-500/10"
              >
                Connect With Us
              </Link>
              <a
                href="mailto:info@goldenmanpower.com"
                className="bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 text-xs font-bold py-3.5 px-8 rounded-full transition-colors"
              >
                Email Inquiry: info@goldenmanpower.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
