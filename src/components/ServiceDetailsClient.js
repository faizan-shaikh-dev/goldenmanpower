"use client";

import Link from "next/link";
import {
  CheckCircle2,
  ChevronLeft,
  Briefcase,
  Layers,
  Search,
  HardHat,
  FileText,
  UserCheck,
  Building,
  Users2,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

const iconMap = {
  Search,
  HardHat,
  FileText,
  UserCheck,
  Building,
  Users2,
};

export default function ServiceDetailsClient({ slug, data }) {
  const Icon = iconMap[data.icon] || Search;

  return (
    <div className="w-full bg-primary-dark">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-xs font-bold text-gold-400 hover:text-gold-300 mb-4 cursor-pointer"
          >
            <ChevronLeft size={14} /> Back to Services
          </Link>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-2">
            {data.title}
          </h1>
          <p className="text-xs text-gold-500 font-bold uppercase tracking-widest">{data.subtitle}</p>
        </div>
      </section>

      {/* Main content grid */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Details Left */}
            <div className="lg:col-span-7 flex flex-col gap-8 text-left">
              <div className="flex items-center gap-4 border-b border-white/5 pb-6">
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                  <Icon className="text-gold-500 w-7 h-7" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Overview</span>
                  <h2 className="text-xl font-bold text-white font-serif">{data.title} Solutions</h2>
                </div>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">{data.desc}</p>

              {/* Pillars/Features */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Layers size={14} className="text-gold-500" /> Key Pillars of Our Service
                </h3>
                <div className="flex flex-col gap-3">
                  {data.features.map((feature, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed font-semibold">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors */}
              <div className="flex flex-col gap-4 border-t border-white/5 pt-8 mt-2">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Briefcase size={14} className="text-gold-500" /> Core Sector Focus
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {data.sectors.map((sector) => (
                    <span
                      key={sector}
                      className="text-xs font-semibold bg-primary-dark border border-white/10 rounded-full py-1.5 px-4 text-slate-300"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form Right */}
            <div className="lg:col-span-5 w-full sticky top-28">
              <div className="mb-6 p-5 border border-white/5 rounded-2xl bg-primary-dark">
                <h4 className="text-xs font-bold text-gold-500 uppercase tracking-widest mb-1">Direct Action</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Submit this requirement form. Our project manager will follow up with deployment quotes and sourcing timelines.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
