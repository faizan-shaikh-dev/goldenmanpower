import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "Reliable Manpower & Recruitment Solutions | Masha Allah Tours & Travels",
  description: "Masha Allah Tours & Travels is a government-licensed overseas and domestic recruitment agency registered under the Ministry of External Affairs, Government of India. Sourcing, screening, and deploying skilled technicians, engineers, and blue-collar staff globally since 2006.",
  alternates: {
    canonical: "https://www.goldenmanpower.com",
  },
  openGraph: {
    title: "Reliable Manpower & Recruitment Solutions | Masha Allah Tours & Travels",
    description: "Delivering ethical, compliant, and deployment-ready workforce solutions across multiple industries since 2006.",
    url: "https://www.goldenmanpower.com",
  }
};

export default function Home() {
  return <HomeClient />;
}
