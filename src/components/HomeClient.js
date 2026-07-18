"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Globe2,
  CheckCircle,
  Briefcase,
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Zap,
  MessageSquare,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { ceo } from "@/data/leaders";

export default function HomeClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { label: "Years of Experience", value: "18+", icon: Award },
    { label: "Candidates Deployed", value: "25k+", icon: Users },
    { label: "Client Retention Rate", value: "95%", icon: TrendingUp },
    { label: "Countries Served", value: "12+", icon: Globe2 },
  ];

  const featuredServices = [
    {
      num: "01",
      name: "Document Attestation",
      desc: "End-to-end document attestation and verification services for overseas employment, ensuring legal compliance and smooth processing.",
      href: "/services/document-attestation",
    },
    {
      num: "02",
      name: "Domestic Recruitment",
      desc: "Permanent and temporary staffing solutions within India for skilled, semi-skilled, and professional workforce requirements.",
      href: "/services/domestic-recruitment",
    },
    {
      num: "03",
      name: "Executive Search",
      desc: "Specialized recruitment for senior management and mid-level leadership roles, matching corporate culture and strategy.",
      href: "/services/executive-search",
    },
    {
      num: "04",
      name: "Labour Contracting",
      desc: "Flexible supply of certified blue-collar and semi-skilled manpower for industrial, infrastructure, and project-based roles.",
      href: "/services/labour-contracting",
    },
  ];

  const whyChooseUs = [
    "Government-licensed recruitment agency (MEA approved)",
    "Ethical and strictly compliant hiring practices",
    "Industry-ready, trade-tested workforce sourcing",
    "Extensive sourcing network across South Asia & East Africa",
    "End-to-end mobilization, visa, and deployment support",
    "Proven track record of workforce stability and low attrition",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      desc: "Detailed evaluation of job profiles, technical requisites, compliance criteria, and recruitment timelines.",
    },
    {
      step: "02",
      title: "Screening & Trade Testing",
      desc: "Strict verification, skill testing at accredited centers, background checks, and medical screenings.",
    },
    {
      step: "03",
      title: "Deployment & Support",
      desc: "End-to-end handling of visa processing, flights, emigration clearances, and ongoing client feedback.",
    },
  ];

  return (
    <div className="relative w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-primary-dark">
        {/* Glow Patterns */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse-slow delay-500" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start text-left gap-6"
          >
            <span className="inline-flex items-center gap-1.5 py-1 px-3.5 rounded-full text-xs font-bold bg-gold-500/10 text-gold-400 border border-gold-500/20 uppercase tracking-widest">
              <ShieldCheck size={13} /> Government Licensed Recruitment Agency
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.15]">
              Reliable Manpower & <br />
              <span className="text-gradient-gold">Recruitment Solutions</span> <br />
              for Global Employers
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl">
              Masha Allah Tours & Travels is a premier recruitment organization registered under the Ministry of
              External Affairs, India. Since 2006, we have specialized in delivering ethical, compliant, and deployment-ready
              workforce solutions for domestic and international employers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
              <Link
                href="/contact"
                className="bg-gradient-gold text-primary-dark hover:brightness-110 hover:shadow-lg hover:shadow-gold-500/20 active:scale-95 transition-all text-sm font-bold py-3.5 px-8 rounded-full text-center"
              >
                Hire Talent
              </Link>
              <Link
                href="/job-seekers"
                className="bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 active:scale-95 transition-all text-sm font-bold py-3.5 px-8 rounded-full text-center"
              >
                Apply for Jobs →
              </Link>
            </div>
          </motion.div>

          {/* Quick Contact Form on Hero */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative py-12 bg-primary border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
                <div className="w-12 h-12 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center shrink-0">
                  <stat.icon className="text-gold-500 w-6 h-6" />
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Introduction Section */}
      <section className="py-24 bg-primary-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Grid 1: Images Mock/Branding */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 relative w-full flex justify-center py-6 sm:py-0"
            >
              <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
              
              <div className="relative w-full max-w-md">
                {/* Sourcing Image */}
                <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="/home3-img04.jpg" 
                    alt="GMC Sourcing Operations" 
                    className="w-full h-full object-cover brightness-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                </div>
                
                {/* Floating Licence Badge */}
                <div className="absolute -bottom-6 -right-2 sm:-right-6 border border-white/10 rounded-xl p-4 sm:p-5 glass max-w-[240px] sm:max-w-[260px] shadow-2xl z-20 hover:border-gold-500/30 transition-all duration-300">
                  <span className="text-[9px] font-bold text-gold-500 tracking-widest uppercase mb-1 block">
                    Regd License No.
                  </span>
                  <h4 className="text-[11px] sm:text-xs font-bold text-white mb-3 font-mono tracking-tight pb-1.5 border-b border-white/5">
                    B-0384/MUM/PER/1000+/5/8135/2008
                  </h4>
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
                      <Award size={14} className="text-gold-500" />
                    </div>
                    <div>
                      <h5 className="text-[10px] font-bold text-white leading-none">Ministry of External Affairs</h5>
                      <p className="text-[8px] text-slate-500 mt-0.5">Govt. of India Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Grid 2: About Copy */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Government-Licensed Manpower Agency
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Delivering Ethical & Compliant Recruitment Solutions Since 2006
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Masha Allah Tours & Travels is a professionally managed manpower organization. We specialize in sourcing,
                evaluating, and deploying skilled professionals who meet technical and compliance benchmarks across
                key industries worldwide.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Through ethical recruitment practices and structured pre-deployment processes, we guarantee workforce
                stability, reduce client attrition rates, and maintain long-term operational success for partners across
                the Middle East and India.
              </p>
              <div className="mt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 border-b border-gold-500/30 hover:border-gold-400 pb-1 transition-all"
                >
                  Discover More About Us <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD Message Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-gold rounded-3xl p-8 sm:p-14 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border border-gold-500/10">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gold-500/5 rounded-full blur-[80px] pointer-events-none" />

            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left gap-3.5">
              <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-gold-600 to-gold-400 p-0.5 shadow-xl shadow-gold-500/10 overflow-hidden shrink-0">
                <img 
                  src={ceo.image} 
                  alt={`${ceo.name}, ${ceo.title}`} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white font-serif">{ceo.name}</h4>
                <p className="text-xs text-gold-500 font-semibold tracking-wider uppercase">{ceo.title}</p>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col gap-5 text-left border-t lg:border-t-0 lg:border-l border-white/5 pt-8 lg:pt-0 lg:pl-10">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                Message From Leadership
              </span>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                "We take our commitment to corporate responsibility seriously, as it forms the foundation of our long-term
                success. Our services are structured to deliver best-in-class workforce solutions, seamlessly integrated
                with our recruitment operations. By fostering transparency and ethics, we ensure our clients achieve
                operational efficiency and sustainable growth."
              </p>
              <div className="mt-2">
                <Link
                  href="/md-message"
                  className="inline-flex items-center gap-1 bg-white/5 hover:bg-gold-500/10 text-white hover:text-gold-400 text-xs font-bold py-2.5 px-5 rounded-full border border-white/10 hover:border-gold-500/30 transition-all"
                >
                  Read Full Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-primary-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-2">
                Specialized Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white">
                Our Manpower Offerings
              </h2>
            </div>
            <Link
              href="/services"
              className="bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-95 transition-all text-xs font-bold py-3 px-6 rounded-full"
            >
              All Services +
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-primary hover:bg-primary-light border border-white/5 rounded-2xl p-8 hover:border-gold-500/30 transition-all duration-300 flex flex-col gap-4 shadow-lg gold-shadow-hover"
              >
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-mono font-extrabold text-gold-500/20 group-hover:text-gold-500/40 transition-colors">
                    {service.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-gold-500 group-hover:text-primary-dark flex items-center justify-center transition-all">
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-primary-dark" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors">
                  {service.desc}
                </p>
                <Link href={service.href} className="absolute inset-0 z-10" aria-label={`Read more about ${service.name}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us & HR Outsourcing */}
      <section className="py-24 bg-primary relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Why Choose GMC */}
            <div className="flex flex-col gap-6 text-left">
              <span className="text-xs font-bold tracking-widest text-gold-500 uppercase">
                Why Choose GMC
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Trusted Recruitment Partner for Global Workforce Solutions
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Masha Allah Tours & Travels is trusted by major employers across India and the GCC countries for ethical
                hiring, regulatory clarity, and stable manpower delivery.
              </p>
              <div className="flex flex-col gap-3.5 mt-2">
                {whyChooseUs.map((point, index) => (
                  <div key={index} className="flex gap-2.5 items-start">
                    <CheckCircle size={16} className="text-gold-500 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-300 leading-relaxed font-semibold">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* HR Outsourcing Box */}
            <div className="relative glass border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col gap-6">
              <div className="absolute -top-6 -right-6 w-28 h-28 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Briefcase size={22} className="text-gold-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-gold-400 tracking-widest uppercase mb-1 block">
                  Featured Service
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  End-to-End HR Outsourcing Solutions
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We manage payroll execution, statutory compliance filings, employee records, visa audits, and port manpower logistics.
                  Allow your business to focus on core operations while we administer your global teams.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 border-y border-white/5 py-5 my-1 text-left">
                <div>
                  <h5 className="text-xs font-bold text-white mb-0.5">Payroll Processing</h5>
                  <p className="text-[10px] text-slate-500">Statutory and wage compliance.</p>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-white mb-0.5">Statutory Audit</h5>
                  <p className="text-[10px] text-slate-500">Legal regulations alignment.</p>
                </div>
              </div>
              <Link
                href="/services/hr-outsourcing"
                className="w-full text-center bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 active:scale-95 transition-all text-xs font-bold py-3 rounded-xl"
              >
                Explore HR Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Process Section */}
      <section className="py-24 bg-primary-dark relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
            Hiring Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mb-16">
            Our Structured Recruitment Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
            {processSteps.map((item, index) => (
              <div
                key={index}
                className="relative bg-primary border border-white/5 rounded-2xl p-8 hover:border-gold-500/20 transition-colors shadow-lg"
              >
                <span className="absolute top-6 right-6 font-mono text-3xl font-extrabold text-gold-500/10">
                  {item.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-gold-500/5 border border-gold-500/10 flex items-center justify-center mb-6">
                  <Zap size={18} className="text-gold-500" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="text-xs font-bold tracking-widest text-gold-500 uppercase block mb-3">
            Client Review
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-white mb-10">
            What Our Partners Say
          </h2>

          <div className="relative p-8 sm:p-12 border border-white/10 rounded-2xl glass shadow-xl">
            <MessageSquare size={36} className="text-gold-500/20 absolute top-6 left-6" />
            <blockquote className="text-slate-200 text-sm sm:text-base leading-relaxed italic relative z-10">
              "Masha Allah Tours & Travels has been a highly dependable recruitment partner, supplying competent manpower
              within our scheduled project timelines while maintaining high ethical recruitment standards."
            </blockquote>
            <div className="mt-8">
              <h4 className="text-sm font-bold text-white">Mohammed Khalid</h4>
              <p className="text-[10px] text-slate-500 font-semibold tracking-wider uppercase">Project Client Representative</p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/971585745677"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-lg shadow-green-500/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute right-16 bg-[#000000]/80 backdrop-blur text-[#ffffff] text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-[#ffffff]/10">
          Chat With Us
        </span>
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className="text-[#ffffff]"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.498 1.45 5.418 1.451 5.514 0 10.002-4.486 10.006-10 0-2.672-1.041-5.184-2.93-7.076-1.89-1.892-4.402-2.933-7.078-2.933-5.513 0-10.002 4.487-10.006 10-.001 1.86.486 3.68 1.41 5.281l-.952 3.479 3.582-.942zm12.355-6.52c-.3-.15-1.77-.875-2.04-.975-.27-.1-.465-.15-.66.15-.195.3-.755.975-.925 1.175-.17.2-.34.225-.64.075-.3-.15-1.265-.465-2.41-1.485-.89-.795-1.49-1.78-1.665-2.08-.175-.3-.02-.46.13-.61.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.66-1.59-.9-2.175-.235-.565-.475-.487-.66-.496-.17-.008-.365-.01-.56-.01-.195 0-.515.075-.78.365-.265.29-1.01.99-1.01 2.415 0 1.425 1.035 2.8 1.18 2.985.145.185 2.035 3.11 4.93 4.36.685.295 1.22.47 1.635.6.69.22 1.315.19 1.81.115.55-.085 1.77-.725 2.02-1.415.25-.69.25-1.285.175-1.415-.075-.13-.27-.23-.57-.38z" />
        </svg>
      </a>
    </div>
  );
}
