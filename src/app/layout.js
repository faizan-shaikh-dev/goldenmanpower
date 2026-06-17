import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashLoader from "@/components/SplashLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Golden Manpower Consultants | Overseas & Domestic Recruitment Experts",
    template: "%s | Golden Manpower Consultants"
  },
  description: "Golden Manpower Consultants (GMC) is a government-licensed overseas and domestic recruitment agency registered with the Ministry of External Affairs, India. Delivering ethical, compliant, and deployment-ready workforce solutions across oil & gas, construction, healthcare, hospitality, logistics, and bulk staffing sectors.",
  keywords: [
    "Golden Manpower Consultants",
    "manpower recruitment agency India",
    "overseas recruitment experts",
    "domestic hiring solutions",
    "MEA licensed agency",
    "blue-collar manpower supply",
    "white-collar recruitment",
    "bulk manpower staffing",
    "Gulf recruitment consultants",
    "HR outsourcing India"
  ],
  authors: [{ name: "Golden Manpower Consultants" }],
  creator: "Golden Manpower Consultants",
  publisher: "Golden Manpower Consultants",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.goldenmanpower.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Golden Manpower Consultants | Overseas & Domestic Recruitment Experts",
    description: "Government-licensed recruitment and manpower consultancy delivering ethical, compliant, and deployment-ready workforce solutions globally.",
    url: "https://www.goldenmanpower.com",
    siteName: "Golden Manpower Consultants",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-primary text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
        <SplashLoader />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
