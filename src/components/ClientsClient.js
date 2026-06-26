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

  const clientsList = [
    { name: "Al Barrak Group", logo: "/clients-logo/al barrak .png" },
    { name: "Bingatti Holding", logo: "/clients-logo/Bingati .png" },
    { name: "Danat Group", logo: "/clients-logo/Danat Group .png" },
    { name: "Hills & Fort", logo: "/clients-logo/Hills And Fort .jpeg" },
    { name: "Maden Gold", logo: "/clients-logo/Maden .webp" },
    { name: "Oman Plastic Industries", logo: "/clients-logo/Oman Plastic Industries .jpeg" },
    { name: "Gulf Contracting", logo: "/clients-logo/gulf .png" },
    { name: "Saudi Binladen Group", logo: "/clients-logo/saudi-binladen-group-logo-png_seeklogo-122930.png" },
    { name: "Siafa Dates", logo: "/clients-logo/siafa dates .jpeg" },
    { name: "SOS HR Solutions", logo: "/clients-logo/sos_hr_solutions_logo.jpeg" },
    { name: "Tadmur Holding", logo: "/clients-logo/tadmur_holding_logo.jpeg" },
    { name: "Vision Morocco", logo: "/clients-logo/vision morocco .jpeg" },
    { name: "Manpower Saudi Arabia", logo: "/clients-logo/manpowersaudiarabia_logo.jpeg" },
    { name: "Salfo & Associates", logo: "/clients-logo/salfo__associates_sa__logo.jpeg" },
    { name: "JAL International", logo: "/clients-logo/jal .png" },
    { name: "Human Resources Company", logo: "/clients-logo/human resources compney .jpeg" },
    { name: "United Dairy Company", logo: "/clients-logo/1631341583109.jpeg" },
    { name: "National Recruitment Corp", logo: "/clients-logo/1698670332350.jpeg" },
    { name: "Al Jaber Contracting", logo: "/clients-logo/LOGO-200x200.jpeg" }
  ];

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <img
            src="/header-bg.png"
            alt="GMC Partners & Clients"
            className="w-full h-full object-cover opacity-15 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none z-0" />

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
                  {clientsList.slice(0, 6).map((client, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.85, y: 15 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: i * 0.05, 
                        type: "spring", 
                        stiffness: 100 
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: "rgba(212, 175, 55, 0.3)",
                        boxShadow: "0 10px 20px -10px rgba(212, 175, 55, 0.15)"
                      }}
                      className="bg-primary border border-white/5 py-3 px-4 rounded-xl flex items-center justify-center h-20 transition-all shadow-sm cursor-pointer group"
                    >
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-w-full max-h-full object-contain filter brightness-[0.8] group-hover:brightness-[1.1] transition-all duration-300"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Clients Full-Width Section */}
      <section className="py-24 bg-primary border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Corporate Portfolio
            </span>
            <h2 className="text-3xl font-serif font-black text-white font-serif">
              Our Esteemed Clients & Partners
            </h2>
            <p className="text-slate-400 text-xs mt-3 leading-relaxed">
              We are proud to partner with leading enterprises across the GCC and internationally, delivering skilled workforces that drive operational success.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientsList.map((client, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: (i % 6) * 0.04 
                }}
                whileHover={{ 
                  scale: 1.05,
                  borderColor: "rgba(212, 175, 55, 0.3)",
                  boxShadow: "0 12px 24px -12px rgba(212, 175, 55, 0.2)"
                }}
                className="bg-primary-dark border border-white/5 py-4 px-5 rounded-2xl flex items-center justify-center h-24 transition-all duration-300 shadow-md cursor-pointer group"
              >
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="max-w-full max-h-full object-contain filter brightness-[0.8] group-hover:brightness-[1.15] transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
