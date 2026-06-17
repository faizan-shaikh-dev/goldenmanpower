import JobSeekersClient from "@/components/JobSeekersClient";

export const metadata = {
  title: "Job Seekers Opportunities",
  description: "Apply for overseas and domestic jobs with Golden Manpower Consultants. Submit your CV to cv@goldenmanpower.com. Vetted, fair, and ethical recruitment for Gulf and international companies.",
  alternates: {
    canonical: "https://www.goldenmanpower.com/job-seekers",
  },
  openGraph: {
    title: "Job Seekers Opportunities | GMC",
    description: "Submit your CV, access verified job opportunities, and benefit from our fair, transparent recruitment processes.",
    url: "https://www.goldenmanpower.com/job-seekers",
  }
};

export default function JobSeekersPage() {
  return <JobSeekersClient />;
}
