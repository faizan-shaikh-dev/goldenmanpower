"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, Award, Facebook, Linkedin, Instagram, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when page changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Leadership Vision", href: "/md-message" },
  ];

  const services = [
    { name: "Executive Search", href: "/services/executive-search" },
    { name: "Labour Contracting", href: "/services/labour-contracting" },
    { name: "Document Attestation", href: "/services/document-attestation" },
    { name: "Domestic Recruitment", href: "/services/domestic-recruitment" },
    { name: "HR Outsourcing", href: "/services/hr-outsourcing" },
    { name: "Recruitment", href: "/services/recruitment" },
  ];

  const otherLinks = [
    { name: "Clients", href: "/clients" },
    { name: "Employers", href: "/employers" },
    { name: "Job Seekers", href: "/job-seekers" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <>
      {/* Top Banner Contact Details */}
      <div className="hidden sm:block w-full bg-primary-dark border-b border-white/5 py-3 px-4 md:px-8 text-[11px] text-slate-400 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-slate-200 tracking-wide">
            Masha Allah Tours & Travels
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase">FOLLOW US :</span>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={12} />
              </a>
              <a
                href="https://www.linkedin.com/company/golden-manpower-consultants/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={12} />
              </a>
              <a
                href="#"
                className="hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${isScrolled
            ? "bg-primary-dark/95 backdrop-blur-md py-3 border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-primary-dark/90 backdrop-blur-md py-5 border-b border-white/5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center group shrink-0">
            <div className="flex flex-col justify-center group-hover:scale-105 transition-transform duration-300 py-1">
              <span className="font-serif font-bold text-lg xl:text-2xl 2xl:text-3xl tracking-wider text-gradient-gold leading-none mb-0.5 whitespace-nowrap">
                MASHA ALLAH
              </span>
              <span className="text-[9px] xl:text-[11px] 2xl:text-xs text-slate-300 tracking-widest font-sans uppercase whitespace-nowrap">
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-5 shrink-0">
            <ul className="flex items-center gap-3 xl:gap-5 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative py-2 transition-colors duration-200 whitespace-nowrap ${pathname === link.href
                        ? "text-gold-400"
                        : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}

              {/* Services Dropdown */}
              <li
                className="relative py-2 group"
                onMouseEnter={() => setActiveDropdown(true)}
                onMouseLeave={() => setActiveDropdown(false)}
              >
                <Link
                  href="/services"
                  onClick={() => setActiveDropdown(false)}
                  className={`relative flex items-center gap-1 transition-colors duration-200 cursor-pointer whitespace-nowrap ${pathname.startsWith("/services")
                      ? "text-gold-400"
                      : "text-slate-300 hover:text-white"
                    }`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-300 ${activeDropdown ? "rotate-180 text-gold-400" : "text-slate-400"
                      }`}
                  />
                  {pathname.startsWith("/services") && (
                    <motion.span
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {activeDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute left-0 mt-3 w-64 glass rounded-xl overflow-hidden shadow-2xl z-50 py-2"
                    >
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600" />
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`block px-5 py-2.5 text-xs text-slate-300 hover:bg-gold-500/10 hover:text-gold-300 transition-colors border-l-2 ${pathname === item.href
                              ? "border-gold-500 bg-gold-500/5 text-gold-400"
                              : "border-transparent"
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {otherLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`relative py-2 transition-colors duration-200 whitespace-nowrap ${pathname === link.href
                        ? "text-gold-400"
                        : "text-slate-300 hover:text-white"
                      }`}
                  >
                    {link.name}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="activeNavLine"
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-gold-400 hover:border-gold-500/30 hover:bg-gold-500/5 active:scale-90 transition-all duration-300 cursor-pointer flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={16} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={16} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <Link
              href="/contact"
              className="bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold px-5 py-2.5 rounded-full shadow-md shadow-gold-500/20 whitespace-nowrap"
            >
              Hire Talent
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none cursor-pointer flex items-center justify-center"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mounted && theme === "light" ? (
                  <motion.div
                    key="moon-mobile"
                    initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun-mobile"
                    initial={{ rotate: 45, opacity: 0, scale: 0.8 }}
                    animate={{ rotate: 0, opacity: 1, scale: 1 }}
                    exit={{ rotate: -45, opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <a
              href="tel:02240029606"
              className="sm:hidden text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-full bg-primary border-l border-white/10 z-50 p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col justify-center shrink-0 py-1">
                      <span className="font-serif font-bold text-xl tracking-wider text-gradient-gold leading-none mb-1">
                        MASHA ALLAH
                      </span>
                      <span className="text-[11px] text-slate-300 tracking-widest font-sans uppercase">
                        Tours & Travels
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Navigation
                    </span>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-1.5 transition-colors ${pathname === "/" ? "text-gold-400" : "text-slate-300"
                        }`}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-1.5 transition-colors ${pathname === "/about" ? "text-gold-400" : "text-slate-300"
                        }`}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/md-message"
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold py-1.5 transition-colors ${pathname === "/md-message" ? "text-gold-400" : "text-slate-300"
                        }`}
                    >
                      Leadership Vision
                    </Link>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Services
                    </span>
                    <div className="pl-3 border-l border-white/10 flex flex-col gap-2.5">
                      <Link
                        href="/services"
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-semibold py-1 transition-colors ${pathname === "/services" ? "text-gold-400" : "text-gold-500/80 hover:text-gold-400"
                          }`}
                      >
                        All Services
                      </Link>
                      {services.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`text-sm py-1 transition-colors ${pathname === item.href ? "text-gold-400" : "text-slate-400 hover:text-slate-300"
                            }`}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                      Partners & Careers
                    </span>
                    {otherLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-semibold py-1.5 transition-colors ${pathname === link.href ? "text-gold-400" : "text-slate-300"
                          }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </nav>
              </div>

              <div className="border-t border-white/5 pt-6 mt-8 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="w-full text-center bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-sm font-bold py-3 rounded-full"
                >
                  Hire Talent
                </Link>
                <div className="text-center text-xs text-slate-400 flex flex-col gap-1.5">
                  <a href="tel:02240029606" className="hover:text-gold-400">
                    022-4002-9606
                  </a>
                  <a href="mailto:mashaallah551@yahoo.com.in" className="hover:text-gold-400">
                    mashaallah551@yahoo.com.in
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
