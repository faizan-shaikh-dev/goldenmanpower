"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Building2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  const offices = [
    {
      region: "OVERSEAS OFFICE – UAE",
      name: "Golden Manpower Recruitment LLC FZ",
      address: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba 1, Dubai, UAE.",
      phone: "+971 56 765 2561",
      landline: "+971 04 224 8016",
      email: "hruae@goldenmanpower.com",
    },
    {
      region: "HEAD OFFICE – INDIA",
      name: "Golden Manpower Consultants",
      address: "1A-201, Shree Ram Square, Above Tata Showroom, Vartak Road, Virar (West) – 401303, Maharashtra, India.",
      phone: "+91 97696 29783",
      email: "cv@goldenmanpower.com",
    },
  ];

  const details = {
    indiaOffices: ["Mumbai (Mint Road, Fort)", "Jamshedpur (Jharkhand)"],
    globalSourcing: [
      "Nepal",
      "Sri Lanka",
      "Qatar",
      "Oman",
      "Ghana",
      "Uganda",
      "Kenya",
      "Burundi",
      "Ethiopia",
      "Sierra Leone",
    ],
  };

  return (
    <div className="w-full">
      {/* Banner */}
      <section className="relative bg-primary-dark border-b border-white/5 py-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <span className="text-[10px] font-bold text-gold-500 tracking-widest uppercase block mb-2">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white mb-4">
            Contact Us
          </h1>
          <div className="text-xs text-slate-400 flex justify-center items-center gap-2">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="text-slate-600">/</span>
            <span className="text-white font-semibold">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Main Page Layout */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Office Cards & Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 flex flex-col gap-8 text-left"
            >
              <div>
                <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-2">
                  Global Locations
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
                  Visit Our Offices
                </h2>
                <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                  Our offices ensure seamless recruitment, attestation, and HR outsourcing support.
                </p>
              </div>

              {/* Office Cards */}
              <div className="flex flex-col gap-6">
                {offices.map((office, i) => (
                  <div
                    key={i}
                    className="relative bg-primary-dark border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col gap-4 shadow-md overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-gold-600 to-gold-400" />
                    <div>
                      <span className="text-[10px] font-bold text-gold-500 tracking-wider uppercase">
                        {office.region}
                      </span>
                      <h3 className="text-base font-bold text-white mt-1 font-serif">{office.name}</h3>
                    </div>
                    <div className="flex flex-col gap-3 text-xs text-slate-400 border-t border-white/5 pt-4">
                      <div className="flex gap-2">
                        <MapPin size={15} className="text-gold-500 shrink-0 mt-0.5" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex gap-2 items-center">
                        <Phone size={14} className="text-gold-500 shrink-0" />
                        <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="hover:text-gold-400 transition-colors">
                          {office.phone}
                        </a>
                      </div>
                      {office.landline && (
                        <div className="flex gap-2 items-center">
                          <Phone size={14} className="text-gold-500 shrink-0" />
                          <a href={`tel:${office.landline.replace(/\s+/g, "")}`} className="hover:text-gold-400 transition-colors">
                            Landline: {office.landline}
                          </a>
                        </div>
                      )}
                      <div className="flex gap-2 items-center">
                        <Mail size={14} className="text-gold-500 shrink-0" />
                        <a href={`mailto:${office.email}`} className="hover:text-gold-400 transition-colors">
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Sourcing network & Branches list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 pt-8 mt-2 text-xs">
                {/* Branches */}
                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-1.5">
                    <Building2 size={14} className="text-gold-500" /> India Branches
                  </h4>
                  <ul className="flex flex-col gap-2 text-slate-400">
                    {details.indiaOffices.map((branch) => (
                      <li key={branch} className="flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {branch}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sourcing Network */}
                <div>
                  <h4 className="font-bold text-white mb-3 flex items-center gap-1.5">
                    <Globe size={14} className="text-gold-500" /> Global Corridors
                  </h4>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-slate-400">
                    {details.globalSourcing.map((country) => (
                      <div key={country} className="flex gap-1.5 items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                        {country}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Sourcing Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-6 w-full sticky top-28"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
