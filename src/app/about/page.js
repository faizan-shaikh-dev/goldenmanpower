import AboutClient from "@/components/AboutClient";

export const metadata = {
  title: "About Us | Trusted Global Recruitment Partner",
  description: "Learn about Golden Manpower Consultants, a government-licensed overseas and domestic manpower recruitment agency with 18+ years of experience. Registered with the Ministry of External Affairs, India, delivering ethical sourcing pipelines.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/about",
  },
  openGraph: {
    title: "About Us | Trusted Global Recruitment Partner | GMC",
    description: "Learn about our 18+ years of recruitment excellence, government-licensed sourcing pipelines, and candidate deployment metrics.",
    url: "https://www.goldenmanpower.com/about",
  }
};

export default function AboutPage() {
  return <AboutClient />;
}
