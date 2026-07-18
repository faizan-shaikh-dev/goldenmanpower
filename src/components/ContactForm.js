"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "employer", // employer | candidate
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s\-]{8,15}$/.test(formData.phone)) {
      tempErrors.phone = "Please enter a valid phone number (8-15 digits)";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message cannot be empty";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "employer",
        subject: "",
        message: "",
      });
    } catch (err) {
      setSubmitError("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full glass-gold rounded-2xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-gold-600 to-gold-400" />
      
      {submitSuccess ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <CheckCircle2 className="text-gold-500 w-16 h-16 animate-bounce mb-6" />
          <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-400 max-w-sm mb-8">
            Thank you for contacting Masha Allah Tours & Travels. Our representative will get back to you within 24 hours.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="flex items-center gap-2 text-xs font-bold bg-white/5 border border-white/10 hover:border-gold-500 hover:text-gold-400 py-2.5 px-6 rounded-full transition-all"
          >
            <RefreshCw size={12} /> Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-slate-400">
              Submit your inquiry and our placement team will connect with you promptly.
            </p>
          </div>

          {submitError && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-3 px-4 rounded-lg flex items-center gap-2.5">
              <AlertCircle size={16} />
              <span>{submitError}</span>
            </div>
          )}

          {/* Toggle Role */}
          <div className="grid grid-cols-2 bg-primary-dark/80 p-1 rounded-full border border-white/5">
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, role: "employer" }))}
              className={`py-2 px-3 rounded-full text-xs font-bold transition-all ${
                formData.role === "employer"
                  ? "bg-gradient-gold text-primary-dark shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              I am an Employer
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, role: "candidate" }))}
              className={`py-2 px-3 rounded-full text-xs font-bold transition-all ${
                formData.role === "candidate"
                  ? "bg-gradient-gold text-primary-dark shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              I am a Job Seeker
            </button>
          </div>

          {/* Input Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className={`bg-primary-dark border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 transition-all ${
                  errors.name
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500/80"
                    : "border-white/10 focus:ring-gold-500 focus:border-gold-500/80 gold-border-glow"
                }`}
              />
              {errors.name && <span className="text-[10px] text-red-400 mt-0.5">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. john@company.com"
                className={`bg-primary-dark border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 transition-all ${
                  errors.email
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500/80"
                    : "border-white/10 focus:ring-gold-500 focus:border-gold-500/80 gold-border-glow"
                }`}
              />
              {errors.email && <span className="text-[10px] text-red-400 mt-0.5">{errors.email}</span>}
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-slate-300">
                Phone Number <span className="text-gold-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className={`bg-primary-dark border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 transition-all ${
                  errors.phone
                    ? "border-red-500/50 focus:ring-red-500 focus:border-red-500/80"
                    : "border-white/10 focus:ring-gold-500 focus:border-gold-500/80 gold-border-glow"
                }`}
              />
              {errors.phone && <span className="text-[10px] text-red-400 mt-0.5">{errors.phone}</span>}
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={formData.role === "employer" ? "e.g. Hiring Manpower Supply" : "e.g. Apply for Electrical Engineer Job"}
                className="bg-primary-dark border border-white/10 rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500/80 gold-border-glow transition-all"
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-slate-300">
              Your Message <span className="text-gold-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={formData.role === "employer" ? "Please detail your hiring requirements, target positions, country of deployment, and timelines..." : "Please tell us about your experience, field of work, and target job role..."}
              className={`bg-primary-dark border rounded-xl py-3 px-4 text-sm text-white focus:outline-none focus:ring-1 transition-all resize-none ${
                errors.message
                  ? "border-red-500/50 focus:ring-red-500 focus:border-red-500/80"
                  : "border-white/10 focus:ring-gold-500 focus:border-gold-500/80 gold-border-glow"
              }`}
            />
            {errors.message && <span className="text-[10px] text-red-400 mt-0.5">{errors.message}</span>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-gradient-gold text-primary-dark hover:brightness-110 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-gold-500/10 cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4.5 w-4.5 text-primary-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Processing...
              </>
            ) : (
              <>
                <Send size={15} /> Submit Inquiry
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
