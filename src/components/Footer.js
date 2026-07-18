import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Linkedin, Facebook, Instagram, FileText } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "MD Message", href: "/md-message" },
    { name: "Clients", href: "/clients" },
    { name: "Employers", href: "/employers" },
    { name: "Job Seekers", href: "/job-seekers" },
    { name: "Contact Us", href: "/contact" },
  ];

  const services = [
    { name: "Executive Search", href: "/services/executive-search" },
    { name: "Labour Contracting", href: "/services/labour-contracting" },
    { name: "Document Attestation", href: "/services/document-attestation" },
    { name: "Domestic Recruitment", href: "/services/domestic-recruitment" },
    { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
    { name: "Recruitment & Bulk Hiring", href: "/services/recruitment" },
  ];

  return (
    <footer className="bg-primary-dark text-slate-300 border-t-2 border-gold-500/30">
      {/* Top Banner / Sourcing Countries */}
      <div className="border-b border-gold-500/10 py-8 bg-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-sm font-semibold text-gradient-gold tracking-wider uppercase mb-1">
                Global Sourcing Network
              </h4>
              <p className="text-xs text-slate-400">
                Deploying qualified talent from multiple recruitment corridors.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
              {["India", "UAE", "Nepal", "Sri Lanka", "Kenya", "Uganda", "Ghana", "Qatar", "Oman"].map(
                (country) => (
                  <span
                    key={country}
                    className="text-[11px] font-medium bg-primary py-1 px-3 rounded-full border border-gold-500/20 text-slate-300 shadow-sm hover:border-gold-500/40 hover:text-gold-400 transition-colors"
                  >
                    {country}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Brief */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="flex flex-col justify-center shrink-0">
                <span className="font-serif font-bold text-2xl tracking-wider text-gradient-gold leading-none mb-1">
                  MASHA ALLAH
                </span>
                <span className="text-xs text-slate-300 tracking-widest font-sans uppercase">
                  Tours & Travels
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-slate-400">
              Masha Allah Tours & Travels is a government-licensed recruitment agency registered with the Ministry of
              External Affairs, India. We deliver ethical, compliant, and highly stable workforce solutions for global employers.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500/10 hover:text-gold-400 flex items-center justify-center transition-colors border border-white/5"
                aria-label="Facebook"
              >
                <Facebook size={14} />
              </a>
              <a
                href="https://www.linkedin.com/company/golden-manpower-consultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500/10 hover:text-gold-400 flex items-center justify-center transition-colors border border-white/5"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-gold-500/10 hover:text-gold-400 flex items-center justify-center transition-colors border border-white/5"
                aria-label="Instagram"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 hover:text-gold-400 hover:translate-x-1 transition-all"
                  >
                    <ArrowRight size={10} className="text-gold-500 shrink-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-6 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1 hover:text-gold-400 hover:translate-x-1 transition-all"
                  >
                    <ArrowRight size={10} className="text-gold-500 shrink-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold text-white tracking-widest uppercase mb-2 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-gold-500">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3.5 text-xs text-slate-400">
              <div className="flex gap-2">
                <MapPin size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Head Office (India):</strong>
                  F91, 1st Floor, Kohinoor City Mall,<br />
                  LBS Marg, Kurla (W),<br />
                  Mumbai – 400077
                </div>
              </div>
              <div className="flex gap-2 mt-1">
                <FileText size={16} className="text-gold-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block mb-0.5">Registration Number:</strong>
                  Regd. No. B-0885/MUM/PER/1000+/5/7939/2007
                </div>
              </div>
              <div className="flex items-center gap-2 border-t border-white/5 pt-3.5 mt-1">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a href="tel:02240029606" className="hover:text-gold-400 transition-colors">
                  022-4002-9606
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a href="mailto:mashaallah551@yahoo.com.in" className="hover:text-gold-400 transition-colors">
                  mashaallah551@yahoo.com.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-gold-500/10 py-6 bg-black/5 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p>© {currentYear} Masha Allah Tours & Travels. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600 mt-1">
              Registered Lic. No: B-0384/MUM/PER/1000+/5/8135/2008 (Ministry of External Affairs, Govt. of India).
            </p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-slate-400">Privacy Policy</span>
            <span className="hover:text-slate-400">Terms of Service</span>
            <span className="text-slate-600">|</span>
            <span className="text-[10px] text-slate-600">
              Designed by Paloji Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
