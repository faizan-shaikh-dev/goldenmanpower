"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Globe, Building2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  const offices = [
    // {
    //   region: "OVERSEAS OFFICE – UAE",
    //   name: "Masha Allah Tours & Travels Recruitment LLC FZ",
    //   address: "Meydan Grandstand, 6th Floor, Meydan Road, Nad Al Sheba 1, Dubai, UAE.",
    //   phone: "+971 56 765 2561",
    //   landline: "+971 04 224 8016",
    //   whatsapp: "+971 58 574 5677",
    //   email: "mashaallah551@yahoo.com.in",
    // },
    {
      region: "HEAD OFFICE – INDIA",
      name: "Masha Allah Tours & Travels",
      address: "F91, 1st Floor, Kohinoor City Mall, LBS Marg, Kurla (W), Mumbai – 400077",
      phone: "+91 9326899470",
      email: "info@Mashaallah.in",
    },

  ];

  const details = {
    indiaOffices: ["Mumbai (Al Dayem Tour & Travel, Nagpada)", "Jamshedpur (Jharkhand)"],
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
        {/* Background Image Banner */}
        <div className="absolute inset-0 z-0">
          <img
            src="/header-bg.png"
            alt="Contact GMC"
            className="w-full h-full object-cover opacity-15 brightness-75 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/60 to-transparent" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none z-0" />

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
                      {office.whatsapp && (
                        <div className="flex gap-2 items-center">
                          <svg
                            viewBox="0 0 24 24"
                            width="14"
                            height="14"
                            fill="currentColor"
                            className="text-gold-500 shrink-0"
                          >
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.418 1.451 5.514 0 10.002-4.486 10.006-10 0-2.672-1.041-5.184-2.93-7.076-1.89-1.892-4.402-2.933-7.078-2.933-5.513 0-10.002 4.487-10.006 10-.001 1.86.486 3.68 1.41 5.281l-.952 3.479 3.582-.942zm12.355-6.52c-.3-.15-1.77-.875-2.04-.975-.27-.1-.465-.15-.66.15-.195.3-.755.975-.925 1.175-.17.2-.34.225-.64.075-.3-.15-1.265-.465-2.41-1.485-.89-.795-1.49-1.78-1.665-2.08-.175-.3-.02-.46.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.66-1.59-.9-2.175-.235-.565-.475-.487-.66-.496-.17-.008-.365-.01-.56-.01-.195 0-.515.075-.78.365-.265.29-1.01.99-1.01 2.415 0 1.425 1.035 2.8 1.18 2.985.145.185 2.035 3.11 4.93 4.36.685.295 1.22.47 1.635.6.69.22 1.315.19 1.81.115.55-.085 1.77-.725 2.02-1.415.25-.69.25-1.285.175-1.415-.075-.13-.27-.23-.57-.38z" />
                          </svg>
                          <a href={`https://wa.me/${office.whatsapp.replace(/[^\d]/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                            {office.whatsapp}
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

      {/* Google Maps Section */}
      <section className="py-20 bg-primary-dark border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
              Location Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-black text-white">
              Find Our Mumbai Emigration Office (MEO)
            </h2>
            <p className="text-slate-400 text-xs mt-2 leading-relaxed">
              Al Dayem Tour & Travel Enterprise, -4/6, Irshad Palace, Shop No. 3/5, 16 Varsova Street, Behind Zahoora Sweets (Vodaphone Shop Upper), Belasis Road, Mumbai - 400008.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] rounded-3xl overflow-hidden border border-white/5 bg-primary/40 shadow-2xl relative group"
          >
            <iframe
              src="https://maps.google.com/maps?q=Al%20Dayem%20Tour%20%26%20Travel%20Enterprise%2C%20Irshad%20Palace%2C%2016%20Varsova%20Street%2C%20Behind%20Zahoora%20Sweets%2C%20Belasis%20Road%2C%20Mumbai%20400008&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumbai Emigration Office (MEO) Map"
              className="grayscale contrast-[1.1] invert-[0.92] opacity-80 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-700 ease-out"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
