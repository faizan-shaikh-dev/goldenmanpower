import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact Us | Office Locations & Inquiries",
  description: "Get in touch with Masha Allah Tours & Travels. Access phone numbers, emails, and address locations for our India Head Office (Virar, Mumbai) and Dubai UAE branch.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/contact",
  },
  openGraph: {
    title: "Contact Us | Office Locations & Inquiries | GMC",
    description: "Connect with our global recruitment team. Address directories, phones, and email details for India and UAE offices.",
    url: "https://www.goldenmanpower.com/contact",
  }
};

export default function ContactPage() {
  return <ContactClient />;
}
