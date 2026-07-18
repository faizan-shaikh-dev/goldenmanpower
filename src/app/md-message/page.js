import MdMessageClient from "@/components/MdMessageClient";

export const metadata = {
  title: "Leadership Vision | Masha Allah Tours & Travels",
  description: "Meet the leadership team at Masha Allah Tours & Travels — CEO Intiyaz Sheikh, MD Abdullah Imtiyaz Sheikh, and Head Mohd Kayeem. Discover their vision for building compliant global workforces and premium HR outsourcing solutions across India and the UAE.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/md-message",
  },
  openGraph: {
    title: "Leadership Vision | Masha Allah Tours & Travels",
    description: "Meet the leadership team — CEO Intiyaz Sheikh, MD Abdullah Imtiyaz Sheikh, and Head Mohd Kayeem — driving ethical sourcing and compliance management at Masha Allah Tours & Travels.",
    url: "https://www.goldenmanpower.com/md-message",
  }
};

export default function MdMessagePage() {
  return <MdMessageClient />;
}
