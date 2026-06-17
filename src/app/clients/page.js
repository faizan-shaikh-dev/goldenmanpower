import ClientsClient from "@/components/ClientsClient";

export const metadata = {
  title: "Clients & Corporate Partners",
  description: "Golden Manpower Consultants provides recruitment support for leading global companies across construction, logistics, and ports. See our client value pillars and GCC placement track records.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/clients",
  },
  openGraph: {
    title: "Clients & Corporate Partners | GMC",
    description: "Discover why leading organizations trust Golden Manpower Consultants for compliance-driven, speed-based crew recruitment.",
    url: "https://www.goldenmanpower.com/clients",
  }
};

export default function ClientsPage() {
  return <ClientsClient />;
}
