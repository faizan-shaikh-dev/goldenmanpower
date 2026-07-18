import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SplashLoader from "@/components/SplashLoader";
import { ThemeProvider } from "@/context/ThemeContext";

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
    default: "Masha Allah Tours & Travels | Overseas & Domestic Recruitment Experts",
    template: "%s | Masha Allah Tours & Travels"
  },
  description: "Masha Allah Tours & Travels (GMC) is a government-licensed overseas and domestic recruitment agency registered with the Ministry of External Affairs, India. Delivering ethical, compliant, and deployment-ready workforce solutions across oil & gas, construction, healthcare, hospitality, logistics, and bulk staffing sectors.",
  keywords: [
    "Masha Allah Tours & Travels",
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
  authors: [{ name: "Masha Allah Tours & Travels" }],
  creator: "Masha Allah Tours & Travels",
  publisher: "Masha Allah Tours & Travels",
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
    title: "Masha Allah Tours & Travels | Overseas & Domestic Recruitment Experts",
    description: "Government-licensed recruitment and manpower consultancy delivering ethical, compliant, and deployment-ready workforce solutions globally.",
    url: "https://www.goldenmanpower.com",
    siteName: "Masha Allah Tours & Travels",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "name": "Masha Allah Tours & Travels",
  "image": "https://www.goldenmanpower.com/logo-preview.png",
  "@id": "https://www.goldenmanpower.com/#organization",
  "url": "https://www.goldenmanpower.com",
  "telephone": "022-4002-9606",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F91, 1st Floor, Kohinoor City Mall, LBS Marg, Kurla (W)",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "400077",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.462319,
    "longitude": 72.8020786
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:30",
    "closes": "18:30"
  },
  "sameAs": [
    "https://www.linkedin.com/company/golden-manpower-consultants/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                  document.documentElement.className = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-primary text-slate-100 selection:bg-gold-500/30 selection:text-gold-200">
        <ThemeProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SplashLoader />
          <Navbar />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
