"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Briefcase, Share2, Compass, FileCheck, ShieldAlert, HeartHandshake, FileSignature } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function JobSeekersClient() {
  const benefits = [
    {
      num: "001",
      title: "Verified Job Opportunities",
      desc: "Access genuine, legally compliant job openings with vetted employers across India and major international markets.",
      icon: Briefcase,
    },
    {
      num: "002",
      title: "Latest Job Feeds",
      desc: "Stay updated on active listings shared through our verified Facebook and LinkedIn corporate channels.",
      icon: Share2,
    },
    {
      num: "003",
      title: "Transparent Sourcing Process",
      desc: "Clear candidate pipeline stages covering technical screening, trade test selection, visa, and emigration.",
      icon: Compass,
    },
    {
      num: "004",
      title: "Resume Matching & Alerts",
      desc: "Submit your profile to our deployment desk and receive alerts as soon as an matching industrial vacancy opens.",
      icon: FileCheck,
    },
    {
      num: "005",
      title: "Ethical Sourcing Guarantee",
      desc: "Zero hidden commissions. We enforce fair contract disclosures, clear salary parameters, and legal compliance.",
      icon: ShieldAlert,
    },
    {
      num: "006",
      title: "Post-Placement Assistance",
      desc: "Continuous backing and on-site support to guarantee comfortable accommodation and smooth integration.",
      icon: HeartHandshake,
    },
  ];

  const requiredDocuments = [
    "Latest Professional CV / Resume",
    "Clear Scan of Passport (Front & Back, validity min 8 months)",
    "Educational Qualification Degrees / Trade School Diplomas",
    "Professional Experience & Recommendation Letters",
    "Recent Passport Size Photograph (White background)",
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/header-bg.png" 
            alt="Careers with GMC" 
            className="w-full h-full object-cover opacity-15 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Build Your Career
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            Job Seekers
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Job Seekers</span>
          </div>
        </div>
      </section>

      {/* Main Benefit Grid */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Candidate Values
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Why Candidates Trust Golden Manpower
            </h2>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Connecting skilled professionals with trusted employers for long-term career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.num}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-primary-dark border border-white/5 rounded-2xl p-8 hover:border-gold-500/25 transition-all flex flex-col gap-4 shadow-md group relative overflow-hidden"
                >
                  <span className="font-mono text-3xl font-black text-gold-500/10 absolute top-4 right-5 select-none group-hover:scale-105 transition-transform">
                    {benefit.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0">
                    <Icon className="text-gold-500 w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mt-1 group-hover:text-gold-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">{benefit.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sourcing and Application Documentation */}
      <section className="py-24 bg-primary-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Box documents */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6 text-left"
            >
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Application Requirements
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Preparing Your Application for Deployment
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                To fast-track your profile registration and match it with upcoming GCC or domestic jobs, ensure you have clear, scanned copies of the following documentation ready:
              </p>
              <div className="flex flex-col gap-3.5 mt-2 border-t border-white/5 pt-6">
                {requiredDocuments.map((doc, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <FileSignature size={15} className="text-gold-500 shrink-0" />
                    <span className="text-xs font-semibold text-slate-300">{doc}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Form Box */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6 text-left">
                <div>
                  <h4 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">Direct Submission</h4>
                  <h3 className="text-base font-bold text-white font-serif">Apply For Vacancies</h3>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Send your updated resume file directly to our deployment inbox: <strong className="text-white">cv@goldenmanpower.com</strong> or fill out this quick registration form below.
                </p>
                <div className="border-t border-white/5 pt-4">
                  <a
                    href="mailto:cv@goldenmanpower.com"
                    className="w-full text-center bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold py-3 px-6 rounded-xl inline-block"
                  >
                    Email Resume Now
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Submission */}
      <section className="py-24 bg-primary border-t border-white/5 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Candidate Form
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Candidate Profile Registration
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Register your profile details below. Under "Role Type" make sure to select "I am a Job Seeker".
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
