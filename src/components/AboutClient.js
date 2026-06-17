"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Award, Compass, Shield, Check, Sparkles } from "lucide-react";

export default function AboutClient() {
  const whyPoints = [
    { title: "Ethical Recruitment", text: "We follow strict fair hiring compliance and maintain full transparency with both employers and candidates." },
    { title: "MEA Approved Licensing", text: "Officially authorized under the Ministry of External Affairs, Government of India, for overseas placement." },
    { title: "Industry-Ready Workforce", text: "All candidates undergo technical, professional, and language assessment before final shortlisting." },
    { title: "International Network", text: "Proven capability to source across India, Nepal, Sri Lanka, and East Africa for diverse requirements." },
    { title: "End-to-End Mobilization", text: "From visa audits, travel coordination, and emigration clearance, we manage the entire deployment process." },
    { title: "Operational Continuity", text: "Strong candidates and structured pre-induction training ensure long-term stability and minimal attrition." }
  ];

  const stats = [
    { value: "25k+", label: "Candidates Deployed Globally" },
    { value: "95%", label: "Client Retention Rate" },
    { value: "12+", label: "Countries Served" },
    { value: "18+", label: "Years of Excellence" }
  ];

  return (
    <div className="w-full">
      {/* Page Header Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Since 2006
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            About Us
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">About Us</span>
          </div>
        </div>
      </section>

      {/* Main Intro Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column - Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 flex flex-col gap-6 text-left"
            >
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-gold-500 animate-pulse" />
                <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                  18 Years of Experience
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Trusted Global Manpower Recruitment & Workforce Solutions
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Golden Manpower Consultants (GMC) is a premier recruitment organization registered under the Ministry of External Affairs, Government of India. Over nearly two decades, we have partnered with businesses across the GCC and internationally, supplying vetted talent matching exact industry certifications.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                We handle the sourcing, skill evaluation, documentation processing, and legal deployment pipelines with zero compromise. By keeping candidate welfare at the heart of our operations, we ensure that companies receive stable and productive employees.
              </p>
              <div className="flex flex-col gap-3.5 border-t border-white/5 pt-6 mt-2">
                {[
                  "Government authorized Overseas Recruitment Agent",
                  "Expertise in large-scale blue-collar & white-collar hiring",
                  "100% statutory clearance and compliance guarantee"
                ].map((pt, i) => (
                  <div key={i} className="flex gap-2.5 items-center">
                    <div className="w-5 h-5 rounded-full bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
                      <Check size={11} className="text-gold-500" />
                    </div>
                    <span className="text-xs font-semibold text-slate-300">{pt}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Highlight Box */}
            <motion.div 
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass-gold border border-gold-500/15 rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-6 shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                  <Award size={32} className="text-gold-500" />
                </div>
                <div>
                  <h3 className="text-4xl font-extrabold text-white tracking-tight">25,000+</h3>
                  <span className="text-xs text-gold-500 font-bold uppercase tracking-wider block mt-1">
                    Successful Deployments
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
                  Mobilizing skilled craftsmen, technicians, engineers, and administrative staff safely across multiple international borders.
                </p>
                <Link
                  href="/contact"
                  className="bg-gradient-gold text-primary-dark hover:brightness-110 font-bold text-xs py-3 px-6 rounded-xl transition-all shadow-md shadow-gold-500/10"
                >
                  Consult Our Experts
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose Section: Mission & Vision */}
      <section className="py-24 bg-primary-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Our Purpose
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Company Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col gap-5 shadow-lg group hover:border-gold-500/25 transition-all"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-3xl pointer-events-none group-hover:scale-125 transition-transform" />
              <div className="w-12 h-12 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center">
                <Compass size={22} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Our Mission</h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  To supply ethical, compliant, and transparent manpower solutions. We bridge the gap between quality candidates seeking stable overseas placements and global employers looking for verified, experienced crew.
                </p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-gold-500 hover:text-gold-400 inline-flex items-center gap-1 mt-auto">
                Get in touch →
              </Link>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="bg-primary border border-white/5 rounded-2xl p-8 relative overflow-hidden flex flex-col gap-5 shadow-lg group hover:border-gold-500/25 transition-all"
            >
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold-500/5 rounded-bl-3xl pointer-events-none group-hover:scale-125 transition-transform" />
              <div className="w-12 h-12 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center">
                <Shield size={22} className="text-gold-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">Our Vision</h3>
                <p className="text-xs leading-relaxed text-slate-400">
                  To establish GMC as a globally recognized symbol of trust and integrity in international recruitment. We aim to support industrial progress by providing high-performing, safe, and content workforces.
                </p>
              </div>
              <Link href="/contact" className="text-xs font-bold text-gold-500 hover:text-gold-400 inline-flex items-center gap-1 mt-auto">
                Get in touch →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Why GMC
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Why Global Businesses Partner With Us
            </h2>
            <p className="text-slate-400 text-xs mt-3">
              Combining compliance protocols, ethical guidelines, and sourcing expertise to deliver value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyPoints.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-primary-dark border border-white/5 rounded-2xl p-6 hover:border-gold-500/20 transition-all flex flex-col gap-3 shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center font-bold text-gold-500 text-xs">
                  {index + 1}
                </div>
                <h3 className="text-sm font-bold text-white mt-2">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-primary-dark text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-gradient-gold mb-12">
            Our Achievements Through 18+ Years of Manpower Excellence
          </h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
            {stats.map((item, index) => (
              <div key={index} className="flex flex-col gap-2 p-6 rounded-2xl bg-primary border border-white/5">
                <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">{item.value}</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="border border-white/10 rounded-2xl p-8 sm:p-12 glass max-w-3xl mx-auto text-center relative z-10">
            <h3 className="text-lg font-bold text-white mb-2">Need Recruitment Support or Consultation?</h3>
            <p className="text-xs text-slate-400 mb-6">
              Connect with our deployment specialists to analyze job requirements, compliance parameters, and project costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:cv@goldenmanpower.com"
                className="bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold py-3.5 px-6 rounded-full inline-block"
              >
                Email CV: cv@goldenmanpower.com
              </a>
              <a
                href="mailto:info@goldenmanpower.com"
                className="bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 text-xs font-bold py-3.5 px-6 rounded-full inline-block transition-colors"
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
