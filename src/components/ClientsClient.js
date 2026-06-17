"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, Building2 } from "lucide-react";

export default function ClientsClient() {
  const valueProps = [
    {
      title: "Industry Expertise",
      desc: "Deep recruitment expertise across oil & gas, civil construction, healthcare, hospitality, seaports, logistics, manufacturing, and engineering sectors.",
    },
    {
      title: "Proven Track Record",
      desc: "670+ successful corporate placements and long-term international partnerships built on performance, transparent communication, and speed.",
    },
    {
      title: "Global Client Network",
      desc: "Trusted by major employers across India, the Middle East (UAE, Qatar, Oman), and East Africa for compliant and timely workforce delivery.",
    },
    {
      title: "End-to-End Coordination",
      desc: "Ongoing post-deployment support, crew orientation audits, and regulatory tracking to ensure operational continuity and complete peace of mind.",
    },
  ];

  const planningPoints = [
    {
      title: "Government Licensed Agency",
      desc: "Legally compliant overseas recruiting under Ministry of External Affairs, India guidelines.",
    },
    {
      title: "Trusted Global Partner",
      desc: "Aligning personnel selection to match international certification and language standards.",
    },
    {
      title: "Long-Term Relationships",
      desc: "Building lasting alliances through compliance audits, transparent commissions, and replacement guarantees.",
    },
    {
      title: "Strategic Planning",
      desc: "Customized manpower strategies aligned with project phases, peak cycles, and mobilizations.",
    },
  ];

  const clientLogoPlaceholders = [
    "Gulf Infrastructure Corp",
    "Emirates Petrochemical Ltd",
    "Oman Marine Logistics",
    "Kenya Power & Ports",
    "GCC Civil Contracting",
    "Nairobi Hospitality Group",
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Our Partners
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            Clients
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Clients</span>
          </div>
        </div>
      </section>

      {/* Intro & Value Props */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Client Value
            </span>
            <h2 className="text-3xl font-serif font-black text-white">
              Why Leading Organizations Choose GMC
            </h2>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              Delivering structured, ethical, and efficient manpower solutions that create long-term value for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {valueProps.map((prop, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-primary-dark border border-white/5 rounded-2xl p-8 hover:border-gold-500/25 transition-all flex flex-col gap-3 shadow-md"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-500/5 border border-gold-500/15 flex items-center justify-center shrink-0">
                  <Sparkles size={16} className="text-gold-500" />
                </div>
                <h3 className="text-base font-bold text-white mt-2">{prop.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{prop.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions and Planning Section */}
      <section className="py-24 bg-primary-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Box text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 flex flex-col gap-6 text-left"
            >
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Compliance Driven
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Solutions Driven by Experience Across Global Markets
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                We deliver structured, ethical, and result-oriented recruitment solutions tailored to client-specific workforce requirements, ensuring long-term operational success and workforce stability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/5 pt-6 mt-2">
                {planningPoints.map((pt, i) => (
                  <div key={i} className="flex gap-2.5 items-start">
                    <span className="text-gold-500 select-none font-bold">✓</span>
                    <div>
                      <h4 className="text-xs font-bold text-white mb-0.5">{pt.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-normal">{pt.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 bg-gradient-gold text-primary-dark hover:brightness-110 text-xs font-bold py-3 px-6 rounded-full"
                >
                  More About GMC <ChevronRight size={13} />
                </Link>
              </div>
            </motion.div>

            {/* Right mock logo display grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative glass border border-white/10 rounded-3xl p-8 shadow-2xl flex flex-col gap-6">
                <div>
                  <h4 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">Our Networks</h4>
                  <h3 className="text-base font-bold text-white font-serif">Corporate Partnerships</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {clientLogoPlaceholders.map((logo, i) => (
                    <div
                      key={i}
                      className="bg-primary border border-white/5 py-4 px-3 rounded-xl flex items-center justify-center text-center text-[10px] font-bold text-slate-400 hover:text-gold-400 hover:border-gold-500/20 transition-all shadow-sm"
                    >
                      <Building2 size={12} className="mr-1.5 shrink-0" /> {logo}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
