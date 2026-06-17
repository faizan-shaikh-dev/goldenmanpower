"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Shield, UserCheck, HeartHandshake } from "lucide-react";

export default function MdMessageClient() {
  const leadershipValues = [
    {
      title: "Ethical Sourcing",
      desc: "Strict adherence to international human rights guidelines and transparent contract disclosures.",
      icon: Shield
    },
    {
      title: "Compliance Management",
      desc: "Comprehensive coordination of visa, emigration clearances, and statutory wage registers.",
      icon: UserCheck
    },
    {
      title: "Client Partnership",
      desc: "Building long-term, high-trust alliances built on transparency and workforce delivery.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Leadership Communication
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            MD Message
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">MD Message</span>
          </div>
        </div>
      </section>

      {/* Message Content */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* MD Profile Left */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex flex-col items-center text-center gap-4 bg-primary-dark border border-white/5 rounded-2xl p-8 shadow-xl sticky top-28"
            >
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 p-0.5 shadow-md shadow-gold-500/5">
                <div className="w-full h-full bg-primary-dark rounded-full flex items-center justify-center">
                  <Users size={40} className="text-gold-500" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-serif">Ashish K. Singh</h3>
                <p className="text-xs text-gold-500 font-semibold uppercase tracking-wider">Managing Director</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Golden Manpower Consultants</p>
              </div>
              <div className="border-t border-white/5 w-full pt-4 mt-2 flex flex-col gap-1 text-[11px] text-slate-400">
                <span>Founded: 2006</span>
                <span>Offices: UAE & India</span>
                <span className="text-gold-500">Government Approved Licence</span>
              </div>
            </motion.div>

            {/* Message Right */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 flex flex-col gap-6 text-left"
            >
              <div className="border-l-4 border-gold-500 pl-5 mb-2">
                <p className="text-slate-300 text-sm font-semibold italic">
                  "Connect with Golden Manpower Consultants to explore trusted, ethical, and professionally driven recruitment partnerships."
                </p>
              </div>

              <div className="text-slate-400 text-sm leading-relaxed flex flex-col gap-6">
                <p>
                  We take our commitment to corporate responsibility very seriously, as it forms the foundation of our organizational culture and long-term success. This commitment enables us to attract, retain, and continuously develop high-quality talent across the UAE, Gulf region, and other international markets. By fostering a transparent, ethical, and inclusive recruitment environment, we ensure that our workforce is empowered to perform at the highest professional standards.
                </p>
                <p>
                  Our HR Outsourcing and manpower services are structured to deliver best-in-class workforce solutions, seamlessly integrated with our clients' technical operations and infrastructure projects. Through carefully designed processes, compliance-driven practices, and ongoing post-placement monitoring, we support our clients in achieving operational efficiency, crew stability, and sustainable growth.
                </p>
                <p>
                  At GMC, we do not view ourselves merely as vendors. We act as strategic growth enablers, ensuring the success of your industrial goals through ethical personnel selection.
                </p>
              </div>

              <div className="mt-4 border-t border-white/5 pt-6 flex flex-col items-start gap-1">
                <span className="font-serif font-bold text-white">Ashish K. Singh</span>
                <span className="text-xs text-slate-500">Managing Director, GMC Group</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Driven by Ethics Section */}
      <section className="py-24 bg-primary-dark border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-8 flex flex-col gap-4 text-left">
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Since 2006
              </span>
              <h2 className="text-3xl font-serif font-black text-white">
                Leadership Driven by Ethics & Accountability
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                At Golden Manpower Consultants, leadership is built on responsibility, long-term vision, and ethical execution. Since our inception, we have focused on creating sustainable workforce solutions that support our clients' operational goals while ensuring compliance and candidate welfare.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="py-3 px-6 rounded-2xl bg-primary border border-white/5 text-center">
                <div className="text-2xl font-black text-gold-500">18+ Years</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-0.5">
                  Corporate Stability
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadershipValues.map((val, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary border border-white/5 rounded-2xl p-8 text-left hover:border-gold-500/25 transition-all flex flex-col gap-4 shadow-md"
              >
                <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <val.icon className="text-gold-500 w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{val.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
