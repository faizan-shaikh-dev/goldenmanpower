import { notFound } from "next/navigation";
import ServiceDetailsClient from "@/components/ServiceDetailsClient";

const servicesData = {
  "executive-search": {
    title: "Executive Search",
    subtitle: "Senior Leadership & Management Recruitment",
    icon: "Search",
    desc: "Masha Allah Tours & Travels provides specialized headhunting and executive search solutions to recruit C-level executives, directors, VP-level officers, and critical mid-management personnel. We align our sourcing strategy with your business goals, corporate culture, and technical standards.",
    features: [
      "Board-level & C-Suite Recruitment campaigns",
      "Confidential search protocols for sensitive appointments",
      "Thorough professional background & credentials vetting",
      "Targeted industry mapping & competitor profiling",
      "Salary benchmarking & contract negotiation support",
    ],
    sectors: ["Oil & Gas", "Civil Engineering", "Healthcare & Pharma", "Logistics & Supply Chain", "Information Technology"],
  },
  "labour-contracting": {
    title: "Labour Contracting",
    subtitle: "Sub-Contracting & Project Staffing Solutions",
    icon: "HardHat",
    desc: "We deliver flexible supply arrangements for certified blue-collar workers, technicians, machine operators, and construction laborers. Our sub-contracting models enable you to scale workforces up and down to match construction cycles or heavy industrial project phases.",
    features: [
      "Flexible short-term and long-term manpower leasing",
      "Complete medical insurance & coverage for workers",
      "Handling of transportation, food catering, and camp housing",
      "On-site supervisors for safety compliance and welfare",
      "Strict compliance with regional minimum wage laws",
    ],
    sectors: ["Civil Construction", "Marine Ports & Docks", "Petrochemical Refineries", "Logistics Warehousing", "Manufacturing Plants"],
  },
  "document-attestation": {
    title: "Document Attestation",
    subtitle: "Educational & Professional Certificate Authentication",
    icon: "FileText",
    desc: "We offer end-to-end attestation and verification procedures for certificates required during overseas employment. We coordinate with ministries, embassies, and consular branches to authenticate degrees, diplomas, marriage licenses, and work records.",
    features: [
      "HRD & Notary verification coordination",
      "MEA (Ministry of External Affairs) India Apostille services",
      "Embassy legalizations (UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain)",
      "Secure, fully tracked document courier logistics",
      "Fast-track processing option for emergency deployments",
    ],
    sectors: ["Overseas Placement", "Educational Verification", "Commercial Legalization", "Embassy Authentication", "Corporate Attestation"],
  },
  "domestic-recruitment": {
    title: "Domestic Recruitment",
    subtitle: "Staffing & Professional Sourcing within India",
    icon: "UserCheck",
    desc: "GMC delivers comprehensive permanent and temporary hiring options within India. We support local projects and corporate offices by sourcing, vetting, and interviewing candidates for permanent placement, reducing recruitment cycles.",
    features: [
      "Permanent placement Sourcing & Screening",
      "Contractual staffing for seasonal workloads",
      "Large scale recruitment drives across Tier 1, 2, and 3 cities",
      "Structured skill and technical aptitude assessments",
      "End-to-end onboarding support and post-hire tracking",
    ],
    sectors: ["Infrastructure Projects", "Heavy Manufacturing", "Hospitality & Retail", "Corporate Support Services", "Real Estate & Construction"],
  },
  "hr-outsourcing": {
    title: "HR Outsourcing",
    subtitle: "Payroll, Stat Compliance & Workforce Admin",
    icon: "Building",
    desc: "We support global businesses with HR outsourcing. We coordinate payroll execution, wage records, employee insurance schemes, visa compliance audits, and local labor clearances, enabling you to focus on core operations.",
    features: [
      "Automated payroll calculation and direct salary dispersals",
      "Statutory audits and regional labor law reporting",
      "Workers' compensation administration & health plans management",
      "Statutory compliance reporting (PF, ESIC, Tax filings)",
      "Workforce mobilization and port administrative support",
    ],
    sectors: ["Marine & Offshore Docks", "Multi-site Retail Operations", "Infrastructure Sites", "Global Operations Offices", "Joint-Venture Projects"],
  },
  recruitment: {
    title: "Recruitment",
    subtitle: "Bulk Sourcing & International Placements",
    icon: "Users2",
    desc: "We provide large-scale candidate mobilization for infrastructure, heavy engineering, marine docks, and construction. Our team manages advertising campaigns, screening, trade tests, document verifications, visa runs, and departures.",
    features: [
      "Large-scale sourcing campaigns & job advertisements",
      "Accredited trade test center assessments (skilled trades)",
      "Ministry of External Affairs emigration clearances",
      "Medical checkups at GCC-authorized diagnostic centers",
      "Pre-departure orientation and onboarding preparation",
    ],
    sectors: ["GCC Infrastructure Projects", "International Airports & Ports", "Hospitality Chains", "Commercial Security Services", "Railways & Road Highways"],
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    return {
      title: "Service Details",
    };
  }

  return {
    title: `${data.title} - Manpower Services`,
    description: data.desc,
    alternates: {
      canonical: `https://www.goldenmanpower.com/services/${slug}`,
    },
    openGraph: {
      title: `${data.title} - Manpower Services | GMC`,
      description: data.desc,
      url: `https://www.goldenmanpower.com/services/${slug}`,
    }
  };
}

export async function generateStaticParams() {
  return [
    { slug: "executive-search" },
    { slug: "labour-contracting" },
    { slug: "document-attestation" },
    { slug: "domestic-recruitment" },
    { slug: "hr-outsourcing" },
    { slug: "recruitment" },
  ];
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const data = servicesData[slug];

  if (!data) {
    notFound();
  }

  return <ServiceDetailsClient slug={slug} data={data} />;
}

