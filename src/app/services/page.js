import ServicesClient from "@/components/ServicesClient";

export const metadata = {
  title: "Recruitment & Manpower Services",
  description: "Explore our professional recruitment and staffing solutions, including C-suite headhunting, blue-collar labour contracting, document attestation, domestic placement campaigns, and compliance-driven HR outsourcing.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/services",
  },
  openGraph: {
    title: "Recruitment & Manpower Services | GMC",
    description: "Explore our specialized services: Executive Search, Labour Contracting, Document Attestation, Domestic Sourcing, and HR Outsourcing.",
    url: "https://www.goldenmanpower.com/services",
  }
};

export default function ServicesPage() {
  return <ServicesClient />;
}
