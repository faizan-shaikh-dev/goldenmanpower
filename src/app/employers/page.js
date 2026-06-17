import EmployersClient from "@/components/EmployersClient";

export const metadata = {
  title: "Employers Manpower Solutions",
  description: "Learn how Golden Manpower Consultants supports employers with ethical manpower supply, technical trade testing, post-deployment assistance, and custom hiring campaigns across India and Gulf countries.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/employers",
  },
  openGraph: {
    title: "Employers Manpower Solutions | GMC",
    description: "Ethical manpower sourcing, technical screening, and large-scale bulk recruitment solutions designed for international businesses.",
    url: "https://www.goldenmanpower.com/employers",
  }
};

export default function EmployersPage() {
  return <EmployersClient />;
}
