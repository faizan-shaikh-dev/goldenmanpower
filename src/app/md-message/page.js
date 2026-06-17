import MdMessageClient from "@/components/MdMessageClient";

export const metadata = {
  title: "MD Message | Leadership Vision & Ethics",
  description: "Read the message from our Managing Director, Ashish K. Singh. Learn how Golden Manpower Consultants builds compliant global workforces and provides premium HR outsourcing solutions across India and the UAE.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/md-message",
  },
  openGraph: {
    title: "MD Message | Leadership Vision & Ethics | GMC",
    description: "Read the statement from Managing Director Ashish K. Singh on GMC's ethical sourcing and compliance management practices.",
    url: "https://www.goldenmanpower.com/md-message",
  }
};

export default function MdMessagePage() {
  return <MdMessageClient />;
}
